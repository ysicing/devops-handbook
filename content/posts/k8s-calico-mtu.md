---
title: "k8s实践之calico mtu"
date: 2020-05-18T22:55:18+08:00
description: "k8s实践之calico mtu"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- calico
series:
-
categories: 
- kubernetes
image:
---


## Ucloud 网络

ucloud默认mtu是 1454

所以calico需要改mtu

```
kubectl patch configmap/calico-config -n kube-system --type merge   -p '{"data":{"veth_mtu": "1404"}}'
```

参考 [Configure MTU to maximize network performance](https://docs.projectcalico.org/networking/mtu)