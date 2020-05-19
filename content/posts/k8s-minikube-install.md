---
title: "minikube安装k8s"
date: 2020-05-18T22:55:18+08:00
description: "minikube安装k8s"
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

## minikube安装k8s

### MacOS安装

```bash
brew install minikube
```

```bash
# PROXY可以根据自己需要设置，可不设置
minikube start --cpus=2 --memory 4g --disk-size=40g --driver=virtualbox --image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers --nodes=2 --docker-env HTTP_PROXY=http://192.168.99.1:7890 --docker-env HTTPS_PROXY=http://192.168.99.1:7890  --docker-env NO_PROXY=127.0.0.1/32,192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,localhost
```