---
title: "Tke集群基于CFS动态创建不同子目录的pvc"
date: 2021-11-26T15:31:49+08:00
description: 使用 nfs-client-provisioner 动态创建不同子目录的 pvc
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocFolding: false
tocPosition: inner
tocLevels: ["h2", "h3", "h4"]
tags:
- kubernetes
- 腾讯云
- CSI
series:
-
categories:
- kubernetes
image:
---

## 序

由于TKE集群CSI功能相对ACK比较鸡肋, 相对阿里云NAS CSI. 我们只需要SC自动改创建CFS类型的PV和PVC.
我们的使用场景是不同PV使用同一个CFS不同路径, 或者不同CFS可以共享资源包(成本问题,创建PV数目比较多), 恰恰这两点TKE都不支持。 对此使用社区的 nfs-client-provisioner 项目来实现动态创建 CFS 文件系统中的子路径

## 部署

1. 创建CFS实例并配置好资源包
2. 安装`nfs-subdir-external-provisioner`

```bash
helm repo add nfs-subdir-external-provisioner https://kubernetes-sigs.github.io/nfs-subdir-external-provisioner/
helm repo update
helm upgrade -i nfs-subdir-external-provisioner -n kube-system nfs-subdir-external-provisioner/nfs-subdir-external-provisioner \
    --set image.repository=ccr.ccs.tencentyun.com/k7scn/nfs-subdir-external-provisioner \
    --set image.tag=v4.0.2 \
    --set nfs.server=<cfs.ip> \
    --set nfs.path=/ \
    --set storageClass.defaultClass=true \
    --set storageClass.name=opencfs
```

3. 查看动态存储类

```bash
kubectl get sc
NAME                PROVISIONER                                     RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
cbs                 com.tencent.cloud.csi.cbs                       Delete          Immediate           false                  6d22h
cce                 com.tencent.cloud.csi.cfs                       Retain          Immediate           false                  3d21h
opencfs (default)   cluster.local/nfs-subdir-external-provisioner   Delete          Immediate           true                   4s
```

4. 测试

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: whoami
spec:
  storageClassName: opencfs
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 1Mi
---      
apiVersion: apps.kruise.io/v1alpha1
kind: CloneSet
metadata:
  labels:
    app: whoami
  name: whoami
spec:
  replicas: 5
  selector:
    matchLabels:
      app: whoami
  template:
    metadata:
      labels:
        app: whoami
    spec:
      containers:
      - name: whoami
        image: traefik/whoami
        volumeMounts:
        - name: data-vol
          mountPath: /data
  volumes:
  - name: data
    persistentVolumeClaim:
      claimName: whoami
---
apiVersion: apps.kruise.io/v1alpha1
kind: SidecarSet
metadata:
  name: whoami
spec:
  selector:
    matchLabels:
      app: whoami
  updateStrategy:
    type: RollingUpdate
    maxUnavailable: 1
  containers:
  - name: sidecar
    image: ysicing/debian
    podInjectPolicy: AfterAppContainer
    shareVolumePolicy:
      type: enabled
    command: ["sleep", "999d"]
```