---
title: "部署私有对象存储服务: Minio"
date: 2023-03-27T12:30:59+08:00
description: "本文主要介绍如何安装部署Minio"
authors: ysicing
tags:
- self-hosted
- minio
- 对象存储
keywords:
- self-hosted
- minio
- 对象存储
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

[Minio](https://github.com/minio/)是一种高性能、兼容S3的对象存储。
.

<!-- truncate -->

## 简介

Minio使用纠删码erasure code和校验和checksum来保护数据免受硬件故障和数据损坏。即便您丢失一半数量（N/2）的硬盘，您仍然可以恢复数据。Minio还提供了高级数据保护功能，如版本控制、生命周期管理、加密和访问控制。

更多牛逼的地方就不简述了, 有兴趣的可以看看[官方文档](https://min.io/docs/minio/container/index.html)

## 部署服务端

支持多种安装方式. 这里我们以docker/k8s为例, 其实服务比较简单, 跑起来也比较简单.

### 在k8s部署

推荐使用helm方式部署

<details>
<summary>minio.yaml</summary>

```yaml title="minio.yaml"
global:
  storageClass: tkecfs
auth:
  rootUser: ysicing
  rootPassword: Ohh5saquai9Lies9oocaneezoo1hooSh9Buf1piew4mu6Ki6Aru0aDoh5phashi8
defaultBuckets: "example"
ingress:
  enabled: true
  ingressClassName: "nginx"
  # 控制台地址
  hostname: s3c.gptops.cloud
apiIngress:
  enabled: true
  ingressClassName: "nginx"
  # 对象存储地址，用于API使用
  hostname: s3.gptops.cloud
metrics:
  serviceMonitor:
    # 如果已经部署prometheus可以开启
    enabled: false
```

</details>

```bash title="执行生效minio.yaml"
helm upgrade -i minio bitnami/minio -f ./minio.yaml
```

### 基于docker部署

<details>
<summary>docker-compose.yaml</summary>

```yaml title="minio.yaml"
version: '2'

services:
  minio:
    image: bitnami/minio
    container_name: minio
    restart: always
    environment:
      - MINIO_ROOT_USER=ysicing
      - MINIO_ROOT_PASSWORD=Ohh5saquai9Lies9oocaneezoo1hooSh9Buf1piew4mu6Ki6Aru0aDoh5phashi8
      - MINIO_DEFAULT_BUCKETS=oss
    ports:
      - '9000:9000'
      - '9001:9001'
    volumes:
      - '/nas/minio:/data'

```

</details>

基于[bitnami/minio](https://github.com/bitnami/containers/tree/main/bitnami/minio), 可以自行修改配置

```bash title="执行生效minio.yaml"
docker compose -f minio.yaml up -d
```

### caddy配置

```bash title="dl.caddy"
s3c.gptops.cloud {
    reverse_proxy 127.0.0.1:9000
}
```

## minio使用

[mc命令简单使用](/posts/minio-mc-config)
