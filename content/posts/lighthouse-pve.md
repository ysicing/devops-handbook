---
title: "腾讯云Lighthouse上海Debian11安装Proxmox VE"
date: 2022-04-09T21:46:48+08:00
description: 上次腾讯送的上海轻量一直吃灰，跑个pve玩玩.
tags:
- lighthouse
- qcloud
- pve
---

<!-- truncate -->

## 准备工作

> 默认使用Debian 11

### 配置网络

> 轻量云防火墙放行 8006端口 和 30000-40000端口给小鸡用。

### 配置主机名

```bash
# 更改主机名
hostname pve
echo pve > /etc/hostname
# vim /etc/hosts
127.0.1.1 localhost.localdomain VM-16-11-debian
127.0.0.1 localhost

10.0.16.11 pve # 新增主机名

::1 ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
ff02::3 ip6-allhosts
```

设置完成后可以验证

```bash
hostname --ip-address
10.0.16.11
```

## 安装Proxmox VE

### 添加软件源

> 官方源比较慢，这里使用清华镜像源

```bash
echo "deb https://mirrors.tuna.tsinghua.edu.cn/proxmox/debian bullseye pve-no-subscription" > /etc/apt/sources.list.d/pve-install-repo.list
# 添加仓库key
wget https://enterprise.proxmox.com/debian/proxmox-release-bullseye.gpg -O /etc/apt/trusted.gpg.d/proxmox-release-bullseye.gpg 
```

更新系统

```bash
apt remove -y exim*
apt update && apt full-upgrade
```

### 安装PVE

```bash
apt install proxmox-ve postfix open-iscsi -y
```

安装过程中需要配置postfix，选择no configuration

等待安装完成，访问 `https://<公网ip>:8006`, 使用linux账户登陆`root/<password>`

## 配置PVE

### 网络

配置网络

![网络](/images/pve/0409/network-001.png)
![网络](/images/pve/0409/network-002.png)

查看宿主机

```bash
cat /etc/network/interfaces.new
auto lo
iface lo inet loopback

iface eth0 inet manual

auto vmbr0
iface vmbr0 inet static
	address 10.10.10.1/24
	gateway 10.10.10.1
	bridge-ports eth0
	bridge-stp off
	bridge-fd 0
	bridge-vlan-aware yes
	bridge-vids 2-4094

source /etc/network/interfaces.d/*
```

调整网络配置，添加nat转发, 更多可以参考官方文档[Network Configuration](https://pve.proxmox.com/wiki/Network_Configuration)


> 这里需要注意需要将eth0改成dhcp或者static，否则会导致机器离线。


```bash
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet dhcp # 这里

auto vmbr0
iface vmbr0 inet static
	address 10.10.10.1/24
	gateway 10.10.10.1
	bridge-ports eth0
	bridge-stp off
	bridge-fd 0
	bridge-vlan-aware yes
	bridge-vids 2-4094

	post-up   echo 1 > /proc/sys/net/ipv4/ip_forward
    post-up   iptables -t nat -A POSTROUTING -s '10.10.10.0/24' -o eth0  -j MASQUERADE
    post-down iptables -t nat -D POSTROUTING -s '10.10.10.0/24' -o eth0  -j MASQUERADE

source /etc/network/interfaces.d/*
```

## 开小鸡

### 配置LXC容器

默认CT Template下载速度很慢，这里选择清华镜像源

```bash
cp /usr/share/perl5/PVE/APLInfo.pm /usr/share/perl5/PVE/APLInfo.pm_back
sed -i 's|http://download.proxmox.com|https://mirrors.tuna.tsinghua.edu.cn/proxmox|g' /usr/share/perl5/PVE/APLInfo.pm
```

重启生效。

![CT模版](/images/pve/0409/ct-003.png)

### 创建容器

下载Debian等CT模版使用。

基于Debian CT模版创建一个LXC容器

![创建容器](/images/pve/0409/ct-004.png)

等待容器启动之后

```bash
ping 10.10.10.100
PING 10.10.10.100 (10.10.10.100) 56(84) bytes of data.
64 bytes from 10.10.10.100: icmp_seq=1 ttl=64 time=0.064 ms
64 bytes from 10.10.10.100: icmp_seq=2 ttl=64 time=0.056 ms
```

### 配置容器NAT访问

```bash
iptables -t nat -I PREROUTING -p tcp -m tcp --dport 30022 -j DNAT --to-destination 10.10.10.100:22
iptables -t nat -I PREROUTING -p tcp -m multiport --dports 80,443 -j DNAT --to-destination 10.10.10.100

# 查看 nat PREROUTING 端口映射规则
iptables -t nat -nvL PREROUTING

# 清空 nat PREROUTING 端口映射规则
# iptables -t nat -F PREROUTING
```

### 其他

还可以再次套娃，在Debian LXC中安装docker

