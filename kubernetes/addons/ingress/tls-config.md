> nginx ingress 配置域名证书(默认以ingress-nginx为例)

##  创建证书

默认已经签发证书

## 创建 secret

创建好证书以后，需要将证书内容放到 secret 中，secret 中全部内容需要 base64 编码

```yaml
# ingress-secret.yml
apiVersion: v1
kind: Secret
metadata:
  name: ingress-secret-prom
  namespace: monitoring
type: kubernetes.io/tls
data:
  tls.crt: <base64 encoded cert>
  tls.key: <base64 encoded key>
```

完成创建

```bash
~# kubectl apply -f ingress-secret.yml -n monitoring
secret/ingress-secret created
~# kubectl apply -f ingress-secret.yml -n kube-system
secret/ingress-secret created
```

或者通过如下方式

```bash
kubectl create secret tls ingress-secret --key tls.key.pem --cert tls.pem
```

## 配置ingress

```yaml
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    kubernetes.io/ingress.class: nginx
  name: prom
  namespace: monitoring
spec:
  tls:
  - hosts:
    - prom.k7s.xyz
    - grafana.k7s.xyz
    - alter.k7s.xyz
    secretName: ingress-secret
  rules:
  - host: prom.k7s.xyz
    http:
      paths:
      - backend:
          serviceName: prometheus-k8s
          servicePort: 9090
  - host: grafana.k7s.xyz
    http:
      paths:
      - backend:
          serviceName: grafana
          servicePort: 3000
  - host: alter.k7s.xyz
    http:
      paths:
      - backend:
          serviceName: alertmanager-main
          servicePort: 9093
```