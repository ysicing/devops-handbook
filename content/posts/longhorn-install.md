---
title: "傻瓜式教学:部署云原生存储Longhorn"
date: 2023-07-21T12:55:18+08:00
description: "在k3s上部署云原生存储Longhorn"
tags:
- kubernetes
- k3s
- longhorn
- self-hosted
- 存储
- csi
keywords:
- kubernetes
- k3s
- longhorn
- self-hosted
- 存储
- csi
url: /k3s/longhorn-install
---

> 傻瓜式教学: 在k3s上部署云原生存储Longhorn, 本文以当前最新版本1.5.1为例.

<!-- truncate -->

## 简介

[Longhorn](https://longhorn.io)是一个轻量级、可靠且功能强大的分布式块存储系统，适用于 Kubernetes。使用容器和微服务实现分布式块存储。Longhorn 为每个块储存设备卷创建一个专用的存储控制器，并在存储在多个节点上的多个副本之间同步复制该卷。存储控制器和副本本身是使用 Kubernetes 编排的。Longhorn 是免费的开源软件。它最初由Rancher Labs开发，现在作为云原生计算基金会的孵化项目进行开发。

### 能干什么

:::tip 仅列出我用的上的，更多功能请参考[官方文档](https://longhorn.io/docs/1.5.1/)

- 提供Kubernetes卷
- 高可用(跨多个节点和数据中心复制块存储)
- 备份数据存储在外部存储(如S3/Minio/NFS)
- 支持跨集群灾难恢复卷
- 定期快照并备份到外部存储
- 备份还原
- 不中断持久卷的情况下升级(刚刚操作过, 从1.4.1升级到1.5.1, 该特效好像1.4版本才支持)

:::

### 架构介绍

细节可以参考[官方文档](https://longhorn.io/docs/1.5.1/concepts/)

这里简单说下:

- 控制平面(`Longhorn Manager`),负责在Kubernetes集群中创建和管理卷, 以及CSI相关API的调用等, 通常以DaemonSet的形式运行在每个节点上
- 数据平面(`Longhorn Engine`)

每个卷都有专门的`Longhorn Engine`控制器, 每个LE控制器都有多个副本，当某个副本或者控制器有问题都不会影响所有副本或Pod对卷的访问。

## 安装部署

:::tip 注意我的集群已完成下述操作了

- 安装了iscsi和nfs-client等, 请参考[官方文档](https://longhorn.io/docs/1.5.1/deploy/install/)
- 集群runtime是docker, 默认已经配置了docker hub的相关代理
- 集群已安装prometheus
:::

### Helm安装

```bash title="准备工作"
helm repo add longhorn https://charts.longhorn.io
helm repo update
```

安全起见我给ui配置auth验证:

```bash title="auth相关, 示例"
kubectl create namespace longhorn-system
USER=admin; PASSWORD=12345678; echo "${USER}:$(openssl passwd -stdin -apr1 <<< ${PASSWORD})" >> auth
kubectl -n longhorn-system create secret generic basic-auth --from-file=auth
```

开始进行安装, 这里提供一下我的配置, 仅供参考:

```yaml title="values.yaml"
defaultSettings:
  defaultDataPath: /data/k8s/longhorn

longhornUI:
  replicas: 1

ingress:
  enabled: true
  ingressClassName: nginx
  host: longhorn.svc.ysicing.cloud
  annotations:
    nginx.ingress.kubernetes.io/auth-type: basic
    nginx.ingress.kubernetes.io/auth-secret: basic-auth
```

执行安装

```bash
helm upgrade -i longhorn longhorn/longhorn -n longhorn-system -f values.yaml
```

验证

```bash
# pod正常情况下都是Running状态
kubectl get pod -n longhorn-system
# 查看存储类
kubectl get sc
```

### 高级参数配置

```yaml title="values.yaml"
# 默认的存储类配置
persistence:
  defaultClass: true
  # 文件系统类型ext4与xfs选择一个
  defaultFsType: ext4
  # 使用ext4文件系统允许设置其他创建参数，以支持旧版本系统内核
  defaultMkfsParams: ""
  defaultClassReplicaCount: 3
  # 默认数据位置，默认选项为disabled，还有best-effort，表示使用卷的pod是否与卷尽量在同一个node节点，默认为不进行这个限制, 如果是跨云节点best-effort
  defaultDataLocality: disabled
  reclaimPolicy: Delete
  migratable: false
  recurringJobSelector:
    enable: false
    jobList: []
  backingImage:
    enable: false
    name: ~
    dataSourceType: ~
    dataSourceParameters: ~
    expectedChecksum: ~
  defaultNodeSelector:
    enable: false # disable by default
    selector: ""
  removeSnapshotsDuringFilesystemTrim: ignored # "enabled" or "disabled" otherwise

# 全局配置可以ui配置
defaultSettings:
  # 备份相关, 控制台可配置
  backupTarget: ~
  backupTargetCredentialSecret: ~

  allowRecurringJobWhileVolumeDetached: ~

  # 仅在具有node.longhorn.io/create-default-disk=true标签的节点上初始化数据目录，默认为false在所有节点初始化数据目录
  createDefaultDiskLabeledNodes: ~
  # 默认数据目录位置，不配置默认为/var/lib/longhorn/
  defaultDataPath: ~
  # 默认数据位置，默认选项为disabled，还有best-effort，表示使用卷的pod是否与卷尽量在同一个node节点，默认为不进行这个限制。
  defaultDataLocality: ~

  # 卷副本是否为软亲和，默认false表示相同卷的副本强制调度到不同节点，如果为true则表示同一个卷的副本可以在同一个节点
  replicaSoftAntiAffinity: ~
  # 副本是否进行自动平衡。默认为disabled关闭，least-effort平衡副本以获得最小冗余，best-effort此选项指示 Longhorn 尝试平衡副本以实现冗余
  replicaAutoBalance: ~
  
  #存储超配置百分比默认200，已调度存储+已用磁盘空间（存储最大值-保留存储）未超过之后才允许调度新副本实际可用磁盘容量的 200%
  storageOverProvisioningPercentage: ~
  
  # 存储最小可用百分比默认,默认设置为 25，Longhorn 管理器仅在可用磁盘空间（可用存储空间）减去磁盘空间量且可用磁盘空间仍超过实际磁盘容量（存储空间）的 25%后才允许调度新副本）。否则磁盘将变得不可调度，直到释放更多空间
  storageMinimalAvailablePercentage: ~
  upgradeChecker: ~
  # 创建卷时的默认副本数默认为3
  defaultReplicaCount: ~
  
  # 默认Longhorn静态存储类名称，默认值longhorn-static
  defaultLonghornStaticStorageClass: ~
  backupstorePollInterval: ~
  failedBackupTTL: ~
  restoreVolumeRecurringJobs: ~
  recurringSuccessfulJobsHistoryLimit: ~
  recurringFailedJobsHistoryLimit: ~
  supportBundleFailedHistoryLimit: ~
  taintToleration: ~
  systemManagedComponentsNodeSelector: ~
  priorityClass: ~
  # 卷出现问题自动修复，默认为true
  autoSalvage: ~
  autoDeletePodWhenVolumeDetachedUnexpectedly: ~
  disableSchedulingOnCordonedNode: ~
  replicaZoneSoftAntiAffinity: ~
  nodeDownPodDeletionPolicy: ~
  nodeDrainPolicy: ~
  replicaReplenishmentWaitInterval: ~
  concurrentReplicaRebuildPerNodeLimit: ~
  concurrentVolumeBackupRestorePerNodeLimit: ~
  disableRevisionCounter: ~
  systemManagedPodsImagePullPolicy: ~
  allowVolumeCreationWithDegradedAvailability: ~
  # 允许Longhorn在副本重建后自动清理系统生成的快照，默认true
  autoCleanupSystemGeneratedSnapshot: ~
  concurrentAutomaticEngineUpgradePerNodeLimit: ~
  backingImageCleanupWaitInterval: ~
  backingImageRecoveryWaitInterval: ~
  guaranteedEngineManagerCPU: ~
  guaranteedReplicaManagerCPU: ~
  kubernetesClusterAutoscalerEnabled: ~
  orphanAutoDeletion: ~
  storageNetwork: ~
  deletingConfirmationFlag: ~
  engineReplicaTimeout: ~
  snapshotDataIntegrity: ~
  snapshotDataIntegrityImmediateCheckAfterSnapshotCreation: ~
  snapshotDataIntegrityCronjob: ~
  removeSnapshotsDuringFilesystemTrim: ~
  fastReplicaRebuildEnabled: ~
  replicaFileSyncHttpClientTimeout: ~
  logLevel: ~
  backupCompressionMethod: ~
  backupConcurrentLimit: ~
  restoreConcurrentLimit: ~
  v2DataEngine: ~
  offlineReplicaRebuilding: ~
```

## 参考文档

- [官方文档](https://longhorn.io/)
- [Longhorn云原生存储](https://zhangzhuo.ltd/articles/2022/05/19/1652929973831.html)
