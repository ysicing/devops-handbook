---
title: "Debian个人常用操作指南"
date: 2017-05-18T22:55:18+08:00
description: "Debian常用操作指南"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
pinned: true
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- debian
series:
-
categories: 
- debian
image: images/debian/Debian_logo.png
---

## 一键最新脚本

```bash
export MIRRORS="http://mirrors.aliyun.com" # 默认是清华源
curl https://sh.ysicing.me/debian/init.sh | bash
```

## Debian 11

> 赶紧升级Debian 11, 好处多多

### 升级debian10(buster)内核版本

```bash
sed -i 's/buster\/updates/bullseye-security/g;s/buster/bullseye/g' /etc/apt/sources.list

apt update
apt dist-upgrade -y
# apt install -t bullseye-backports linux-image-amd64 -y
# update-grub
# reboot
# 内核
Linux bj01 5.10.0-0.bpo.8-amd64 #1 SMP Debian 5.10.46-2~bpo10+1 (2021-07-22) x86_64 GNU/Linux
```

<hr />

## Debian 10存档

### 创建Debian虚拟机

```bash
Usage:
  ergo vm create [flags]

Flags:
  -h, --help            help for create
      --path string     Vagrantfile所在目录, $HOME/vm
      --vmcpus string   虚拟机CPU数 (default "2")
      --vmmem string    虚拟机Mem MB数 (default "4096")
      --vmname string   虚拟机名
      --vmnum string    虚拟机副本数 (default "1")   
```

默认使用ergo创建虚拟机

```bash
ergo vm create --vmcpus 4 --vmmem 8192 --vmname debian
```

或者自行使用`Vagrantfile`

```ruby
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box_check_update = false
  config.vm.provider 'virtualbox' do |vb|
   vb.customize [ "guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-threshold", 1000 ]
  end
  $num_instances = 1
  (1..$num_instances).each do |i|
    config.vm.define "debian#{i}" do |node|
      node.vm.box = "ysicing/debian"
      node.vm.hostname = "debian#{i}"
      node.vm.network "public_network", use_dhcp_assigned_default_route: true, bridge: 'en0: Wi-Fi (Wireless)'
      # node.vm.provision "shell", run: "always", inline: "ntpdate ntp.api.bz"
      node.vm.network "private_network", ip: "11.11.11.11#{i}"
      node.vm.provision "shell", run: "always", inline: "echo hello from debian#{i}"
      node.vm.provider "virtualbox" do |vb|
        vb.gui = false
        vb.memory = 8192
        vb.cpus = 4
        vb.name = "debian#{i}"
        vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        vb.customize ["modifyvm", :id, "--ioapic", "on"]
        # cpu 使用率50%
        vb.customize ["modifyvm", :id, "--cpuexecutioncap", "50"]
      end
    end
  end
end
```

### 初始化Debian

```
ergo vm init --ip 11.11.11.111 --docker
# 默认会使用ysicing/ansible镜像，执行ansible脚本初始化debian，--docker参数默认表示安装docker
```

#### 手动执行之宿主机初始化

```
git clone https://github.com/ysicing/play-ansible.git
cd play-ansible
# 安装ansible,如果已安装可跳过
./install.sh
# 配置初始化机器
cp inventory.ini.example inventory.ini
# 执行初始化
ansible-playbook init.yml
```

#### 手动执行之容器化方式初始化

```bash
docker pull ysicing/ansible
docker run -it --rm ysicing/ansible bash
cp inventory.ini.example inventory.ini
# 初始化系统
ansible-playbook init.yml
exit
```

### Debian 10升级内核

> 添加buster-backports源，如果你使用ysicin/debian镜像可跳过

```
# 默认
cat >/etc/apt/sources.list <<EOF
deb http://mirrors.aliyun.com/debian buster-backports main contrib non-free
deb http://mirrors.aliyun.com/debian-security buster/updates main contrib non-free
EOF

# Ucloud
cat >/etc/apt/sources.list <<EOF
deb http://mirrors.ucloud.cn/debian/ buster-backports main contrib non-free
deb http://mirrors.ucloud.cn/debian-security/ buster/updates main contrib non-free
EOF
```

更新升级

```bash
apt update
apt dist-upgrade -y
apt-get install -t buster-backports linux-image-amd64 -y
update-grub
apt autoclean
apt autoremove -y
reboot
```
