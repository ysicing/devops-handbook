---
title: 安装
tag:
- cilium
- 安装
---

## 目前最新版本安装

```bash
cilium install --helm-set rollOutCiliumPods=true,ipam.operator.clusterPoolIPv4PodCIDR="10.80.0.0/16"
cilium hubble enable --ui
```

## 0.12.x之前版本安装

```bash
cilium install --config cluster-pool-ipv4-cidr=10.80.0.0/16
cilium hubble enable --ui
```
