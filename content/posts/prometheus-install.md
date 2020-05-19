---
title: "通过Operator创建Prometheus"
date: 2020-05-18T22:55:18+08:00
description: "通过Operator创建Prometheus"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- kubernetes
- prometheus
series:
-
categories: 
- kubernetes
- prometheus
image:
---

> 通过Operator创建Prometheus

## 为什么需要prometheus-operator

> 因为是prometheus主动去拉取的,所以在k8s里pod因为调度的原因导致pod的ip会发生变化,人工不可能去维持,自动发现有基于DNS的,但是新增还是有点麻烦。Prometheus-operator的本职就是一组用户自定义的CRD资源以及Controller的实现，Prometheus Operator这个controller有RBAC权限下去负责监听这些自定义资源的变化，并且根据这些资源的定义自动化的完成如Prometheus Server自身以及配置的自动化管理工作。在Kubernetes中我们使用Deployment、DamenSet，StatefulSet来管理应用Workload，使用Service，Ingress来管理应用的访问方式，使用ConfigMap和Secret来管理应用配置。我们在集群中对这些资源的创建，更新，删除的动作都会被转换为事件(Event)，Kubernetes的Controller Manager负责监听这些事件并触发相应的任务来满足用户的期望。这种方式我们成为声明式，用户只需要关心应用程序的最终状态，其它的都通过Kubernetes来帮助我们完成，通过这种方式可以大大简化应用的配置管理复杂度。而除了这些原生的Resource资源以外，Kubernetes还允许用户添加自己的自定义资源(Custom Resource)。并且通过实现自定义Controller来实现对Kubernetes的扩展,不需要用户去二开k8s也能达到给k8s添加功能和对象。因为svc的负载均衡,所以在K8S里监控metrics基本最小单位都是一个svc背后的pod为target,所以prometheus-operator创建了对应的CRD: kind: ServiceMonitor ,创建的ServiceMonitor里声明需要监控选中的svc的label以及metrics的url路径的和namespaces即可 (摘自[@张馆长](https://zhangguanzhang.github.io/2018/10/12/prometheus-operator/))

## 部署

```
#  在之前的基础上，配置了存储storageclass
git clone https://github.com/ysicing/prometheus.git
cd prometheus
# prometheus-service/prometheus-storageclass.yaml #配置存储
bash -x ./deploy.sh
# 在管理节点执行，如有报错，在执行一下
```

与[官方](https://github.com/coreos/kube-prometheus/tree/master/manifests)的区别支持了数据持久化和域名配置,部分监控组件如etcd等
