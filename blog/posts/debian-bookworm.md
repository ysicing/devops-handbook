---
title: Debian12信息汇总
description: 本文主要记录Debian12的一些信息
date: 2023-05-14T16:55:18+08:00
tags:
- debian
keywords:
- debian
---

Debian 12，代号`bookworm`，将于6月10日发布

<!-- truncate -->

- 内核版本使用6.1版本
- 支持非自由软件包(升级的话软件源`/etc/apt/sources.list`可能需要除了`codename`调整外，还需要调整非自由软件目录)
- 彻底移除python2
- 一些常用包更新到较新版本如:
  - `php`更新到`8.2`
  - `python3`更新到`3.11`
  - `openjdk`更新到`11.6`

:::tip 我的情况

- 我的部分服务器已经更新到Debian12了
- 目前基础容器镜像debian暂时还没有,估计得等正式发布后，之前有尝试，但是发现有些依赖的镜像还没发布哈，再等等☝️

:::
