---
title: "Consul安装"
date: 2020-08-03T20:04:08+08:00
description: helm安装consule
tags:
- consul
---

<!-- truncate -->

> 通过helm快速安装consule

```
# 默认已存在默认sc

kubectl get sc

nfs-data (default)     nfs-data      Delete          Immediate           false                  206d
```

安装consul

```
helminit
kubectl create ns gaea-op

helm upgrade -i consul --set global.imageRegistry=registry.cn-beijing.aliyuncs.com \
    --set image.repository=k7scn/b-consul \
    --set volumePermissions.enabled=true \
    --set volumePermissions.image.repository=k7scn/b-minideb \
    --set persistence.enabled=true \
    --set metrics.enabled=true \
    --set metrics.image.repository=k7scn/b-consul-exporter \
    --set ingress.enabled=true \
    --version 7.1.3 \
    bitnami/consul  -n gaea-op 
```
