---
title: "阿里云轻量应用服务器升级内核"
date: 2019-05-18T22:55:18+08:00
description: "阿里云轻量应用服务器升级内核"
tags:
- debian
---

<!-- truncate -->

## 阿里云轻量应用服务器升级内核

> 升级有风险请慎重哦

#### 配置说明

> 阿里云HK 1核1G1TB30Mbps ¥24/m
> Debian 9.9


#### 更新源

> 需要移除默认源，使用如下源

```
# 需要添加buster-backports源
sed -i "s#stretch#buster#g" /etc/apt/sources.list
# 示例
deb http://mirrors.a li yun c/debian/ buster main contrib non-free
deb http://mirrors.aliyun.com/debian/ buster-updates main contrib non-free
deb http://mirrors.aliyun.com/debian/ buster-proposed-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
deb http://mirrors.aliyun.com/debian-security/ buster/updates main non-free contrib
```

更新升级

```bash
apt-get update
apt-get dist-upgrade -y
```

#### 升级到最新内核

```
apt-get install -t buster-backports linux-image-amd64 -y
update-grub
apt autoclean
apt autoremove -y
reboot
```

#### 升级完成后docker无法启动

```
prior storage driver aufs failed: driver not supported
```

删除`/var/lib/docker`，docker存储由aufs变成overlay2
