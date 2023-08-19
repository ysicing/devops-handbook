---
title: "部署轻量私有化服务监控UptimeKuma"
date: 2023-03-17T18:59:59+08:00
description: "本文主要介绍如何部署UptimeKuma"
tags:
- self-hosted
- uptime-kuma
- 监控
- monitor
- bark
keywords:
- self-hosted
- 监控
- uptime-kuma
- monitor
- bark
---

Uptime Kuma 是一个开源的、简单易用的、自托管的监控工具，功能类似于 Uptime Robot。它可以帮助你监控你的网站或者任何暴露在互联网上的服务，如 HTTP、TCP、Ping、DNS 等，并且提供实时的状态和通知功能。本文将介绍如何安装、配置和使用 Uptime Kuma。

<!-- truncate -->

## 安装

Uptime Kuma 支持多种安装方式. 这里我们以compose和k8s为例，介绍如何安装 Uptime Kuma。

### Docker方式

默认已经安装好docker啦, 如果没有参考[docker安装](/posts/docker)

```yaml
# docker-compose.yaml
version: "3"
services:
  uptime-kuma:
    image: louislam/uptime-kuma:1
    container_name: uptime-kuma
    restart: always
    ports:
      - 3001:3001
    volumes:
      - uptime:/app/data

volumes:
  uptime:
    driver: local
```

运行以下命令来启动 Uptime Kuma：

```bash
# 老版本或者直接使用二进制方式
docker-compose up -d
# 新版本docker plugin插件方式
docker compose up -d
```

### k8s方式

其实服务比较简单, 在k8s跑起来也比较简单

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  labels:
    k8s.ysicing.me/name: uptime
  name: uptime
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
    k8s.ysicing.me/name: uptime
  name: uptime
spec:
  replicas: 1
  selector:
    matchLabels:
      k8s.ysicing.me/name: uptime
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 0%
    type: RollingUpdate
  template:
    metadata:
      labels:
        k8s.ysicing.me/name: uptime
    spec:
      containers:
      - image: louislam/uptime-kuma:1
        imagePullPolicy: Always
        name: uptime
        resources:
          limits:
            cpu: 150m
            memory: 256Mi
          requests:
            cpu: 50m
            memory: 128Mi
        volumeMounts:
        - mountPath: /app/data
          name: uptime
      restartPolicy: Always
      volumes:
      - name: uptime
        persistentVolumeClaim:
          claimName: uptime
---
apiVersion: v1
kind: Service
metadata:
  labels:
    k8s.ysicing.me/name: uptime
  name: uptime
spec:
  ports:
  - name: http
    port: 3001
    protocol: TCP
    targetPort: 3001
  selector:
    k8s.ysicing.me/name: uptime
  type: ClusterIP
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  labels:
    k8s.ysicing.me/name: uptime
  name: uptime
spec:
  rules:
  - host: uptime.i.ysicing.cloud
    http:
      paths:
      - backend:
          service:
            name: uptime
            port:
              name: http
        path: /
        pathType: ImplementationSpecific
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  labels:
    k8s.ysicing.me/name: uptime
  annotations:
    nginx.ingress.kubernetes.io/configuration-snippet: |
      rewrite ^/dashboard$  https://uptime.i.ysicing.cloud/dashboard redirect;
  name: uptime-status
spec:
  rules:
  - host: status.ysicing.cloud
    http:
      paths:
      - backend:
          service:
            name: uptime
            port:
              name: http
        path: /
        pathType: ImplementationSpecific
```

将上述文件保存为kuma.yaml并apply到集群

```bash
kubectl apply -f kuma.yaml
```

## 配置kuma

> 这里以k8s为例。

在启动 Uptime Kuma 后，你可以通过浏览器访问 [uptime.i.ysicing.cloud](https://uptime.i.ysicing.cloud) 来进入 Uptime Kuma 的界面。如果你是第一次访问，你需要先创建一个管理员账号和密码。然后，你就可以登录并开始配置 Uptime Kuma。

:::note
添加监控项比较简单，这里提下Bark告警推送遇到的坑哈, [bark](/tags/bark)群组不能为中文
:::

![bug](/images/blog/20230317/uptime-kuma-bark.jpg)

## 配置监控页

也比较简单, 安装步骤一步一步来就可以咯

![uptime-status-01](/images/blog/20230317/uptime-status-01.jpg)

### 配置自定义域名

通常我们都会默认用[`status.ysicing.cloud`](https://status.ysicing.cloud)来展示服务状态哈

![uptime-status-02](/images/blog/20230317/uptime-status-02.jpg)

## 附录

- [云缘生StatusPage](https://status.ysicing.cloud)
- [懒人版自建iOS推送Bark](/tools/bark)
