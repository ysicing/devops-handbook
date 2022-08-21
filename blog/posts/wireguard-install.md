---
title: "内网穿透之wireguard"
date: 2020-05-18T22:55:18+08:00
description: "内网穿透之wireguard"
tags:
- wireguard
---

<!-- truncate -->

> 内网穿透之wireguard

## 安装

#### Debian

```
# Debian Bullseye 之前版本都需要启用backports源来支持安装
apt install wireguard -y
```

#### macOS

```
brew install wireguard-tools
```

## 配置服务端

```
cd /etc/wireguard
# 创建服务端密钥对
umask 077
wg genkey | tee privatekey | wg pubkey > publickey
# 创建wg0.conf
cat > /etc/wireguard/wg0.conf <<EOF
[Interface]
PrivateKey = <Private Key>
Address = 10.0.0.1/24, fd86:ea04:1115::1/64
ListenPort = 51820
PostUp = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE; ip6tables -A FORWARD -i wg0 -j ACCEPT; ip6tables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE; ip6tables -D FORWARD -i wg0 -j ACCEPT; ip6tables -t nat -D POSTROUTING -o eth0 -j MASQUERADE
SaveConfig = true
EOF
# 启动
wg-quick up wg0
# 开机启动
systemctl enable wg-quick@wg0
# 检查
wg show
```

## 配置客户端

```
umask 077
wg genkey | tee privatekey | wg pubkey > publickey
cat > /etc/wireguard/wg0.conf <<EOF
[Interface]
PrivateKey = <Output of privatekey file that contains your private key>
Address = 10.0.0.2/24, fd86:ea04:1115::5/64
EOF
```

## 连接客户端和服务端

### 法一 客户端操作

1. `wg-quick down wg0`
2. 直接编辑客户端配置文件
3. 启动`wg-quick up wg0;systemctl enable wg-quick@wg0`

```
# /etc/wireguard/wg0.conf 新增
[Peer]
PublicKey = <Server Public key>
Endpoint = <Server Public IP>:51820
AllowedIPs = 10.0.0.2/24, fd86:ea04:1115::5/64
```

### 法二 服务端操作

```
wg set wg0 peer <Client Public Key> endpoint <Client IP address>:51820 allowed-ips 203.0.113.12/24,fd86:ea04:1115::5/64
```


## 问题解决

```
# 1. 内核模块没有
lsmod | grep wireguard && echo yes || echo no
no
modprobe wireguard
modprobe: FATAL: Module wireguard not found in directory /lib/modules/5.4.0-0.bpo.4-amd64

dkms status
wireguard, 0.0.20200318, 4.19.0-8-amd64, x86_64: installed
uname -a
Linux cn3 5.4.0-0.bpo.4-amd64 #1 SMP Debian 5.4.19-1~bpo10+1 (2020-03-09) x86_64 GNU/Linux

dkms autoinstall
Error! Your kernel headers for kernel 5.4.0-0.bpo.4-amd64 cannot be found.
Please install the linux-headers-5.4.0-0.bpo.4-amd64 package

# 解决方式
apt install -y linux-headers-5.4.0-0.bpo.4-amd64

# ipv6 RTNETLINK answers: Permission denied
启用ipv6即可
net.ipv6.conf.all.disable_ipv6=0
```
