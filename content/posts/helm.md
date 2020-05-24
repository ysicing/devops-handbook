---
title: "helm小记"
date: 2020-05-24T02:55:18+08:00
description: "记录helm相关使用"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- helm
series:
-
categories: 
- helm
image: images/helm/helm.svg
---

## 安装

> 安装docker时默认已经安装了helm,如果不是最新版本请`upgrade-tools`

```bash
upgrade-tools
# 版本
helm version
version.BuildInfo{Version:"v3.2.1", GitCommit:"fe51cd1e31e6a202cba7dead9552a6d418ded79a", GitTreeState:"clean", GoVersion:"go1.13.10"}
```

## 配置helm镜像库

```bash
# 自动
helminit

# 手动
helm repo add stable http://mirror.azure.cn/kubernetes/charts/
helm repo add incubator http://mirror.azure.cn/kubernetes/charts-incubator/
```