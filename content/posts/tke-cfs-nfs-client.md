---
title: "k8s集群快速部署NFS存储类"
date: 2021-11-26T15:31:49+08:00
description: 本文主要介绍使用 nfs-client-provisioner 来实现存储类
tags:
- kubernetes
- self-hosted
- k8s
- qcloud
- csi
- 存储
keywords:
- kubernetes
- self-hosted
- qcloud
- csi
- k8s
- 存储
---

本文主要介绍基于CFS或者NFS来实现k8s存储类功能





<!-- truncate -->

## 序

由于TKE集群CSI功能相对ACK比较鸡肋, 相对阿里云NAS CSI. 我们只需要SC自动改创建CFS类型的PV和PVC.
我们的使用场景是不同PV使用同一个CFS不同路径, 或者不同CFS可以共享资源包(成本问题,创建PV数目比较多), 恰恰这两点TKE都不支持。 对此使用社区的 nfs-client-provisioner 项目来实现动态创建 CFS 文件系统中的子路径

## CFS部署实践

:::tip CFS与NFS

CFS是腾讯云自研的分布式文件系统, 与NFS类似, 由腾讯云提供SLA保证

:::

提前创建CFS实例并配置好资源包

## NFS部署实践

> 简单记录一下在Linux部署NFS

<Tabs
  defaultValue="debian"
  values={[
    {label: 'debian', value: 'debian'},
    {label: 'centos', value: 'centos'},
  ]}>
  <TabItem value="debian" label="debian">
    <details>
      <summary>在Debian上安装NFS</summary>

```bash
apt-get -y install nfs-common nfs-kernel-server
mkdir /k8sshare
chmod 777 /k8sshare
echo "/k8sshare/ *(insecure,rw,sync,no_root_squash,no_subtree_check)" > /etc/exports
systemctl enable rpcbind
systemctl enable nfs-server
systemctl start rpcbind
systemctl start nfs-server
exportfs -r
# 测试是否生效
showmount -e 127.0.0.1
Export list for 127.0.0.1:
/k8sshare *
```

</details>
  </TabItem>
  <TabItem value="centos" label="centos">
<details>
      <summary>在CentOS上安装NFS</summary>
      类似哈, 只是安装的包不一样

```bash
yum install nfs-utils
systemctl enable rpcbind --now
systemctl enable nfs --now
```

</details>
  </TabItem>
</Tabs>

### 客户端安装

```bash
# Debian
apt install nfs-common
# CentOS
yum install nfs-utils
```

## 部署存储类

> 这里简单操作, 使用helm部署

```bash
helm repo add nfs-subdir-external-provisioner https://kubernetes-sigs.github.io/nfs-subdir-external-provisioner/
helm repo update
helm upgrade -i nfs -n kube-system nfs-subdir-external-provisioner/nfs-subdir-external-provisioner \
    --set image.repository=ccr.ccs.tencentyun.com/k7scn/nfs-subdir-external-provisioner \
    --set nfs.server=<ip> \
    --set nfs.path=<path> \
    --set storageClass.defaultClass=true \
    --set storageClass.name=opencfs
```

:::tip 参数说明
nfs.server: cfs或者nfs的ip  
nfs.path: cfs或者nfs的路径, 如上面的nfs的`/k8sshare`  
storageClass.defaultClass: 默认存储类  
storageClass.name: 存储类名称  

默认这些参数已经足够了，如果需要更多参数, 请参考[kubernetes-sigs/nfs-subdir-external-provisioner](https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner/blob/master/charts/nfs-subdir-external-provisioner/values.yaml#L10)

:::

## 查看动态存储类

```bash
kubectl get sc
NAME                PROVISIONER                                     RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
opencfs (default)   cluster.local/nfs-subdir-external-provisioner   Delete          Immediate           true                   4s
```

## 测试

:::tip 测试前提

每个节点都需要安装nfs客户端哦

:::

<details>

```yaml title="测试yaml"
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: cfs-volume-test
spec:
  storageClassName: opencfs
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 1Gi
---
apiVersion: v1
kind: Pod
metadata:
  name: volume-test
spec:
  containers:
  - name: volume-test
    image: nginx:stable-alpine
    imagePullPolicy: IfNotPresent
    volumeMounts:
    - name: volv
      mountPath: /data
    ports:
    - containerPort: 80
  volumes:
  - name: volv
    persistentVolumeClaim:
      claimName: cfs-volume-test
```
</details>
