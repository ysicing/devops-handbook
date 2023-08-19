---
title: "Rocky9升级内核"
date: 2023-04-19T08:59:59+08:00
description: "本文主要介绍如何在Rocky9升级内核"
tags:
- linux
- rocky
- 运维
keywords:
- linux
- rocky
- 运维
---

简单记录一下Rocky9升级内核.

<!-- truncate -->

## 查看当前内核

```bash
[root@localhost ~]# uname -r
5.14.0-162.6.1.el9_1.x86_64
```

## 配置国内源

```bash
sed -e 's|^mirrorlist=|#mirrorlist=|g' \
    -e 's|^#baseurl=http://dl.rockylinux.org/$contentdir|baseurl=http://mirrors.tencent.com/rocky|g' \
    -i.bak \
    /etc/yum.repos.d/rocky-addons.repo \
    /etc/yum.repos.d/rocky-extras.repo \
    /etc/yum.repos.d/rocky.repo
```

## 更新缓存

```bash
dnf makecache
```

## 安装ELRepo

```bash title="推荐"
dnf -y install elrepo-release
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
dnf install https://www.elrepo.org/elrepo-release-9.el9.elrepo.noarch.rpm
```

### 修改源

```bash
# 修改 epel源
 sed -e 's|^metalink=|#metalink=|g' \
         -e 's|^#baseurl=https\?://download.fedoraproject.org/pub/epel/|baseurl=http://mirrors.tencent.com/epel/|g' \
         -e 's|^#baseurl=https\?://download.example/pub/epel/|baseurl=http://mirrors.tencent.com/epel/|g' \
         -i.bak \
         /etc/yum.repos.d/epel.repo
# 更新缓存
dnf makecache
```

### 查看支持内核

```bash
# 载入elrepo-kernel元数据
dnf --disablerepo=\* --enablerepo=elrepo-kernel repolist
# 查看可用内核包
dnf --disablerepo=\* --enablerepo=elrepo-kernel list kernel*
```

## 升级内核

<details>
<summary>升级内核</summary>

```bash
dnf --disablerepo=\* --enablerepo=elrepo-kernel install -y kernel-ml.x86_64
# 删除旧版本工具包
dnf remove kernel-tools-libs.x86_64 kernel-tools.x86_64
# 安装新版本工具包
dnf --disablerepo=\* --enablerepo=elrepo-kernel install -y kernel-ml-tools.x86_64
```

</details>

## 设置默认内核

```bash
# 查看所有内核启动项
grubby --info=ALL
# 设置默认内核,我这里最新内核index为0
grubby --set-default 0
```

