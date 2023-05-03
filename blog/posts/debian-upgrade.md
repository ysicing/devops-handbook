---
title: debian升级内核
description: 本文主要记录本人升级Debian内核
date: 2023-02-01T16:55:18+08:00
tags:
- debian
---

<!-- truncate -->

## 配置并更新软件源

```bash
cat > /etc/apt/sources.list <<EOF
deb http://mirrors.tencent.com/debian/ bookworm main contrib non-free non-free-firmware
deb http://mirrors.tencent.com/debian/ bookworm-updates main contrib non-free non-free-firmware
deb http://mirrors.tencent.com/debian/ bookworm-backports main contrib non-free non-free-firmware
deb http://mirrors.tencent.com/debian/ bookworm-proposed-updates main contrib non-free non-free-firmware
deb http://mirrors.tencent.com/debian-security bookworm-security main contrib non-free non-free-firmware
EOF
apt update
```

## 升级

```bash
apt dist-upgrade -y
apt install -t bookworm-backports linux-image-amd64 -y
```

## 更新引导并重启

```bash
update-grub
reboot
```
