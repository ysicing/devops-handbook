---
title: "k8s常用扩展组件"
date: 2020-05-18T22:55:18+08:00
description: "k8s常用扩展组件"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- kubernetes
series:
-
categories: 
- kubernetes
image:
---

> 扩展了Kubernetes的功能

#### 部署kuboard

```
kubectl apply -f https://sh.ysicing.me/k7s/install/kuboard/deploy.yml
# 因为ingress部署关系，所以配置解析域名为ui.slb.k7s.xyz
# 管理节点执行，获取token
kbtoken
```

#### 部署metrics-server

```
kubectl apply -f https://sh.ysicing.me/k7s/install/metrics-server/deploy.yaml
```

#### 部署Dashboard

```
sealos install --pkg-url https://github.com/sealstore/dashboard/releases/download/v2.0.0-bata5/dashboard.tar
kdtoken
```