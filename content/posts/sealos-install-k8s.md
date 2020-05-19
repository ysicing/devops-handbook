---
title: "sealos安装k8s"
date: 2020-05-18T22:55:18+08:00
description: "sealos安装k8s"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- kubernetes
- 安装
series:
-
categories: 
- kubernetes
image:
---

> 推荐使用[sealos](https://github.com/fanux/sealos), 一键高可用，简单上手, 安装k8s 1.18.2版本

## 准备工作

### 虚拟机

环境: 3台机器(debian/buster, 11.11.11.111~11.11.11.113, 2核4G80G存储)

```bash
ergo init vm --vmname k8s --vmnum 3
```

### 初始化环境

```
ergo init debian  --ip 11.11.11.111 --ip 11.11.11.112 --ip 11.11.11.113
```

### 安装docker

```
ergo install docker --ip 11.11.11.111 --ip 11.11.11.112 --ip 11.11.11.113
ergo install tools --ip 11.11.11.111 --ip 11.11.11.112 --ip 11.11.11.113
```

### 安装k8s

> 说明，我定制了sealos和calico版本为最新版本,且使用了在线安装包

```
# 安装了k8s 1.18.2, 安装了ingress, 配置nfs，默认存储类为nfs-data
ergo install k8s --enablenfs=true --mip 11.11.11.111 --wip 11.11.11.112-11.11.11.113
```
