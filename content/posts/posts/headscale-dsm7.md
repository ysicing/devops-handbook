---
title: 群晖上基于Headscale内网穿透
date: 2022-05-25T22:55:18+08:00
description: 群晖上基于Headscale内网穿透
tags:
- headscale
- tailscale
- 内网穿透
- 群晖
---

<!-- truncate -->

> 可以先看看这个[群晖新套件：Tailscale极速组网](/posts/tailscale-working-nas-dsm7)

## 群晖接入Headscale

要求(我的测试环境):

- 可以ssh登录到群晖
- 最新版本tailscale 1.30(默认已经更新到当前最新版本)
- 群晖DS218+

## 操作

```bash
# 做了如下操作, 其他节点都没法ping通群晖ip
sudo setcap cap_net_admin+eip /var/packages/Tailscale/target/bin/tailscaled
sudo mkdir -p /dev/net
sudo mknod /dev/net/tun c 10 200
sudo chmod 0666 /dev/net/tun
# 操作如下方式就可以了
sudo /var/packages/Tailscale/target/bin/tailscale configure-host
sudo synosystemctl restart pkgctl-Tailscale.service
```

参考文档[Access Synology NAS from anywhere](https://tailscale.com/kb/1131/synology/#enabling-synology-outbound-connections)
