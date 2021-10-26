---
title: "Openkruise快速安装"
date: 2021-10-06T11:01:17+08:00
description: 本文介绍Openkruise安装部署
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocFolding: false
tocPosition: inner
tocLevels: ["h2", "h3", "h4"]
tags:
- kubernetes
- openkruise
series:
-
categories:
- kubernetes
image: https://cdn.jsdelivr.net/gh/openkruise/openkruise.io@gh-pages/zh/img/openkruise.ico
---

## 简介

> OpenKruise 是一个基于 Kubernetes 的扩展套件，主要聚焦于云原生应用的自动化，比如部署、发布、运维以及可用性防护。

### 核心功能

- 增强版本的 Workloads, 如原地升级等

## helm安装

### 新增开启特性

- PreDownloadImageForInPlaceUpdate 原地升级镜像预热
- ResourcesDeletionProtection 资源删除保护
- PodUnavailableBudgetUpdateGate pod原地升级
- WorkloadSpread WorkloadSpread 管理应用多分区弹性与拓扑部署

```bash
helm upgrade -i kruise https://github.com/openkruise/kruise/releases/download/v0.10.0/kruise-chart.tgz  --set featureGates="ResourcesDeletionProtection=true\,PreDownloadImageForInPlaceUpdate=true\,PodUnavailableBudgetUpdateGate=true\,WorkloadSpread=true"
```