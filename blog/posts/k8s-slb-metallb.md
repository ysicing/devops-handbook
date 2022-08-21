---
title: "开源k8slb工具Metallb"
date: 2020-06-19T22:14:20+08:00
description: 本文主要讲述穷人如何使用LoadBalancer
author: ysicing
tags:
- kubernetes
- LoadBalancer
---

<!-- truncate -->

## 简介

kubernetes本身并没有实现LoadBalancer, 如果是云上用户，可以使用云服务商提供k8s的LoadBalancer, 如阿里云的slb。

当我们把k8s部署在私有云时，需要简单的LoadBalancer来验证工作，开源的metallb就是一个不错的选择。

通过k8s原生的方式提供LB类型的Service支持，开箱即用。

核心特性:

- `地址分配` MetalLB会为用户的lb类型service分配IP地址，该IP地址需要用户预先分配
- `外部申明` 地址分配后还需要通知到网络中的其他主机, 有两种方式基于ARP的Layer2和BGP

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
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update 
helm upgrade -i metallb bitnami/metallb  --create-namespace -n metallb-system

# 默认空配置
kubectl get cm/metallb-config  -n metallb-system -o yaml 
kubectl apply -f https://sh.ysicing.me/k8s/helm/metallb/lbconfig.yaml
```

### 配置说明

```
# https://sh.ysicing.me/k8s/helm/metallb/lbconfig.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: metallb-system
  name: metallb-config
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
