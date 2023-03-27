---
title: "在k8s上部署私有Git服务: Gitea"
date: 2023-03-27T12:30:59+08:00
description: "本文主要介绍如何在k8s上安装Gitea"
authors: ysicing
tags:
- self-hosted
- gitea
- k8s
keywords:
- self-hosted
- gitea
- k8s
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

[Gitea](https://github.com/go-gitea/gitea) 是一款轻量的Git服务.

<!-- truncate -->

## 部署服务端

支持多种安装方式. 这里我们以k8s为例, 其实服务比较简单, 在k8s跑起来也比较简单.

<details>
<summary>k8s yaml</summary>

```yaml title="gitea.yaml"
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  labels:
    k8s.ysicing.me/name: gitea
  name: gitea
spec:
  # storageClassName: tkecfs
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 1Gi
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    k8s.ysicing.me/name: gitea
  name: gitea
spec:
  replicas: 1
  selector:
    matchLabels:
      k8s.ysicing.me/name: gitea
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 0%
    type: RollingUpdate
  template:
    metadata:
      labels:
        k8s.ysicing.me/name: gitea
    spec:
      containers:
      - image: gitea/gitea
        imagePullPolicy: Always
        name: gitea
        resources:
          limits:
            cpu: 500m
            memory: 512Mi
          requests:
            cpu: 125m
            memory: 128Mi
        volumeMounts:
        - mountPath: /data
          name: gitea
      restartPolicy: Always
      volumes:
      - name: gitea
        persistentVolumeClaim:
          claimName: gitea
---
apiVersion: v1
kind: Service
metadata:
  labels:
    k8s.ysicing.me/name: gitea
  name: gitea
spec:
  ports:
  - name: http
    port: 80
    protocol: TCP
    targetPort: 3000
  - name: ssh
    port: 22
    protocol: TCP
    targetPort: 22
  selector:
    k8s.ysicing.me/name: gitea
  type: LoadBalancer
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  labels:
    k8s.ysicing.me/name: gitea
  name: gitea
spec:
  rules:
  - host: gitea.ysicing.cloud
    http:
      paths:
      - backend:
          service:
            name: gitea
            port:
              name: http
        path: /
        pathType: ImplementationSpecific
  - host: git.ysicing.cloud
    http:
      paths:
      - backend:
          service:
            name: gitea
            port:
              name: http
        path: /
        pathType: ImplementationSpecific
```

</details>

```bash title="执行生效gitea.yaml"
kubectl apply -f gitea.yaml
```

## 高级配置

```ini title="新增的额外gitea配置"
[picture]
GRAVATAR_SOURCE = https://mirrors.ysicing.cloud/gravatar/

[webhook]
ALLOWED_HOST_LIST = external,private

[actions]
ENABLED = true
```

新增如上配置, 使得gitea支持webhook(私有网络推送)和actions

