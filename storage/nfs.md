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

### k8s集群部署nfs

```
# 未安装存储
curl https://ysicing.me/hack/k7s/install/nfs/deploy.sh | bash
# 已安装存储
kubectl apply -f https://ysicing.me/hack/k7s/install/nfs/deploy.yaml
```
