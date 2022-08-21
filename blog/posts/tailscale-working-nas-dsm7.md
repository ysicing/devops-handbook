---
title: "群晖新套件：Tailscale极速组网"
date: 2021-10-02T10:36:07+08:00
description: 本文主要讲述群晖安装Tailscale
tags:
- wireguard
- tailscale
---

<!-- truncate -->

> 最近群晖升级到DSM7了,决定使用`Tailscale`替代之前自行部署的`wireguard mesh`组网

## 简介

Tailscale属于一种虚拟组网工具，基于WireGuard, 基本零配置，秒接入, 降低学习成本，超级简单，访问速度也很不错，而且支持全平台。

## 注意事项

- 千万不要使用gmail验证/Google登录，否则移动端验证很蛋疼的。

## 安装

默认安装参考 [tailscale](https://tailscale.com/download), 中国大陆访问境外镜像站可能比较慢，这里我提供debian系统下的安装包。

```bash
docker pull registry.cn-beijing.aliyuncs.com/k7scn/debcache
docker run -it --rm -v /root:/sysdir registry.cn-beijing.aliyuncs.com/k7scn/debcache cp $(docker run --rm registry.cn-beijing.aliyuncs.com/k7scn/debcache ls -l | grep deb | awk '{print $NF}') /sysdir/

# 已经安装ysicing/tools的可以使用
ergoget tailscaleget
```

### 群晖客户端安装

我的群晖是DS218+,架构是`apollolake/amd64`, 如果你不清楚你的架构，可以参考 [群晖等架构信息](https://github.com/tailscale/tailscale-synology/blob/main/docs/platforms.md)

下载 [tailscale-x86_64-1.14.6-2010-dsm7.spk](https://github.com/tailscale/tailscale-synology/releases/download/v1.14.6/tailscale-x86_64-1.14.6-2010-dsm7.spk),不要从官方下载版本比较老。

手动安装

![](/images/nas/nas-202110021101.jpg)

![](/images/nas/nas-1633147949452.jpg)

登录查看状态

![](/images/nas/nas-conn.jpg)

