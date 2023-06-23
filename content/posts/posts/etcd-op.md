---
title: "Etcd使用入门"
date: 2020-05-31T19:54:36+08:00
description: Etcd使用入门
author: ysicing
tags:
- etcd
---

<!-- truncate -->

## 简介

etcd是CoreOS团队发起的开源项目，目标是构建一个高可用的分布式键值(key-value)数据库。etcd内部采用raft协议作为一致性算法，etcd基于Go语言实现。

etcd比较多的应用场景是用于服务发现。

## 使用helm安装etcd

```bash
# 查询
helm search repo etcd

NAME                    CHART VERSION   APP VERSION     DESCRIPTION                                       
bitnami/etcd            4.8.2           3.4.9           etcd is a distributed key value store that prov...
incubator/etcd          0.7.4           3.2.26          Distributed reliable key-value store for the mo...
stable/etcd-operator    0.10.3          0.9.4           CoreOS etcd-operator Helm chart for Kubernetes    
stable/zetcd            0.1.9           0.0.3           CoreOS zetcd Helm chart for Kubernetes  

# 下载helm包,执行定制
helm pull bitnami/etcd

# 使用nodeport, 禁用rbac，禁用存储
helm install etcd bitnami/etcd --set service.type=NodePort --set service.type=NodePort --set auth.rbac.enabled=false --set persistence.enabled=false -n ops-open

export NODE_IP=$(kubectl get nodes --namespace ops-open -o jsonpath="{.items[0].status.addresses[0].address}")
export NODE_PORT=$(kubectl get --namespace ops-open -o jsonpath="{.spec.ports[0].nodePort}" services etcd)
export ETCDURL=http://$NODE_IP:$NODE_PORT
echo "etcd URL: $ETCDURL"
export ECTDCTL_API=3
etcdctl member list --endpoints=$ETCDURL
```

