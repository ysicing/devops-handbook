---
title: "Prometheus Operator 初体验"
date: 2020-05-25T22:55:18+08:00
description: "Prometheus Operator 初体验"
tags:
- kubernetes
- prometheus
---

<!-- truncate -->

> 通过Operator创建Prometheus

## 脚本部署

```
#  在之前的基础上，配置了存储storageclass
git clone https://github.com/ysicing/prometheus.git
cd prometheus
# prometheus-service/prometheus-storageclass.yaml #配置存储
bash -x ./deploy.sh
# 在管理节点执行，如有报错，在执行一下
```

与[官方](https://github.com/coreos/kube-prometheus/tree/master/manifests)的区别支持了数据持久化和域名配置,部分监控组件如etcd等

## ergo安装

```
ergo install prom  --ip 10.147.20.42 --pass oac5eeWosie7aiP5Um2AeKahkaiCeigh  --domain godu.dev
```
