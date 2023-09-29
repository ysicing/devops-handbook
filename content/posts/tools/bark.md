---
title: "部署轻量iOS推送服务Bark"
date: 2023-03-17T18:59:59+08:00
description: "本文主要介绍如何部署iOS推送服务Bark"
tags:
- self-hosted
- bark
- macOS
keywords:
- self-hosted
- bark
- macOS
url: /tools/bark
---

Bark是一款开源的iOS消息推送应用，可以让你通过简单的HTTP请求，给iPhone发送自定义的推送消息。

<!-- truncate -->

## Bark的应用场景

有时候，我们需要给自己设置一些提醒或者通知，但是又不想安装太多的应用或者注册太多的账号，比如：

- 定时提醒自己喝水、休息、锻炼等
- 接收来自其他应用或者网站的重要信息或者通知
- 记录一些临时想法或者笔记

Bark有以下优点：

- 简单易用：只需安装客户端和发送HTTP请求即可
- 开源免费：服务端和客户端均开源，无需付费
- 隐私安全：推送消息不会被存储或者泄露，阅后即焚
- 实时稳定：推送消息走iOS官方渠道，实时性和稳定性都非常可靠

## 客户端

要使用Bark，你需要做以下几个步髤：

1. 下载并安装Bark客户端：你可以在App Store中搜索并下载Bark应用。
2. 获取并保存设备码：打开Bark应用后，在首页上方会显示一个类似于`https://api.day.app/xxxxxxxxxxxxxxxxxxxxxx`的地址。这个地址就是你的设备码，请复制并保存好它。
3. 发送HTTP请求：你可以通过任何方式发送HTTP请求给你的设备码地址。请求格式如下：

:::note
M系列架构的MacMini也可以用哦
:::

## 服务端安装

自主可控选择自己安装服务端哈。支持多种安装方式. 这里我们以k8s为例, 其实服务比较简单, 在k8s跑起来也比较简单

<details>
<summary>k8s yaml</summary>

```yaml title="bs.yaml"
# apiVersion: v1
# kind: PersistentVolumeClaim
# metadata:
#   name: bark-server
# spec:
#   accessModes:
#   - ReadWriteMany
#   resources:
#     requests:
#       storage: 1Gi
#   storageClassName: tkecfs
---
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
  labels:
    k8s.ysicing.me/name: bark-server
  name: bark-server
spec:
  progressDeadlineSeconds: 600
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      k8s.ysicing.me/name: bark-server
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 0%
    type: RollingUpdate
  template:
    metadata:
      labels:
        k8s.ysicing.me/name: bark-server
    spec:
      containers:
      - image: finab/bark-server
        imagePullPolicy: Always
        name: bark-server
        resources:
          limits:
            cpu: 150m
            memory: 256Mi
          requests:
            cpu: 50m
            memory: 128Mi
        volumeMounts:
        - mountPath: /data
          name: bark-server
      restartPolicy: Always
      terminationGracePeriodSeconds: 30
      volumes:
      - name: bark-server
        emptyDir: {}
        # persistentVolumeClaim:
        #   claimName: bark-server
      # - hostPath:
      #     path: /k8sshare/bark-server
      #     type: DirectoryOrCreate
        # name: bark-server
---
apiVersion: v1
kind: Service
metadata:
  labels:
    k8s.ysicing.me/name: bark-server
  name: bark-server
spec:
  ports:
  - name: http
    port: 8080
    protocol: TCP
    targetPort: 8080
  selector:
    k8s.ysicing.me/name: bark-server
  type: ClusterIP
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  labels:
    k8s.ysicing.me/name: bark-server
  name: bark-server
spec:
  rules:
  - host: bark.external.ysicing.net
    http:
      paths:
      - backend:
          service:
            name: bark-server
            port:
              name: http
        path: /
        pathType: ImplementationSpecific
```

</details>

将上述文件保存为bs.yaml并apply到集群

```bash
kubectl apply -f bs.yaml
```

然后在bark应用里配置一下

![bark](/images/blog/20230317/bark.jpg)

## 附录

最后大家可以使用我搭建的bark哈，不保证永久使用哈，如果不维护了会提前通知

:::info
公益服务: [bark.external.ysicing.net](https://bark.external.ysicing.net)
:::
