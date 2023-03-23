---
title: "一键安装go"
date: 2019-05-18T22:55:18+08:00
description: "一键安装go"
tags:
- go
keywords:
- go
---

<!-- truncate -->

## Linux环境一键脚本

```bash
curl https://cos.ysicing.cloud/oss/scripts/go.sh | bash
```

## Mac安装

如果已经安装了brew，就可以快速安装了

```bash title="安装go"
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

```bash
快捷键cmd+shift+p
键入: go install
选择 "Go: Install/Update Tools"
Check all the checkboxes
```

## Linux安装

访问 [golang中国](https://golang.google.cn/dl/) 获取最新go版本

```bash
# 下载
wget https://dl.google.com/go/go1.20.2.linux-amd64.tar.gz
# 解压
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.20.2.linux-amd64.tar.gz
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

