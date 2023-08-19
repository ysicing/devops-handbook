---
title: "mc命令简单使用"
date: 2023-03-23T23:38:56+08:00
description: 本文主要记录一下minio客户端mc的简单使用
authors: ysicing
tags:
- minio
- 对象存储
- tools
keywords:
- minio
- 对象存储
- tools
---





> 默认已经安装好了Minio了

<!-- truncate -->

## 安装mc

<Tabs>
  <TabItem value="GNU/Linux" label="GNU/Linux">

```bash title="安装二进制"
wget https://dl.min.io/client/mc/release/linux-amd64/mc
chmod +x mc
./mc --help
```

  </TabItem>
  <TabItem value="macOS" label="macOS">

```bash title="安装二进制"
brew install minio/stable/mc
mc --help
```

  </TabItem>
</Tabs>

## 配置server

```bash title="添加"
mc alias set local https://play.min.io Q3AM3UQ867SPQQA43P2F zuf+zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG   --api "s3v4"
```

```bash title="列出"
mc alias ls
local
  URL       : https://play.min.io
  AccessKey : Q3AM3UQ867SPQQA43P2F
  SecretKey : zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG
  API       : S3v4
  Path      : auto

s3
  URL       : https://s3.amazonaws.com
  AccessKey : YOUR-ACCESS-KEY-HERE
  SecretKey : YOUR-SECRET-KEY-HERE
  API       : S3v4
  Path      : dns
```

## 简单使用

```bash
# 上传
mc cp ./* local/oss/cdn.ysicing.me/
# 生成有效期1分钟的分享链接, 有效期最大7d如果是私有的
mc share download --expire=1m local/oss/cdn.ysicing.me/scripts/docker.sh
```

## 附录参考

[部署私有对象存储服务Minio](/tools/minio-deploy)
