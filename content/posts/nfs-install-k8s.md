---
title: "NFS存储"
date: 2020-05-18T22:55:18+08:00
description: "NFS存储"
tags:
- kubernetes
- csi
---

<!-- truncate -->

## NFS存储

### Debian

```
# 安装
apt update
apt install -y nfs-kernel-server
# 配置
mkdir /k8sdata
echo "/k8sdata/ *(insecure,rw,sync,no_root_squash,no_subtree_check)" > /etc/exports
# 启动nfs
systemctl enable rpcbind
systemctl enable nfs-server
systemctl start rpcbind
systemctl start nfs-server
exportfs -r
# 测试
showmount -e 127.0.0.1
```

### CentOS

```
# 安装nfs
yum install -y nfs-utils
# 配置共享目录
mkdir /k8sdata
echo "/k8sdata *(insecure,rw,sync,no_root_squash)" > /etc/exports
# 启动nfs
systemctl enable rpcbind
systemctl enable nfs-server

systemctl start rpcbind
systemctl start nfs-server
exportfs -r
# 测试
showmount -e 127.0.0.1
```

### 一键部署nfs且配置默认存储

```
# 未安装存储
curl https://sh.ysicing.me/k7s/install/nfs/deploy.sh | bash
# 已有存储
wget https://sh.ysicing.me/k7s/install/nfs/deploy_exist_nfs.sh
./deploy_exist_nfs.sh <ip> <path>
```
