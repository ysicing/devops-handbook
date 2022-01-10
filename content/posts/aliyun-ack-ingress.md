---
title: "ACK 添加内网负载均衡"
date: 2020-05-18T22:55:18+08:00
description: "ACK 添加内网负载均衡"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- ingress
- kubernetes
- ack
series:
-
categories: 
- kubernetes
- ack
image: images/custom/graph.png
---


先已经创建好内网slb,获取slb的ID为`lb-xxxx`

```
# intranet-slb-ingress.yml
apiVersion: v1
kind: Service
metadata:
  # 这里服务取名为nginx-ingress-lb-intranet
  name: nginx-ingress-lb-intranet
  namespace: kube-system
  labels:
    app: nginx-ingress-lb-intranet
  annotations:
    # 指明SLB实例地址类型为私网类型
    service.beta.kubernetes.io/alicloud-loadbalancer-address-type: intranet
    # 修改为您的私网SLB实例ID
    service.beta.kubernetes.io/alicloud-loadbalancer-id: lb-xxxx
    # 是否自动创建SLB端口监听（会覆写已有端口监听），也可手动创建端口监听
    service.beta.kubernetes.io/alicloud-loadbalancer-force-override-listeners: 'true'
spec:
  type: LoadBalancer
  # route traffic to other nodes
  externalTrafficPolicy: "Cluster"
  ports:
  - port: 80
    name: http
    targetPort: 80
  - port: 443
    name: https
    targetPort: 443
  selector:
    # select app=ingress-nginx pods
    app: ingress-nginx
```

生效内网slb

```
kubectl apply -f intranet-slb-ingress.yml
```

查看slb

```
nginx-ingress-lb                                  LoadBalancer   172.x.x.x    39.x.x.x   80:31110/TCP,443:31574/TCP   20h
nginx-ingress-lb-intranet                         LoadBalancer   172.x.x.x    10.x.x.x   80:30740/TCP,443:30852/TCP   73m
```
