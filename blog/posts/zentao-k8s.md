---
title: "在k8s上部署项目管理软件: 禅道(ZenTao)"
date: 2023-05-07T01:00:59+08:00
description: "本文主要介绍如何在k8s上部署禅道"
authors: ysicing
tags:
- self-hosted
- 禅道
- zentao
- k8s
keywords:
- self-hosted
- 禅道
- zentao
- k8s
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

[ZenTao](https://github.com/easysoft/zentaopms) 是一款开源的项目管理软件, 本文主要通过两种方式来在k8s上部署禅道软件

<!-- truncate -->

:::tip

禅道k8s部署其实也简单, 尤其是helm方式

:::

## 前提

已经有SC存储类了, 这里默认使用NFS存储类，如果没有安装请参考[k8s集群快速部署NFS存储类](/posts/tke-cfs-nfs-client)

:::tip 注意

如果你要跑高可用需要使用分布式存储

:::

## yaml手动部署(不推荐)

yaml方式部署稍微复杂些

### 数据库部署

> 偷懒式helm部署, 默认创建一个zentao的数据库

<details>
<summary>数据库helm配置</summary>

```yaml title="mysql.yaml"
# 由于我的默认SC就是opencfs, 这里就不指定了
# global:
#   storageClass: "opencfs"
auth:
  rootPassword: "mokahz4ahvei1oReing6oh5ubaen1veV"
  database: "zentao"
  username: "zentao"
  password: "zt6666666666666"

volumePermissions:
  enabled: true
```

</details>

<details>
<summary>helm部署数据库</summary>

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm upgrade -i mysql bitnami/mysql -f ./mysql.yaml
```

</details>

### yaml部署禅道

<details>
<summary>部署禅道</summary>

```yaml title="zentao.yaml"
---
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: zentao
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 10Gi
  storageClassName: opencfs
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: zentao
  labels:
    app: zentao
spec:
  selector:
    matchLabels:
      app: zentao
  replicas: 1
  template:
    metadata:
      labels:
        app: zentao
    spec:
      containers:
      - name: zentao
        # 具体版本可以: https://github.com/quicklyon/zentao-docker/tree/master
        image: easysoft/quickon-zentao
        imagePullPolicy: IfNotPresent
        env:
        - name: MYSQL_HOST
          value: 'mysql.default.svc'
        - name: MYSQL_USER
          value: 'zentao'
        - name: MYSQL_PASSWORD
          value: 'zt6666666666666'
        - name: IS_CONTAINER
          value: 'true'
        - name: APP_DEFAULT_PORT
          value: '80'
        ports:
        - name: http
          containerPort: 80
        volumeMounts:
        - name: zentao-data
          mountPath: /data
      volumes:
        - name: zentao-data
          persistentVolumeClaim:
            claimName: zentao
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: zentao
  name: zentao
spec:
  ports:
  - name: http
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: zentao
```

</details>

## helm方式部署

> 很简单, 几条命令一执行就ok了

<details>
<summary>helm部署禅道</summary>

```bash
helm repo add zentao https://hub.qucheng.com/chartrepo/stable
helm repo update
helm search repo zentao/zentao
helm upgrade -i zentao-open zentao/zentao --set ingress.enabled=true --set ingress.host=zentao.example.local
```

</details>

### 高级配置

<details>
<summary>高级配置</summary>

```bash
# 下载zentao charts
helm pull zentao/zentao --untar
# 自定义配置 zentao/values.yaml, 示例
helm upgrade -i zentao-open zentao/zentao -f custom.yaml
```
</details>

## 最后

:::tip

你看禅道k8s部署其实也简单

:::

