---
title: "在k8s中部署Tailscale私有中继服务器Derper"
date: 2022-04-01T20:55:19+08:00
description: 介绍如何让Tailscale使用自定义的 DERP Servers
tags:
- tailscale
- kubernetes
---

<!-- truncate -->

## DERP 简介

`Detoured Encrypted Routing Protocol`，这是 Tailscale 自研协议，用于在私有网络中实现路由转发。所有客户端之间的连接都是先选择 DERP 模式（中继模式），这意味着连接立即就能建立（优先级最低但 100% 能成功的模式），用户不用任何等待。然后开始并行地进行路径发现，通常几秒钟之后，我们就能发现一条更优路径，然后将现有连接透明升级（upgrade）过去，变成点对点连接。

更多可以阅读 [Tailscale 基础教程：部署私有 DERP 中继服务器](https://fuckcloudnative.io/posts/custom-derp-servers)

## 部署

### Dockerfile

> 需要调整一下Dockerfile

```Dockerfile
FROM ghcr.io/yangchuansheng/ip_derper

ENV DERP_ADDR=":12345"

# build self-signed certs && start derper
CMD bash /app/build_cert.sh $DERP_HOST $DERP_CERTS /app/san.conf && \
    /app/derper --hostname=$DERP_HOST \
    --certmode=manual \
    --certdir=$DERP_CERTS \
    --stun  \
    --a=$DERP_ADDR \
    --verify-clients=$DERP_VERIFY_CLIENTS
```

构建出镜像示例： `ysicing/ip_derper:latest`

### 集群中部署

```yaml
---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: derper
  namespace: ergo-system
  labels:
    mode.ysicing.me/workload: node
    k8s.ysicing.me/name: derper
spec:
  selector:
    matchLabels:
      mode.ysicing.me/workload: node
      k8s.ysicing.me/name: derper
  template:
    metadata:
      labels:
        mode.ysicing.me/workload: node
        k8s.ysicing.me/name: derper
    spec:
      containers:
      - name: derper
        image: ysicing/ip_derper
        resources:
          requests:
            cpu: 10m
            memory: 20Mi
      terminationGracePeriodSeconds: 30
---
apiVersion: v1
kind: Service
metadata:
  name: derper
  namespace: ergo-system
spec:
  selector:
    mode.ysicing.me/workload: node
    k8s.ysicing.me/name: derper
  type: ClusterIP
  ports:
  - name: stun
    protocol: UDP
    port: 3478
    targetPort: 3478
  - name: http
    protocol: TCP
    port: 12345
    targetPort: 12345
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: tcp-services
  namespace: kube-system
data:
  12345: "ergo-system/derper:12345"
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: udp-services
  namespace: kube-system
data:
  3478: "ergo-system/derper:3478"
```

生效之后配置在tailscale后台配置:

```json
{
  "Regions": {
    "901": {
      "RegionID": 901,
      "RegionCode": "tx-bj",
      "RegionName": "Qcloud Beijing",
      "Nodes": [
        {
          "Name": "901a",
          "RegionID": 901,
          "DERPPort": 12345,
          "HostName": "xxxx",
          "IPv4": "xxxx",
          "InsecureForTests": true
        },
        {
          "Name": "901b",
          "RegionID": 901,
          "DERPPort": 12345,
          "HostName": "xxxx",
          "IPv4": "xxxx",
          "InsecureForTests": true
        }
      ]
    }
  }
}
```

注意:

1. `HostName`和`IPv4`填实际ip
2. 忽略证书校验

### 重启

依次重启tailscaled, 然后检查

```bash
tailscale netcheck
```
