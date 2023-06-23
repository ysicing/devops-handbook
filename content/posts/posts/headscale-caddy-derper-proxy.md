---
title: 基于 Caddy2 部署私有 DERP 中继服务器(20230401版)
date: 2022-05-25T22:55:18+08:00
description: 基于 Caddy2 部署私有 DERP 中继服务器
tags:
- headscale
- tailscale
- derper
- caddy
- self-hosted
keywords:
- headscale
- tailscale
- derper
- caddy
- self-hosted
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

> 基于`Caddy2`自建`derper`中继服务器

<!-- truncate -->

:::info
按照之前网上的一些教程操作，貌似是没有办法转发流量的，可能是我的姿势不对，所以这里我使用`caddy`仅是生成证书了。
:::

## 场景

通常derper节点上也需要跑一些web服务，需要复用443端口

## Caddy

:::info
caddy2 在 v2.5.0 版本之后集成tailscale插件, 当前最新版本(2.6.4)

后续使用`derper.domain.com`示例

:::

国内安装`caddy`可以参考我之前写的[Caddy2初体验(20230323更新)](/posts/caddy2)哈

### 如何验证是否包含tailscale插件

```bash title="查看modules"
# 查看modules，有没有需要"tls.get_certificate.tailscale"
caddy list-modules
```

### Caddyfile

<details>
<summary>derper.domain.com</summary>

```bash title="derper.caddy"
# Caddyfile
derper.domain.com {
        tls {
                get_certificate tailscale
        }
        respond "derper ok"
}
```
</details>

## Derper

### 安装

<Tabs>
  <TabItem value="docker" label="docker">

  > 历史原因懒得调整,可以自行改成容器部署哈，很简单

  </TabItem>
  <TabItem value="go" label="go(推荐)">

```bash title="源码安装"
go install tailscale.com/cmd/derper@main
# 具体路径取决于你的GOPATH
mv /root/go/bin/derper /usr/bin/derper
```

  </TabItem>

<TabItem value="二进制" label="二进制">

```bash title="我编译好的二进制文件"
wget https://cos.ysicing.cloud/oss/binary/derper
wget https://cos.ysicing.cloud/oss/binary/derper.sha256sum
sha256sum -c derper.sha256sum
mv derper /usr/bin/derper
```

</TabItem>
</Tabs>

### 配置systemd

```bash
# /etc/systemd/system/derper.service
[Unit]
Description=derper

[Service]
StartLimitInterval=5
StartLimitBurst=10
ExecStart=/usr/bin/derper -hostname derper.domain.com -a ":77" -http-port -1 -verify-clients -certdir /var/lib/caddy/.local/share/caddy/certificates/acme-v02.api.letsencrypt.org-directory/derper.domain.com  -certmode manual
Restart=always
RestartSec=15

[Install]
WantedBy=multi-user.target
```

### 配置derper

在headscale配置文件里添加配置

### 验证

```bash
tailscale debug derp 904

{
 "Info": [
  "Region 904 == \"derper01\"",
  "Successfully established a DERP connection with node \"derper.domain.com\""
 ],
 "Warnings": null,
 "Errors": [
  "Error connecting to node \"derper.domain.com\" @ \"derper.domain.com:77\" over IPv6: dial tcp6: lookup derper.domain.com on 183.60.83.19:53: no such host"
 ]
}
```
