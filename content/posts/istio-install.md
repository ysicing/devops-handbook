---
title: "Istio 1.7安装"
date: 2020-09-01T21:53:59+08:00
description: "k8s部署istio 1.7"

tags:
- istio
---

<!-- truncate -->

## 安装记录

```bash
git clone https://github.com/ysicing/istio-install.git
cd istio-install
istioctl install --set profile=demo --set hub=registry.cn-beijing.aliyuncs.com/k7scn
kubectl apply -f .
```

## 部署demo

```
kubectl create ns istio-demo
kubectl label namespace istio-demo istio-injection=enabled
kubectl apply -f example/bookinfo.yaml -n istio-demo
```
