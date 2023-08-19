---
title: "使用渠成命令行工具qcadmin之部署k3s集群"
date: 2023-04-24T16:59:59+08:00
description: "本文主要介绍使用渠成命令行工具q部署k3s集群"
tags:
- self-hosted
- qcadmin
- 渠成
- 禅道
- quickon
keywords:
- self-hosted
- qcadmin
- 渠成
- 禅道
- quickon
---





[渠成命令行`qcadmin`](https://github.com/easysoft/quickon_cli)(简称: `q`)是一个开源的、简单易用的、运维效能工具。它可以帮你部署k3s集群&渠成平台(禅道全家桶)。

<!-- truncate -->

## 目前核心功能

- [x] 部署k3s集群`cluster`
- [x] 部署渠成平台`quickon`

本次主要介绍`cluster`部分, 目前支持

- [x] `clean`       clean cluster
- [x] `delete`      delete node(s)
- [x] `init`        init cluster
- [x] `join`        join cluster
- [x] `precheck`    Precheck system
- [x] `status`      status cluster

:::tip
目前仅支持amd64, 虽然也提供arm64，但是部分服务还没有提供相关架构镜像
:::

## 安装

安装方式也比较多哈，咱就是灵活哈，不过我个人推荐还是从github或者软件源安装，因为这样可以方便的更新到最新版本

### 官网安装

版本会滞后一些，但是可以保证稳定性

```bash titile="一键安装"
curl https://pkg.qucheng.com/qucheng/cli/stable/v2/get.sh | sh -
```

### github安装

版本随时更新, 但是可以保证成功

```bash title="最新"
curl -L --fail --remote-name-all https://ghproxy.com/https://github.com/easysoft/quickon_cli/releases/latest/download/{qcadmin_linux_amd64,checksums.txt}
sha256sum -c <(grep qcadmin_linux_amd64 checksums.txt)
chmod +x qcadmin_linux_amd64
install qcadmin_linux_amd64 /usr/bin/qcadmin
```

### 软件源安装

同github哈, 目前只提供deb&rpm包哈

```bash title="更简单😂"
echo "deb [trusted=yes] https://repo.qucheng.com/quickon/apt/ /" | tee /etc/apt/sources.list.d/quickon.list
apt update
apt search qcadmin
apt install qcadmin
```

### 源码安装

要求`go1.20`哈

```bash title="源码安装"
mkdir -p $GOPATH/src/github.com/easysoft
cd $GOPATH/src/github.com/easysoft
git clone https://github.com/easysoft/quickon_cli.git
# git checkout 最近的tag
# 查看最新操作指南
make help
```

## 推荐配置

- `Debian11`(amd64) 真的很稳定, 绝大多数开发测试基于Debian
- 内核版本至少`6.0`吧, <del>(我自己基本6.1或者6.2)</del>

### 硬件推荐

如果仅仅是跑k3s, 那么1核1G内存也能跑, 但是如果你想跑渠成平台, 那么推荐最低配置如下:

- 2 核虚拟 CPU
- 4 GB 内存
- 40 GB 储存空间

## 部署k3s集群

> 因为做的足够简单，所以没啥好写的

### 懒人版本

```bash title="初始化当前节点"
q cluster init
```

<details>
<summary>更多参数q cluster init --help</summary>

```bash
      --cni string            k8s networking plugin, support flannel, wireguard, custom (default "flannel")
      --data-dir string       cluster & quickon data dir (default "/opt/quickon")
  -h, --help                  help for init
      --master stringArray    master ip list, e.g: 192.168.0.1:22
  -p, --password string       ssh password
      --pkfile string         ssh private key, if not set, will use password
      --pkpass string         ssh private key password
      --pod-cidr string       k8s cluster pod cidr (default "10.42.0.0/16")
      --service-cidr string   k8s cluster service cidr (default "10.43.0.0/16")
  -u, --username string       ssh user (default "root")
      --worker stringArray    worker ip list, e.g: 192.168.0.1:22
```

</details>

### 高级使用

<Tabs
  defaultValue="init"
  values={[
    {label: 'init', value: 'init'},
    {label: 'join', value: 'join'},
    {label: 'delete', value: 'delete'},
    {label: 'precheck', value: 'precheck'},
    {label: 'status', value: 'status'},
    {label: 'clean', value: 'clean'},
  ]}>
  <TabItem value="init" label="init">
  <details>
<summary>初始化高级使用</summary>

```bash title="通过ssh方式初始化1m2w集群"
q cluster init --master 10.10.16.22 --worker 10.10.16.35 --worker 10.10.16.39 --pkfile /root/.ssh/id_rsa
```

</details>
  </TabItem>
  <TabItem value="join" label="join">
  <details>
<summary>添加节点</summary>

:::tip 要求

- 当前节点可以登陆到添加的节点
- 如果init时没指定相关参数，join时需要指定ssh相关参数

:::

```bash title="添加1m1w"
q cluster join --master 10.10.16.23 --worker 10.10.16.34
```

</details>
  </TabItem>

  <TabItem value="delete" label="delete">
  <details>
<summary>删除节点</summary>

:::tip 要求

- 目前不可以删除当前节点或初始化节点

:::

```bash title="删除节点"
q cluster delete --ips 10.10.16.23 --ips 10.10.16.34
```

</details>
  </TabItem>

  <TabItem value="precheck" label="precheck">
  <details>
<summary>检查节点</summary>

:::note

试验性功能，目前正常完善, 类似kubeadm的pre-flight checks

:::

```bash title="检查节点"
q cluster precheck
```

</details>
  </TabItem>

  <TabItem value="status" label="status">
  <details>
<summary>集群</summary>

:::note

试验性功能，目前正在完善，目前只支持列车节点资源信息

:::

```bash title="集群节点资源"
q cluster status nodes
q status nodes
```

</details>
  </TabItem>

  <TabItem value="clean" label="clean">
  <details>
<summary>卸载</summary>

:::danger
操作需谨慎哈
:::

```bash title="卸载"
q cluster clean
```

</details>
  </TabItem>

</Tabs>

## 其他说明

在初始化过程中包含了我之前在k8s部署方面的实践, 不局限于参数优化等。

如果你有什么好的想法💡, 欢迎和我交流😂, 目前还在迭代中, 上手也比较简单。

[easysoft/quickon_cli](https://github.com/easysoft/quickon_cli)
