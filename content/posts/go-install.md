---
title: "安装golang"
date: 2020-05-18T22:55:18+08:00
description: "安装golang"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- go
- 安装
series:
-
categories: 
- go
image:
---

> 主要是用于linux安装


### 安装,配置

```bash
# 下载
wget https://dl.google.com/go/go1.13.6.linux-amd64.tar.gz
# 解压
tar -C /usr/local -xzf go1.13.3.linux-amd64.tar.gz
# 配置 .bashrc
export GO111MODULE=on
export GOPROXY=https://goproxy.cn
export GOPATH="/root/go"
export GOBIN="$GOPATH/bin"
export PATH=$PATH:$GOBIN:/usr/local/go/bin
source .bashrc
# 验证
go env
```

### 一键脚本

```bash
curl https://ysicing.me/hack/install/go.sh | bash
```