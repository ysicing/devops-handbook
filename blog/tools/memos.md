---
title: "部署轻量私有化备忘录memos"
date: 2023-03-12T23:59:59+08:00
description: "本文主要介绍如何部署"
tags:
- self-hosted
- memos
- gitea
keywords:
- self-hosted
- memos
- gitea
---

<!-- truncate -->

## 简介

> [`memos`](https://github.com/usememos/memos) 是一个开源的、支持私有化部署的碎片化知识卡片管理工具，可以简单理解为自主可控的轻量微博。

## 部署

部署很简单, 一梭子就可以了

### docker方式

<details>
<summary>docker-compose.yaml</summary>

```docker title="docker-compose.yaml"
version: "3.0"
services:
  memos:
    image: neosmemo/memos:latest
    restart: always
    container_name: memos
    volumes:
      - ~/.memos/:/var/opt/memos
    ports:
      - 5230:5230
```

</details>

启动服务

```bash
docker compose pull
docker compose up -d
```

### k8s方式

<details>
<summary>k8s yaml</summary>

```docker title="memos.yaml"
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  labels:
    k8sapp.ysicing.cloud/name: memos
  name: memos
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
    k8sapp.ysicing.cloud/name: memos
  name: memos
spec:
  replicas: 1
  selector:
    matchLabels:
      k8sapp.ysicing.cloud/name: memos
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 0%
    type: RollingUpdate
  template:
    metadata:
      labels:
        k8sapp.ysicing.cloud/name: memos
    spec:
      containers:
      - image: neosmemo/memos
        imagePullPolicy: Always
        name: memos
        resources:
          limits:
            cpu: 150m
            memory: 256Mi
          requests:
            cpu: 50m
            memory: 128Mi
        volumeMounts:
        - mountPath: /var/opt/memos
          name: memos
      restartPolicy: Always
      volumes:
      - name: memos
        persistentVolumeClaim:
          claimName: memos
---
apiVersion: v1
kind: Service
metadata:
  labels:
    k8sapp.ysicing.cloud/name: memos
  name: memos
spec:
  ports:
  - name: http
    port: 5230
    protocol: TCP
    targetPort: 5230
  selector:
    k8sapp.ysicing.cloud/name: memos
  type: ClusterIP
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  labels:
    k8sapp.ysicing.cloud/name: memos
  name: memos
spec:
  rules:
  - host: memos.ysicing.cloud
    http:
      paths:
      - backend:
          service:
            name: memos
            port:
              name: http
        path: /
        pathType: ImplementationSpecific
```

</details>

然后apply到集群即可

```bash
kubectl apply -f memos.yaml
```

### 群晖部署

原理也是基于docker部署的，具体操作可以参考[开源Memos在群晖上部署](https://life97.top/synology-memos/)

## 高级配置

> 拓展Memos的使用

### SSO登录

> 这里我基于gitea配置的，配置如下:

```toml
Name: gitea
Identifier filter:
Client ID: xxxxx
Client secret: xxxxx
Authorization endpoint: https://xxx/login/oauth/authorize
Token endpoint: https://xxx/login/oauth/access_token
User info endpoint: https://xxx/api/v1/user
Scopes: user
Identifier: login
Display name: user
Email: email
```

### 多端支持

小程序部署具体可以参考 [Rabithua/memos_wmp](https://github.com/Rabithua/memos_wmp)

移动端支持具体可以参考 [Moe Memos](https://memos.moe/)

## 附录

[我的私有化微博](https://note.ysicing.cloud/explore)
