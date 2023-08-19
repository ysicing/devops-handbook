---
title: "k8s配置默认存储"
date: 2020-05-18T22:55:18+08:00
description: "k8s配置默认存储"
tags:
- csi
- kubernetes
- k8s
keywords:
- csi
- kubernetes
- k8s
---

<!-- truncate -->

> 配置默认存储

```bash
# 集群已有存储类型（StorageClass），执行 kubectl get sc看下当前是否设置了默认的 storageclass
kubectl get sc

kubectl patch storageclass nfs-data -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
```
