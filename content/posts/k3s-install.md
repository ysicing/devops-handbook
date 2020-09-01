---
title: "debian按照k3s"
date: 2020-05-18T22:55:18+08:00
description: "debian按照k3s"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- kubernetes
- k3s
series:
-
categories: 
- kubernetes
image:
---

k3s 是Rancher推出的轻量级 k8s.

## 升级内核版本

```
apt update
apt dist-upgrade
apt install -t buster-backports linux-image-amd64 -y
update-grub
reboot
# 内核
Linux cn2 5.6.0-0.bpo.2-amd64 #1 SMP Debian 5.6.14-2~bpo10+1 (2020-06-09) x86_64 GNU/Linux
```

具体可以参考 [Debian个人常用操作指南](/posts/debian-op/) 升级内核部分。

## 安装 wireguard

```
#  所有节点需安装
apt install wireguard -y
```

## 部署控制平面master节点

```
cat > /etc/systemd/system/k3s.service <<EOF
[Unit]
Description=Lightweight Kubernetes
Documentation=https://k3s.io
Wants=network-online.target

[Install]
WantedBy=multi-user.target

[Service]
Type=notify
EnvironmentFile=-/etc/systemd/system/k3s.service.env
KillMode=process
Delegate=yes
# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=1048576
LimitNPROC=infinity
LimitCORE=infinity
TasksMax=infinity
TimeoutStartSec=0
Restart=always
RestartSec=5s
ExecStartPre=-/sbin/modprobe br_netfilter
ExecStartPre=-/sbin/modprobe overlay
ExecStart=/usr/local/bin/k3s \
    server \
    --tls-san 10.147.20.42 \
    --node-ip 10.147.20.42 \
    --node-external-ip 10.147.20.42 \
    --docker \
    --pause-image registry.cn-beijing.aliyuncs.com/k7scn/pause:3.2 \
    --flannel-backend wireguard \
    --kube-proxy-arg "proxy-mode=ipvs" "masquerade-all=true" \
    --kube-proxy-arg "metrics-bind-address=0.0.0.0"
EOF
```

开机启动

```bash
systemctl enable k3s --now
```

查看组件状态

```
k3s kubectl get cs
NAME                 STATUS    MESSAGE   ERROR
controller-manager   Healthy   ok
scheduler            Healthy   ok
```


## 部署计算worker节点

```
cat > /etc/systemd/system/k3s-agent.service <<EOF
[Unit]
Description=Lightweight Kubernetes
Documentation=https://k3s.io
Wants=network-online.target

[Install]
WantedBy=multi-user.target

[Service]
Type=exec
EnvironmentFile=-/etc/systemd/system/k3s-agent.service.env
KillMode=process
Delegate=yes
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
TasksMax=infinity
TimeoutStartSec=0
Restart=always
RestartSec=5s
ExecStartPre=-/sbin/modprobe br_netfilter
ExecStartPre=-/sbin/modprobe overlay
ExecStart=/usr/local/bin/k3s agent \
    --node-external-ip 10.147.20.43 \
    --node-ip 10.147.20.43 \
    --docker \
    --pause-image registry.cn-beijing.aliyuncs.com/k7scn/pause:3.2 \
    --kube-proxy-arg "proxy-mode=ipvs" "masquerade-all=true" \
    --kube-proxy-arg "metrics-bind-address=0.0.0.0"
EOF
```

- K3S_TOKEN : 加入集群所需的token，可以在控制节点上查看`/var/lib/rancher/k3s/server/node-token` 文件

```
cat > /etc/systemd/system/k3s-agent.service.env <<EOF
K3S_URL=https://10.147.20.42:6443
K3S_TOKEN=K102f2c1f6c878f693700c24b741d309d2ff4038ade912f0a44248781c04376e878::server:bc39d44d89042011b985f267eebe2b2f
EOF
```

开机启动 


```
systemctl enable k3s-agent --now
```
