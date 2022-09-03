---
title: debian升级内核
tag:
- debian
- 升级
---

## 配置并更新软件源

```bash
cat > /etc/apt/sources.list <<EOF
deb http://mirrors.tencent.com/debian/ bullseye main contrib non-free
deb http://mirrors.tencent.com/debian/ bullseye-updates main contrib non-free
deb http://mirrors.tencent.com/debian/ bullseye-backports main contrib non-free
deb http://mirrors.tencent.com/debian-security bullseye-security main contrib non-free
EOF
apt update
```

## 升级

```bash
apt dist-upgrade -y
apt install -t bullseye-backports linux-image-amd64 -y
```

## 更新引导并重启

```bash
update-grub
reboot
```