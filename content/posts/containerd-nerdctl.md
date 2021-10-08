---
title: "Containerd 使用教程之nerdctl"
date: 2021-10-07T17:16:45+08:00
description: 本文主要描述Containerd Cli的安装及使用姿势。
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocFolding: false
tocPosition: inner
tocLevels: ["h2", "h3", "h4"]
tags:
- containerd
- nerdctl
series:
-
categories:
- containerd
image: images/cri/containerd.png
---

> 默认本文演示环境为`Debian GNU/Linux 11 (bullseye)`

## 安装

nerdctl默认提供了两个压缩包

- `nerdctl-0.12.1-linux-amd64.tar.gz`, 仅包含nerdctl
- `nerdctl-full-0.12.1-linux-amd64.tar.gz`, 包含了runc和作为k8s容器运行时所需的cni文件

默认我们使用第二个压缩包`nerdctl-full-0.12.1-linux-amd64.tar.gz`,除非本地已安装使用containerd

```bash
# 从github下载
wget https://github.techoc.workers.dev/https://github.com/containerd/nerdctl/releases/download/v0.12.1/nerdctl-full-0.12.1-linux-amd64.tar.gz
# 解压
tar Cxzvvf /usr/local nerdctl-full-0.12.1-linux-amd64.tar.gz
# 开启启动
systemctl enable containerd.service --now
```

## 配置

Containerd 的默认配置文件为 `/etc/containerd/config.toml`, 可以使用如下命令生成默认配置

```bash
containerd config default > /etc/containerd/config.toml
```

#### 生成docker执行文件

```
cat > /usr/local/bin/docker <<EOF
#!/bin/bash
/usr/local/bin/nerdctl $@
EOF
chmod +x /usr/local/bin/docker
```

#### 安装docker常用扩展插件

```docker
docker run --rm -v /usr/local/bin:/sysdir registry.cn-beijing.aliyuncs.com/k7scn/tools tar zxf /pkg.tgz -C /sysdir
```

#### 其他

快速安装containerd脚本 [containerd-install](https://sh.ysicing.me/k8s/cri/containerd-install)