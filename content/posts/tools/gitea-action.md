---
title: "Gitea Action初体验"
date: 2023-03-27T12:30:59+08:00
description: "本文主要介绍如何使用Gitea Action"
authors: ysicing
tags:
- self-hosted
- gitea
- ci
keywords:
- self-hosted
- gitea
- ci
---





[Gitea Action](https://github.com/go-gitea/gitea/issues/13539) 是一款基于Action协议且兼容Github Action的Gitea内置CI工具.

<!-- truncate -->

## 服务端部署

:::tip 版本说明
需要Gitea 1.19及之后版本
:::

Gitea Action 服务端部署比较简单, 可以参考[在k8s上部署私有Git服务: Gitea](/tools/gitea-k8s)

### 后台配置

需要使用管理员权限，访问管理后台， 如果没看到说明没开启action功能，需要在配置文件中开启

![gitea](/images/blog/20230413/gitea-action-runner.jpg)

## 部署runner

gitea action是基于github action本地测试工具act衍生出来的。

[nektos/act](https://github.com/nektos/act)

目前支持两种模式, 但是都需要依赖docker:

- 二进制方式
- 容器

综上, 方便起见二进制部署叭

### 下载二进制

```bash title="预编译每日版本"
https://dl.gitea.com/act_runner/main/act_runner-main-linux-amd64
```

### 注册Runner

除了URL和Token需要自定义外，其他默认即可

```bash title="选择交互式"
./act_runner register
```

### 守护方式运行

```bash title="/etc/systemd/system/gitea-act.service"
[Unit]
Description=Act Runner
Documentation=https://k3s.io
Wants=network-online.target

[Install]
WantedBy=multi-user.target

[Service]
Type=exec
User=root
# EnvironmentFile=-/etc/systemd/system/k3s.service.env
WorkingDirectory=/root
KillMode=process
Delegate=yes
# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=1048576
LimitNPROC=infinity
LimitCORE=infinity
TasksMax=infinity
TimeoutStartSec=0
Restart=always
RestartSec=5s
ExecStart=/usr/bin/act-runner daemon
```

设置开机启动一梭子

```bash
systemctl enable gitea-act --now
```

启动完成后，看后台runner起来Alive就可以了

## Action初体验

:::tip 坑

刚支持，坑比较多

:::

- action默认是未启用的，每个项目需要单独开启, `设置->仓库->Actions`
- 兼容github action, 基本不需要改动啥

```yaml title=".gitea/workflows/example.yaml"
name: checks
on: 
  - push
  - pull_request

env:
  GOPROXY: https://goproxy.io,direct
  GOPATH: /go_path
  GOCACHE: /go_cache

jobs:
  lint:
    name: check and test
    runs-on: ubuntu-latest
    steps:
      - name: cache go path
        id: cache-go-path
        uses: https://github.com/actions/cache@v3
      - uses: actions/setup-go@v3
        with:
          go-version: 1.20
      - uses: actions/checkout@v3
      - name: vet checks
        run: make vet
```

简单说下, 推荐使用完整域名的github action, gitea action同步更新比较慢, 而且目前还不支持私有内网action或者带有加速域名如`https://ghproxy.com/https://github.com/actions/cache@v3`

```bash
actions/checkout@v3 ---> https://gitea.com/actions/checkout@v3
https://github.com/actions/cache@v3 ---> https://github.com/actions/cache@v3
```

## 总结

如果github action玩的很6, gitea action很简单了哈，除了网络问题😂

目前还是比较期待能支持k8s方式
