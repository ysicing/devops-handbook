---
title: 站点公告 - 镜像代理服务迁移
date: 2023-03-07T21:46:18+08:00
description: 本文主要通知站点镜像代理迁移通知
tags:
- site
- 公告
---

<!-- truncate -->

> 鉴于近期中国电信至阿里云香港劣质线路，及Caddy v1迁移到v2计划，对部分代理服务进行链路迁移

## 域名变更

```
m.deb.ysicing.me --> mirrors.ysicing.cloud
m.yum.ysicing.me --> mirrors.ysicing.cloud
```

同时积极响应国家推进ipv6计划, 新域名同时支持ipv4/ipv6双栈接入

:::info
`debian.ysicing.me` 本季度暂无调整计划, 估计与ergo同时调整，会鸽掉
:::

## 用户

用户侧不需要调整

## 补充说明

上述公开代理如下软件:

- `tailscale`
- `caddy`
- `hashicorp`

以下仅为示例

```bash
# /etc/apt/sources.list.d/tailscale.list
deb [signed-by=/usr/share/keyrings/tailscale-archive-keyring.gpg] https://mirrors.ysicing.cloud/tailscale/stable/debian bullseye main
# /etc/apt/sources.list.d/caddy-stable.list
deb [signed-by=/usr/share/keyrings/caddy-stable-archive-keyring.gpg] https://mirrors.ysicing.cloud/caddy/stable/deb/debian any-version main
# /etc/apt/sources.list.d/hashicorp.list
deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://mirrors.ysicing.cloud/hashicorp/ bullseye main
```

## 技术细节

> 仅供参考

### caddy v1

```bash
<域名> {
   gzip
   log stdout
   tls <邮箱>
   proxy /tailscale/ https://pkgs.tailscale.com/ {
     without /tailscale
   }
   proxy /caddy/ https://dl.cloudsmith.io/public/caddy {
    without /caddy
  }
  proxy /hashicorp/ https://apt.releases.hashicorp.com {
   without /hashicorp
  }
}
```

### caddy2

```bash
mirrors.ysicing.cloud {
 import LOG "/var/log/caddy/mirrors.log"
 handle_path /tailscale/* {
  reverse_proxy https://pkgs.tailscale.com {
    header_up Host {upstream_hostport}
  }
 }
 handle_path /caddy/* {
  rewrite * /public/caddy{path}
  reverse_proxy https://dl.cloudsmith.io {
    header_up Host {upstream_hostport}
  }
 }
 handle_path /hashicorp/* {
  reverse_proxy https://apt.releases.hashicorp.com {
    header_up Host {upstream_hostport}
  }
 }
 respond {remote_host}
}
```
