---
title: "使用ergo快速安装k8s1.18.3"
date: 2020-05-22T22:55:18+08:00
description: "本地使用ergo快速安装k8s1.18.3"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- kubernetes
series:
-
categories: 
- kubernetes
image: images/k8s/k8s02.png
---

> 基于[sealos](https://github.com/ysicing/sealos), 一键高可用，简单上手, 安装k8s 1.18.3版本

## 准备虚拟机


环境: 3台机器(debian/buster 10.4, 11.11.11.111~11.11.11.113, 2核4G80G存储)


{{< expand "ergo vm create --vmname k8s --vmnum 3" >}}

```
➜  ~ ergo  vm create   --vmname k8s --vmnum 3
I0523 15:20:15.819808   17953 root.go:51] Using config file:
2020-05-23 15:20:15 [DEBG] [github.com/ysicing/ergo/vm/linux.go:66] check system
2020-05-23 15:20:15 [INFO] [github.com/ysicing/ergo/vm/linux.go:73] check system done. It looks good
2020-05-23 15:20:15 [DEBG] [github.com/ysicing/ergo/vm/linux.go:78] check vagrant
2020-05-23 15:20:15 [INFO] [github.com/ysicing/ergo/utils/command.go:15] [os]exec cmd is :  which [vagrant]
/usr/local/bin/vagrant
2020-05-23 15:20:15 [INFO] [github.com/ysicing/ergo/utils/command.go:15] [os]exec cmd is :  which [VirtualBoxVM]
/usr/local/bin/VirtualBoxVM
2020-05-23 15:20:15 [DEBG] [github.com/ysicing/ergo/vm/linux.go:85] write Vagrantfile
2020-05-23 15:20:15 [INFO] [github.com/ysicing/ergo/vm/linux.go:92] vagranfile:
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box_check_update = false
  config.vm.provider 'virtualbox' do |vb|
   vb.customize [ "guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-threshold", 1000 ]
  end
  $num_instances = 3
  (1..$num_instances).each do |i|
    config.vm.define "k8s#{i}" do |node|
      node.vm.box = "ysicing/debian"
      node.vm.hostname = "k8s#{i}"
      node.vm.network "public_network", use_dhcp_assigned_default_route: true, bridge: 'en0: Wi-Fi (Wireless)'
      # node.vm.provision "shell", run: "always", inline: "ntpdate ntp.api.bz"
      node.vm.network "private_network", ip: "11.11.11.11#{i}"
      node.vm.provision "shell", run: "always", inline: "echo hello from k8s#{i}"
      node.vm.provider "virtualbox" do |vb|
        vb.gui = false
        vb.memory = 4096
        vb.cpus = 2
        vb.name = "k8s#{i}"
        vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        vb.customize ["modifyvm", :id, "--ioapic", "on"]
        # cpu 使用率50%
        vb.customize ["modifyvm", :id, "--cpuexecutioncap", "50"]
      end
    end
  end
end

2020-05-23 15:20:15 [DEBG] [github.com/ysicing/ergo/vm/linux.go:117] vagrant up
Bringing machine 'k8s1' up with 'virtualbox' provider...
Bringing machine 'k8s2' up with 'virtualbox' provider...
Bringing machine 'k8s3' up with 'virtualbox' provider...
...
2020-05-23 15:26:37 [INFO] [github.com/ysicing/ergo/vm/linux.go:130] ip: 11.11.11.111-11.11.11.113, root/vagrant
2020-05-23 15:26:37 [INFO] [github.com/ysicing/ergo/vm/linux.go:133] 销毁方式: cd /Users/ysicing/vm, vagrant destroy -f
```

{{< /expand >}}

## 初始化环境

{{< expand "ergo vm init --ip 11.11.11.111 --ip 11.11.11.112 --ip 11.11.11.113" >}}
```
===============================================================================
prepare : 安装基础软件 -------------------------------------------------------- 8.77s
prepare : Install dbus for the hostname module -------------------------- 5.84s
prepare : 删除默认安装 -------------------------------------------------------- 3.60s
Gathering Facts --------------------------------------------------------- 1.15s
prepare : 加载内核模块 -------------------------------------------------------- 0.92s
prepare : gather facts -------------------------------------------------- 0.67s
prepare : 增加内核模块开机加载配置 -------------------------------------------------- 0.63s
prepare : 启用systemd自动加载模块服务 --------------------------------------------- 0.53s
prepare : 禁用系统 swap ----------------------------------------------------- 0.47s
prepare : 设置系统 ulimits -------------------------------------------------- 0.41s
prepare : 优化设置 journal 日志 ----------------------------------------------- 0.37s
prepare : 把SCTP列入内核模块黑名单 ------------------------------------------------ 0.36s
prepare : 删除fstab swap 相关配置 --------------------------------------------- 0.34s
prepare : 设置系统参数 -------------------------------------------------------- 0.32s
prepare : 准备 journal 日志相关目录 --------------------------------------------- 0.32s
prepare : 创建 systemd 配置目录 ----------------------------------------------- 0.30s
prepare : 重启 journald 服务 ------------------------------------------------ 0.30s
prepare : update /etc/security/limits.conf ------------------------------ 0.28s
prepare : 生效系统参数 -------------------------------------------------------- 0.19s
prepare : 设置 ulimits ---------------------------------------------------- 0.12s
```
{{< /expand >}}

## 安装docker

{{< expand "ergo install docker --ip 11.11.11.111 --ip 11.11.11.112 --ip 11.11.11.113 --pass vagrant" >}}
```
...
+ sh -c 'docker version'
Client: Docker Engine - Community
 Version:           19.03.9
 API version:       1.40
 Go version:        go1.13.10
 Git commit:        9d988398e7
 Built:             Fri May 15 00:25:25 2020
 OS/Arch:           linux/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          19.03.9
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.13.10
  Git commit:       9d988398e7
  Built:            Fri May 15 00:23:57 2020
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.2.13
  GitCommit:        7ad184331fa3e55e52b890ea95e65ba581ae3429
 runc:
  Version:          1.0.0-rc10
  GitCommit:        dc9208a3303feef5b3839f4323d9beb36df0a9dd
 docker-init:
  Version:          0.18.0
  GitCommit:        fec3683
If you would like to use Docker as a non-root user, you should now consider
adding your user to the "docker" group with something like:

  sudo usermod -aG docker your-user

Remember that you will have to log out and back in for this to take effect!

WARNING: Adding a user to the "docker" group will grant the ability to run
         containers which can be used to obtain root privileges on the
         docker host.
         Refer to https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface
         for more information.
Synchronizing state of docker.service with SysV service script with /lib/systemd/systemd-sysv-install.
Executing: /lib/systemd/systemd-sysv-install enable docker
"19.03.9"
Unable to find image 'ysicing/tools:latest' locally
latest: Pulling from ysicing/tools
0d6b48c80e92: Pull complete
f28c196b1246: Pull complete
04bb1e97c214: Pull complete
Digest: sha256:c689021150ec06af298db958d24c19fdbe3aea7c6717c5dee53f7e9071b4cd76
Status: Downloaded newer image for ysicing/tools:latest
```
{{< /expand >}}

## 安装常用小工具

{{< expand "ergo install tools --ip 11.11.11.111 --ip 11.11.11.112 --ip 11.11.11.113 --pass vagrant" >}}
```
I0523 15:35:59.919563   19284 root.go:51] Using config file:
I0523 15:35:59.920024   19284 install.go:55] 🎉 安装 tools
2020-05-23 15:35:59 [INFO] [/Users/ysicing/go/pkg/mod/github.com/kunnos/sshcmd@v1.6.0/pkg/sshutil/ssh.go:12] [ssh][11.11.11.111]exec cmd is : docker run --rm -v /usr/local/bin:/sysdir ysicing/tools tar zxf /pkg.tgz -C /sysdir
2020-05-23 15:36:08 [DEBG] [/Users/ysicing/go/pkg/mod/github.com/kunnos/sshcmd@v1.6.0/pkg/sshutil/ssh.go:25] [ssh][11.11.11.111]command result is:
2020-05-23 15:36:08 [INFO] [/Users/ysicing/go/pkg/mod/github.com/kunnos/sshcmd@v1.6.0/pkg/sshutil/ssh.go:12] [ssh][11.11.11.112]exec cmd is : docker run --rm -v /usr/local/bin:/sysdir ysicing/tools tar zxf /pkg.tgz -C /sysdir
2020-05-23 15:36:17 [DEBG] [/Users/ysicing/go/pkg/mod/github.com/kunnos/sshcmd@v1.6.0/pkg/sshutil/ssh.go:25] [ssh][11.11.11.112]command result is:
2020-05-23 15:36:17 [INFO] [/Users/ysicing/go/pkg/mod/github.com/kunnos/sshcmd@v1.6.0/pkg/sshutil/ssh.go:12] [ssh][11.11.11.113]exec cmd is : docker run --rm -v /usr/local/bin:/sysdir ysicing/tools tar zxf /pkg.tgz -C /sysdir
2020-05-23 15:36:26 [DEBG] [/Users/ysicing/go/pkg/mod/github.com/kunnos/sshcmd@v1.6.0/pkg/sshutil/ssh.go:25] [ssh][11.11.11.113]command result is:
```
{{< /expand >}}

{{< boxmd >}}
`ergo shell --ip 11.11.11.111 --ip 11.11.11.112 --ip 11.11.11.113 --pass vagrant --cmd upgrade-tools`
或者在当前机器直接执行
`upgrade-tools`
{{< /boxmd >}}

## 安装k8s

> 说明，我定制了sealos和calico版本为最新版本,且使用了在线安装包

```
# 安装了k8s 1.18.3, 安装了ingress, 配置nfs，默认存储类为nfs-data
ergo install k8s --enablenfs=true --mip 11.11.11.111 --wip 11.11.11.112-11.11.11.113 --pass vagrant
```

## 验证

```
root@k8s1:~# kubectl get node
NAME   STATUS   ROLES    AGE    VERSION
k8s1   Ready    master   2m2s   v1.18.3
k8s2   Ready    <none>   87s    v1.18.3
k8s3   Ready    <none>   87s    v1.18.3
root@k8s1:~# kubectl get ns
NAME              STATUS   AGE
default           Active   2m6s
kube-node-lease   Active   2m7s
kube-public       Active   2m7s
kube-system       Active   2m8s
nginx-ingress     Active   63s
root@k8s1:~# kubectl get cs
NAME                 STATUS    MESSAGE             ERROR
controller-manager   Healthy   ok
scheduler            Healthy   ok
etcd-0               Healthy   {"health":"true"}
root@k8s1:~# kubectl get sc
NAME                 PROVISIONER       RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
nfs-data (default)   nfs-provisioner   Delete          Immediate           false                  60s
```