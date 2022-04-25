---
title: "使用 chartmuseum 管理 Helm Chart"
date: 2022-04-21T09:23:55+08:00
description: 记录一下部署chartmuseum及简单使用
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocFolding: false
tocPosition: inner
tocLevels: ["h2", "h3", "h4"]
tags:
- helm
- chartmuseum
series:
-
categories:
- helm
image: images/helm/chartmuseum.png
---

> 很早之前就写了哈

## 什么是chartmuseum

> `chartmuseum` 是一个开源的 Helm Chart Repository，支持多种后端存储(s3等). 

chartmuseum 提供若干 API 以实现 Helm Chart Repository 的能力。

## 部署chartmuseum

```yaml
# .ergo/data/charts.yaml
version: '2.1'
services:
  charts-pass:
    image: ccr.ccs.tencentyun.com/k7scn/chartmuseum:v0.14.0
    container_name: charts-pass
    restart: always
    volumes:
      - ./chartspass:/charts
    ports:
      - "9080:9080"
    environment:
      - PORT=9080
      - DEBUG=1
      - STORAGE=local
      - STORAGE_LOCAL_ROOTDIR=/charts
      - AUTH_ANONYMOUS_GET=true
      - BASIC_AUTH_PASS=aituZie3eex5fiDongoShairiangae6o
      - BASIC_AUTH_USER=ysicing
  charts-noauth:
    image: ccr.ccs.tencentyun.com/k7scn/chartmuseum:v0.14.0
    container_name: charts-noauth
    restart: always
    volumes:
      - ./chartsnoauth:/charts
    ports:
      - "9081:9081"
    environment:
      - PORT=9081
      - DEBUG=1
      - STORAGE=local
      - STORAGE_LOCAL_ROOTDIR=/charts
      - AUTH_ANONYMOUS_GET=true
```

启动chartmuseum

```bash
ergo repo init
ergo addons install ysicing/compose
ergo compose -f .ergo/data/charts.yaml up -d
```

测试

```bash
# linux ergo addons install ysicing/helm
helm repo add d1 http://127.0.0.1:9080
helm repo add d2 http://127.0.0.1:9081
```

## 简单使用

### cm-push使用

```bash
# 大陆安装
helm plugin install https://gitee.com/ysbot/helm-push
helm cm-push -h
```

### Drone CI使用

在CI中推送charts可以参考 [drone-stack/drone-plugin-helm-release](https://github.com/drone-stack/drone-plugin-helm-release)
