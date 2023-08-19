---
title: "Debian 11安装k3s"
date: 2021-08-15T22:55:18+08:00
description: "Debian11 (Bullseye)安装k3s"
tags:
- kubernetes
- k3s
- debian
---

> 本文已经过时请参考 [傻瓜式教学: Debian安装k3s(长期维护版本)](/k3s/debian-install-k3s)

<!-- truncate -->

> k3s 是Rancher推出的轻量级 k8s.

## 升级debian10(buster)内核版本

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

具体可以参考 [Debian个人常用操作指南](/posts/debian-op/) 升级内核部分。

## 安装 wireguard

```bash
#  所有节点需安装
apt install wireguard -y
```

## 安装docker

```bash
curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
echo "deb [arch=amd64] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/debian bullseye stable" | tee /etc/apt/sources.list.d/docker.list
apt update
apt install -y docker-ce
# 腾讯云使用bip有问题 169.254.123.1/24, 请使用172.30.42.1/16
cat > /etc/docker/daemon.json <<EOF
{
  "registry-mirrors": ["https://dyucrs4l.mirror.aliyuncs.com"],
  "bip": "169.254.123.1/24",
  "max-concurrent-downloads": 10,
  "log-driver": "json-file",
  "log-level": "warn",
  "log-opts": {
    "max-size": "30m",
    "max-file": "3"
  },
  "storage-driver": "overlay2"
}
EOF
systemctl enable docker
systemctl daemon-reload
systemctl restart docker
docker info -f "{{json .ServerVersion }}"
docker pull registry.cn-beijing.aliyuncs.com/k7scn/tools
docker run --rm -v /usr/local/bin:/sysdir registry.cn-beijing.aliyuncs.com/k7scn/tools tar zxf /pkg.tgz -C /sysdir

```

## 部署控制平面master节点

上面安装docker/tools时, 默认内置了k3s,版本`v1.18.19`, 也可以自行下载其他版本的k3s替换

```
k3s --version
k3s version v1.18.19+k3s1 (a260c3c6)

# 执行安装, 默认开机启动
k3s.master.install
```

默认k3s.master.install配置参数如下:

```bash
ExecStart=/usr/local/bin/k3s \
    server \
    --docker \
    --flannel-backend wireguard \
    --no-deploy traefik,servicelb \
    --kube-proxy-arg "proxy-mode=ipvs" "masquerade-all=true" \
    --kube-proxy-arg "metrics-bind-address=0.0.0.0"
```

查看组件状态

```
k3s kubectl get cs
NAME                 STATUS    MESSAGE   ERROR
controller-manager   Healthy   ok
scheduler            Healthy   ok
```


## 部署计算worker节点

从master节点获取token

- K3S_TOKEN : 加入集群所需的token，可以在控制节点上查看`/var/lib/rancher/k3s/server/node-token` 文件
- K3S_URL: master节点地址

```
export K3S_URL=https://10.147.20.42:6443
export K3S_TOKEN=K102f2c1f6c878f693700c24b741d309d2ff4038ade912f0a44248781c04376e878::server:bc39d44d89042011b985f267eebe2b2f

k3s.worker.install
```

## 查看节点状态

```bash
~# kubectl get nodes
NAME    STATUS   ROLES    AGE   VERSION
k3s02   Ready    <none>   53m   v1.18.19+k3s1
k3s03   Ready    <none>   52m   v1.18.19+k3s1
k3s01   Ready    master   54m   v1.18.19+k3s1
```
