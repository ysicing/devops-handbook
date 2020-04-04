## Debian 10操作指南

> 操作有风险

#### 更新源

> 需要移除默认源，使用如下源

```
# 默认
cat >/etc/apt/sources.list <<EOF
deb http://mirrors.ustc.edu.cn/debian/ buster main contrib non-free
deb http://mirrors.ustc.edu.cn/debian/debian/ buster-updates main contrib non-free
deb http://mirrors.ustc.edu.cn/debian/ buster-backports main contrib non-free
deb http://mirrors.ustc.edu.cn/debian-security/ buster/updates main contrib non-free
EOF

# Ucloud
cat >/etc/apt/sources.list <<EOF
deb http://mirrors.ucloud.cn/debian/ buster main contrib non-free
deb http://mirrors.ucloud.cn/debian/ buster-updates main contrib non-free
deb http://mirrors.ucloud.cn/debian/ buster-backports main contrib non-free
deb http://mirrors.ucloud.cn/debian-security/ buster/updates main contrib non-free
EOF
```

更新升级

```bash
apt update
apt dist-upgrade -y
```

#### 升级到最新内核

```
apt-get install -t buster-backports linux-image-amd64 -y
update-grub
apt autoclean
apt autoremove -y
reboot
```