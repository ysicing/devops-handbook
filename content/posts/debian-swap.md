---
title: debian手工添加Swap分区
description: 本文主要记录本人在Debian手工添加Swap分区
date: 2023-02-01T16:55:18+08:00
tags:
- debian
---

<!-- truncate -->

## 准备工作

首先，检查你的系统是否已经有 Swap 分区：

```bash
swapon -s
# 或
free -m
```

## 操作

### 创建SWAP分区

```bash
fallocate -l 1G /swapfile
# 如果提示命令不存在
apt install util-linux

chmod 600 /swapfile

# 激活SWAP分区
mkswap /swapfile
swapon /swapfile

# 再次查看
~$ swapon -s
Filename    Type  Size Used Priority
/swapfile                               file     1048572 291536 -2
~$ free -m
               total        used        free      shared  buff/cache   available
Mem:            1725        1008         249           1         467         533
Swap:           1023         284         739
```

### 开机自启

需要编辑 `/etc/fstab` 这个文件，添加加下面的内容即可：

```bash
echo "/swapfile swap swap defaults 0 0" >> /etc/fstab
```

### 调整系统内核 Swappiness 值

Swapiness 是 Linux 内核的一个属性，定义了系统使用交换空间的频率，Swapiness 的值在 0 到 100 之间（默认是 60），一个低的值会使内核尽可能地避免交换，而一个高的值会使内核更积极地使用交换空间。

这个值默认是 60，我们可以使用 `cat /proc/sys/vm/swappiness` 命令查看当前值。

一般我们可以给他改成 10：

```bash
# 示例, 根据具体情况操作
echo "vm.swappiness=10" >> /etc/sysctl.conf
sysctl -p
# 或者实时生效
sysctl -w vm.swappiness=10
```

## 关闭swap

```
swapoff -v /swapfile
# 删除 /etc/fstab 关于 /swapfile 挂载部分
rm -rf /swapfile
```
