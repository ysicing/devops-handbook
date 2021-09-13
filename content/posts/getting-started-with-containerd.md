---
title: "Containerd 使用教程"
date: 2021-09-13T17:16:45+08:00
description: 本文主要描述Containerd的安装及使用姿势。
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocFolding: false
tocPosition: inner
tocLevels: ["h2", "h3", "h4"]
tags:
- containerd
- cri
series:
-
categories:
- containerd
image: images/cri/containerd.png
---

> 默认本文演示环境为`Debian GNU/Linux 11 (bullseye)`

## 安装

containerd默认提供了两个压缩包

- `containerd-1.5.5-linux-amd64.tar.gz`
- `cri-containerd-cni-1.5.5-linux-amd64.tar.gz`, 包含了runc和作为k8s容器运行时所需的cni文件

默认我们使用第二个压缩包`cri-containerd-cni-1.5.5-linux-amd64.tar.gz`,除非本地测试使用第一个

```bash
# 从github下载
wget https://github.com/containerd/containerd/releases/download/v1.5.5/cri-containerd-cni-1.5.5-linux-amd64.tar.gz
# 解压
tar -C / -xzf cri-containerd-cni-1.5.5-linux-amd64.tar.gz
# 开启启动
systemctl enable containerd.service
# 启动
systemctl start containerd
```

查看版本信息

```bash
ctr version
Client:
  Version:  v1.5.5
  Revision: 72cec4be58a9eb6b2910f5d10f1c01ca47d231c0
  Go version: go1.16.6

Server:
  Version:  v1.5.5
  Revision: 72cec4be58a9eb6b2910f5d10f1c01ca47d231c0
  UUID: 6a851001-a5f3-4722-94c4-38e2916eb44c
```

## 配置文件

Containerd 的默认配置文件为 `/etc/containerd/config.toml`, 可以使用如下命令生成默认配置

```bash
containerd config default > /etc/containerd/config.toml
```

### 高级配置

> 利用containerd插件机制

查看目前支持的插件 `ctr plugins ls`

```bash
ctr plugins ls
TYPE                            ID                       PLATFORMS      STATUS
io.containerd.content.v1        content                  -              ok
io.containerd.snapshotter.v1    aufs                     linux/amd64    skip
io.containerd.snapshotter.v1    btrfs                    linux/amd64    skip
io.containerd.snapshotter.v1    devmapper                linux/amd64    error
io.containerd.snapshotter.v1    native                   linux/amd64    ok
io.containerd.snapshotter.v1    overlayfs                linux/amd64    ok
io.containerd.snapshotter.v1    zfs                      linux/amd64    skip
io.containerd.metadata.v1       bolt                     -              ok
io.containerd.differ.v1         walking                  linux/amd64    ok
io.containerd.gc.v1             scheduler                -              ok
io.containerd.service.v1        introspection-service    -              ok
io.containerd.service.v1        containers-service       -              ok
io.containerd.service.v1        content-service          -              ok
io.containerd.service.v1        diff-service             -              ok
io.containerd.service.v1        images-service           -              ok
io.containerd.service.v1        leases-service           -              ok
io.containerd.service.v1        namespaces-service       -              ok
io.containerd.service.v1        snapshots-service        -              ok
io.containerd.runtime.v1        linux                    linux/amd64    ok
io.containerd.runtime.v2        task                     linux/amd64    ok
io.containerd.monitor.v1        cgroups                  linux/amd64    ok
io.containerd.service.v1        tasks-service            -              ok
io.containerd.internal.v1       restart                  -              ok
io.containerd.grpc.v1           containers               -              ok
io.containerd.grpc.v1           content                  -              ok
io.containerd.grpc.v1           diff                     -              ok
io.containerd.grpc.v1           events                   -              ok
io.containerd.grpc.v1           healthcheck              -              ok
io.containerd.grpc.v1           images                   -              ok
io.containerd.grpc.v1           leases                   -              ok
io.containerd.grpc.v1           namespaces               -              ok
io.containerd.internal.v1       opt                      -              ok
io.containerd.grpc.v1           snapshots                -              ok
io.containerd.grpc.v1           tasks                    -              ok
io.containerd.grpc.v1           version                  -              ok
io.containerd.grpc.v1           cri                      linux/amd64    ok
```

#### 镜像加速

```toml
# 参考文档 https://github.com/containerd/containerd/blob/main/docs/cri/registry.md
[plugins."io.containerd.grpc.v1.cri".registry]
  [plugins."io.containerd.grpc.v1.cri".registry.mirrors]
    [plugins."io.containerd.grpc.v1.cri".registry.mirrors."docker.io"]
      endpoint = ["https://registry-1.docker.io"]
    [plugins."io.containerd.grpc.v1.cri".registry.mirrors."test.https-registry.io"]
      endpoint = ["https://HostIP1:Port1"]
    [plugins."io.containerd.grpc.v1.cri".registry.mirrors."test.http-registry.io"]
      endpoint = ["http://HostIP2:Port2"]
    # wildcard matching is supported but not required.
    [plugins."io.containerd.grpc.v1.cri".registry.mirrors."*"]
      endpoint = ["https://HostIP3:Port3"]
  [plugins."io.containerd.grpc.v1.cri".registry.configs]
    [plugins."io.containerd.grpc.v1.cri".registry.configs."gcr.io".auth]
      username = "_json_key"
      password = 'paste output from jq'
```

#### 其他

示例containerd配置文件 [config.toml](https://sh.ysicing.me/k8s/cri/containerd.config.toml)