---
title: 配置External DNS附加组件支持DNSPod
date: 2022-05-25T22:55:18+08:00
description: eks集群基于dnspod配置External DNS
tags:
- k8s
- eks
- dns
- dnspod
---

<!-- truncate -->

比较简单直接上代码

:::info
示例域名`example.com`
:::

## 安装

```yaml
# e-dns.yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: external-dns
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: external-dns
rules:
- apiGroups: [""]
  resources: ["services","endpoints","pods"]
  verbs: ["get","watch","list"]
- apiGroups: ["extensions","networking.k8s.io"]
  resources: ["ingresses"]
  verbs: ["get","watch","list"]
- apiGroups: [""]
  resources: ["nodes"]
  verbs: ["list"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: external-dns-viewer
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: external-dns
subjects:
- kind: ServiceAccount
  name: external-dns
  namespace: kube-system
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: external-dns
data:
  tencent-cloud.json: |
    {
      "regionId": "ap-shanghai",
      "secretId": "...自行替换...",
      "secretKey": "...自行替换...",
      "internetEndpoint": true
    }
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: external-dns
spec:
  strategy:
    type: Recreate
  selector:
    matchLabels:
      app: external-dns
  template:
    metadata:
      labels:
        app: external-dns
    spec:
      containers:
      - args:
        - --source=service
        - --source=ingress
        - --domain-filter=example.com # 将使 ExternalDNS 仅看到与提供的域匹配的托管区域，省略以处理所有可用的托管区域
        - --provider=tencentcloud
        - --policy=sync # 设置“upsert-only”将阻止 ExternalDNS 删除任何记录
        - --tencent-cloud-zone-type=public # 仅管理私有托管区域。设置“public”以使用公网 DNS 服务
        - --tencent-cloud-config-file=/etc/kubernetes/tencent-cloud.json
        - --log-level=debug
        image: ysicing/dnspod-external-dns:v1.1.0
        imagePullPolicy: Always
        name: external-dns
        resources:
          limits:
            cpu: 500m
            memory: 512Mi
          requests:
            cpu: 100m
            memory: 128Mi
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
        volumeMounts:
        - mountPath: /etc/kubernetes
          name: config-volume
          readOnly: true
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      serviceAccount: external-dns
      serviceAccountName: external-dns
      terminationGracePeriodSeconds: 30
      volumes:
      - configMap:
          defaultMode: 420
          items:
          - key: tencent-cloud.json
            path: tencent-cloud.json
          name: external-dns
        name: config-volume
```

生效

```bash
kubectl apply -f e-dns.yaml -n kube-system
```

## 测试

```yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: whoami
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: whoami
  replicas: 5
  template:
    metadata:
      labels:
        app.kubernetes.io/name: whoami
    spec:
      containers:
      - image: ysicing/whoami:2022
        imagePullPolicy: Always
        name: whoami
        resources:
          requests:
            cpu: 100m
            memory: 100Mi
          limits:
            cpu: 100m
            memory: 100Mi
        ports:
        - containerPort: 32379
---
apiVersion: v1
kind: Service
metadata:
  name: whoami
spec:
  ports:
    - port: 80
      targetPort: 32379
      protocol: TCP
  selector:
    app.kubernetes.io/name: whoami
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: whoami-01
  annotations:
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/group.name: whoami
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80},{"HTTPS": 443}]'
    # alb.ingress.kubernetes.io/certificate-arn: arn:aws:acm:us-east-1:<根ID>:certificate/<cid>
    external-dns.alpha.kubernetes.io/hostname: 02.whoami.example.com
spec:
  ingressClassName: alb
  rules:
    - host: 02.whoami.example.com
      http:
        paths:
        - path: /
          pathType: Prefix
          backend:
            service:
              name: whoami
              port:
                number: 80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: whoami-02
  annotations:
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/group.name: whoami
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80},{"HTTPS": 443}]'
    external-dns.alpha.kubernetes.io/hostname: 01.whoami.example.com
    # alb.ingress.kubernetes.io/certificate-arn: arn:aws:acm:us-east-1:<根ID>:certificate/<cid>
spec:
  ingressClassName: alb
  rules:
    - host: 01.whoami.example.com
      http:
        paths:
        - path: /
          pathType: Prefix
          backend:
            service:
              name: whoami
              port:
                number: 80
```
