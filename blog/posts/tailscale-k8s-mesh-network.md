---
title: "Tailscale内网穿透新姿势"
date: 2021-10-02T10:39:15+08:00
description: 本文主要讲述tailscale如何打通podip,svcip
tags:
- wireguard
- tailscale
- kubernetes
---

<!-- truncate -->

> 很久就用上了,用于替代之前自行部署的`wireguard mesh`组网

## Token申请

申请两个token, 一个用于pod,一个用于svc

![](/images/other/tailscale-token.jpg)

## helm 安装

```bash
helm repo add mvisonneau https://charts.visonneau.fr
helm repo update

helm upgrade -i  \
  tailscale-relay-svc \
  mvisonneau/tailscale-relay \
  --set config.authKey=<your_auth_key>
  -n kube-system

kubectl get cm/tailscale-relay-svc-config  -n kube-system -o yaml 

apiVersion: v1
data:
  TAILSCALE_ADVERTISE_ROUTES: 10.42.0.0/16
kind: ConfigMap
```

## 配置route

![](/images/other/tailscale-route.jpg)
