---
title: "一键安装go1.17"
date: 2019-05-18T22:55:18+08:00
description: "一键安装go1.17"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- go
series:
-
categories: 
- go
image: images/other/go1.svg
---


## Mac安装

如果已经安装了brew，就可以快速安装了

```
# 安装git
brew install git

# 安装go
brew install go

# add GOBIN path to your PATH in ~/.zshrc
export GO111MODULE=on
export GOPROXY=https://goproxy.cn
export GOPATH="/Users/ysicing/go" # 示例
export GOBIN="$GOPATH/bin"
export PATH=$HOME/bin:/usr/local/bin:/usr/local/opt/mysql-client/bin:$GOBIN:$PATH
```

### 配置Visual Studio Code Editor

```
快捷键cmd+shift+p
键入: go install
选择 "Go: Install/Update Tools"
Check all the checkboxes
```

## Linux安装

访问 [golang中国](https://golang.google.cn/dl/) 获取最新go版本

```bash
# 下载
wget https://dl.google.com/go/go1.17.linux-amd64.tar.gz
# 解压
tar -C /usr/local -xzf go1.17.linux-amd64.tar.gz
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
# 20210819 废弃
curl https://sh.ysicing.me/install/go.sh | bash
```