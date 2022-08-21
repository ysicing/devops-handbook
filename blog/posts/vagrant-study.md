---
title: "Vagrant从入门到放弃"
date: 2020-09-14T08:04:15+08:00
description: vagrant简单介绍使用
tags:
- vagrant
---

<!-- truncate -->

![vagrant](https://gitee.com/godu/blogimage/raw/master/docker/vagrant-k8s.png)

## 源起

有时候跑一些服务，需要在Linux上运行，需要快速拉起分布式开发测试环境配置，不可能通过创建虚拟机安装服务等一系列操作，否则一行命令，一上午。这时候就需要一款科学的工具来管理虚拟机。有人会说，不是有**docker**么，为啥还用**vagrant**

### 区别

这里简单说下区别

**vagrant**是vm的编排工具,是管理编排环境，对标应该是**docker-compose**
**docker**是将应用轻量化构建和部署工具

个人认为两者使用纬度不一样， 而且应用场景哪个方便用哪个。

## 用法

上面说到**vagrant**是vm虚拟机的编排工具，目前支持多个虚拟机软件，常见用**virtualbox**，也推荐用这个。

[官方文档 Getting Started](https://learn.hashicorp.com/collections/vagrant/getting-started)


####  安装vagrant

```bash
# MacOS, 默认已经virtualbox
brew cask install vagrant 
```

或者通过官网安装 [Download Vagrant](https://www.vagrantup.com/downloads)

#### 初始化一个项目

`Vagrantfile`是用来定义vagrant project的，使用ruby语法，不过你不需要知道ruby就可以写一个Vagrantfile。

示例来源于 [ysicing/debian-vagrant](https://raw.githubusercontent.com/ysicing/debian-vagrant/master/Vagrantfile)

```ruby
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box_check_update = false
  config.vm.provider 'virtualbox' do |vb|
   vb.customize [ "guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-threshold", 1000 ]
  end  
  config.vm.synced_folder ".", "/vagrant", type: "nfs", nfs_udp: false, disabled: true
  $num_instances = 1
  (1..$num_instances).each do |i|
    config.vm.define "node#{i}" do |node|
      node.vm.box = "ysicing/debian"
      node.vm.hostname = "debian105-#{i}"
      #node.ssh.username = "root"
      #node.ssh.password = "vagrant"
      ip = "11.11.11.#{i+10}"
      node.vm.network "private_network", ip: ip
      node.vm.provider "virtualbox" do |vb|
        vb.gui = false
        vb.memory = "1024"
        vb.cpus = 1
        vb.name = "node#{i}"
        vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        vb.customize ["modifyvm", :id, "--ioapic", "on"]
      end
      node.vm.provision "shell", inline: "uname -a"
    end
  end
end
```

简单说下核心重要相关参数:

- **vm.provider**  虚拟机服务
- **vm.box** 虚拟机镜像, 类似docker镜像镜像
- **cpus,memory,network,instances** 虚拟机资源副本信息等

#### 常用基础命令

```bash
# 启动
vagrant up
# ssh登录
vagrant ssh
# 销毁
vagrant destroy
# 关机
vagrant halt
```

## 示例部署k8s集群

```
mkdir vm
cat > vm/Vagrantfile <<EOF

# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box_check_update = false
  config.vm.provider 'virtualbox' do |vb|
   vb.customize [ "guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-threshold", 1000 ]
  end
  $num_instances = 3
  (1..$num_instances).each do |i|
    config.vm.define "0660b6a92e962a930692651db4562957#{i}" do |node|
      node.vm.box = "ysicing/debian"
      node.vm.hostname = "0660b6a92e962a930692651db4562957#{i}"
      node.vm.network "public_network", use_dhcp_assigned_default_route: true, bridge: 'en0: Wi-Fi (Wireless)'
      # node.vm.provision "shell", run: "always", inline: "ntpdate ntp.api.bz"
      node.vm.network "private_network", ip: "11.11.11.11#{i}"
      node.vm.provision "shell", run: "always", inline: "echo hello from 0660b6a92e962a930692651db4562957#{i}"
      node.vm.provider "virtualbox" do |vb|
        vb.gui = false
        vb.memory = 4096
        vb.cpus = 2
        vb.name = "0660b6a92e962a930692651db4562957#{i}"
        vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        vb.customize ["modifyvm", :id, "--ioapic", "on"]
        # cpu 使用率50%
        vb.customize ["modifyvm", :id, "--cpuexecutioncap", "50"]
      end
    end
  end
end
EOF

# 启动虚拟机
vagrant up

# 11.11.11.110，11.11.11.111，11.11.11.112 root/vagrant

# pre k8s pkg
docker run --rm -v /tmp:/data registry.cn-beijing.aliyuncs.com/k7scn/k7s:1.16.15 cp -a /kube.tgz /data/kube.tgz

sealos init --master 11.11.11.110 --node 11.11.11.111 --node 11.11.11.112 --user root --passwd vagrant --version v1.16.15 --repo registry.cn-beijing.aliyuncs.com/k7scn --pkg-url /tmp/kube.tgz
```

#### 其他场景

本地起多个虚拟机环境测试，其他没必要，感觉没docker-compose方便。

```
Vagrant.configure("2") do |config|
  config.vm.provision "shell", inline: "echo Hello"

  config.vm.define "web" do |web|
    web.vm.box = "apache"
  end

  config.vm.define "db" do |db|
    db.vm.box = "mysql"
  end
end
```

## debian box简介

默认box使用**ysicing/debian**, 个人自用debian镜像，源码如下[ysicing/debian-vagrant](https://github.com/ysicing/debian-vagrant)

#### 定制

- 默认允许**root**(密码**vagrant**)用户登录
- 默认dns为**1.2.4.8**, **114.114.114.114**
- 镜像源为 **mirrors.aliyun.com**
- 默认硬盘80G
- 安装了常用运维工具
- ...

---
