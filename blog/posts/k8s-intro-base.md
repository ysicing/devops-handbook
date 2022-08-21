---
title: "k8s实践之基础概念"
date: 2020-05-18T22:55:18+08:00
description: "k8s实践之基础概念"
tags:
- kubernetes
---

<!-- truncate -->

## 概念篇

> Kubernetes 基本概念和使用方法

### 架构

![k8s架构](/images/k8s/k8s-arch.png)

![k8s整体架构](/images/k8s/kubernetes-high-level-component-archtecture.jpg)

```
etcd保存了整个集群的状态；
apiserver提供了资源操作的唯一入口，并提供认证、授权、访问控制、API注册和发现等机制；
controller manager负责维护集群的状态，比如故障检测、自动扩展、滚动更新等；
scheduler负责资源的调度，按照预定的调度策略将Pod调度到相应的机器上；

kubelet负责维护容器的生命周期，同时也负责Volume（CSI）和网络（CNI）的管理；
Container runtime负责镜像管理以及Pod和容器的真正运行（CRI）；
kube-proxy负责为Service提供cluster内部的服务发现和负载均衡；

CoreDns 集群dns解析服务
Ingress Controller 应用层负载均衡提供对外访问服务
Kube-state-metrics 集群监控
Prometheus 资源监控
Dashboard Web UI 
```

### Master(Control Plane)节点

![master节点架构](/images/k8s/kubernetes-master-arch.png)

Master是集群的控制平面:

- 负载集群的全局决策(如调度等)
- 探测响应集群事件(如探测应用的实例数是否符合预期)
- 通常master节点不调度业务服务

Master节点主要包括kube-apiserver、kube-scheduler、kube-controller-manager和etcd四个组件。

```bash
kube-apiserver: API服务, Kubernetes控制平面的前端，所有请求入口
kube-scheduler: watch API资源状态，根据相关条件调度到合适的node节点创建相关资源
kube-controller-manager: 生命周期管理和API业务逻辑(如: 节点控制器,副本控制器)
etcd: k8s数据存储组件
cloud-controller-manager: 云服务商组件，对接各家云资源(云服务商维护)
```

### Worker(Node)节点

![worker节点架构](/images/k8s/kubernetes-node-arch.png)

包括kubelet、kube-proxy和Container Runtime三个组件。

```
kubelet:
    运行在集群每个节点的客户端，需要确保相关容器运行在pod中；
    通过PodSpecs标签，描述容器的运行状态；
    kubelet只管理通过kubernetes创建的容器。
    
kube-proxy：
    是一个运行在集群每个节点的网络代理组件,主要是维护网络规则，保证集群内外与Pod通信。
    
Container Runtime：
    支持运行容器底层环境的软件；
    支持： CRI(Container Runtime Interface) 如Docker/Containerd。
```

### 核心Addons

> Addons 使用 Kubernetes 资源（DaemonSet、Deployment等）实现集群的功能特性。由于他们提供集群级别的功能特性，addons使用到的Kubernetes资源都放置在 `kube-system`名称空间下。

- CNI(Calico等)
- DNS(CoreDNS等)
- UI(Dashboard)
- ...

[官方Addons](https://kubernetes.io/docs/concepts/cluster-administration/addons/)
