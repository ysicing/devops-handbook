---
title: "开源k8slb工具Metallb"
date: 2020-06-19T22:14:20+08:00
description:
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: inner
tocLevels: ["h2", "h3", "h4"]
pinned: false
author: ysicing
authorEmoji: 🐶
tags: 
- kubernetes
- LoadBalancer
series:
-
categories:
- kubernetes
image: images/custom/graph.png
---

## 简介

k8s的LoadBalancer类型的Service依赖云服务商的Load Balancer, 如阿里云的slb。

当我们把k8s部署在私有云时，需要简单的LoadBalancer来验证工作，开源的metallb就是一个不错的选择。

通过k8s原生的方式提供LB类型的Service支持，开箱即用。

## 原理

- Layer2 (默认使用)
- BGP

### Layer2

只需要一段跟K8s管理网相同网段的地址即可, 通常这种就可以了。

在此模式下, 会从k8s节点中选一个Leader节点，在这个节点上面响应LB地址段的ARP请求，从而使上层路由把发往LB的流量都发到Leader节点。缺点也很明显，所有对LB的请求都会发往Leader节点。如果当前Service下面的Pod分布在不同节点，那么这个流量还会从Leader发往相应的节点。

局限性: 单节点流量瓶颈和慢故障转移

### BGP

需要上层路由器支持BGP，不在需要Leader节点。

## 安装

```
kubectl get ns | grep metallb-system && exit 0
kubectl apply -f https://gitee.com/ysicing/ergo/raw/master/hack/k8s/metallb/metallb.yaml
kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"
kubectl apply -f https://gitee.com/ysicing/ergo/raw/master/hack/k8s/metallb/lbconfig.yaml
# 或者使用ergo
ergo install mlb --pass vagrant
```

### 配置说明

```
# https://gitee.com/ysicing/ergo/raw/master/hack/k8s/metallb/lbconfig.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: metallb-system
  name: config
data:
  config: |
    address-pools:
    - name: lbpool
      protocol: layer2
      addresses:
      - 11.11.11.150-11.11.11.200
```

### 测试

```yaml
# lb.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 2
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - port: 80
      targetPort: 80
  type: LoadBalancer
```

测试

```
root@k8s1:~# kubectl apply -f lb.yaml
root@k8s1:~# kubectl get pods,svc
NAME                                   READY   STATUS    RESTARTS   AGE
pod/nginx-deployment-d46f5678b-hm7r6   1/1     Running   0          96s
pod/nginx-deployment-d46f5678b-zgfxd   1/1     Running   0          96s

NAME                    TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)        AGE
service/kubernetes      ClusterIP      10.96.0.1      <none>         443/TCP        88m
service/nginx-service   LoadBalancer   10.98.184.75   11.11.11.150   80:32002/TCP   6s
```