---
title: 懒人版使用tpclash一键部署透明网关实现旁路上网自由
date: 2023-03-17T00:00:00+08:00
description: 懒人版使用tpclash一键部署透明网关实现旁路上网自由
tags:
- clash
- 懒人版
keywords:
- clash
- 懒人版
---

> 基于 Debian 搭建 Clash 服务实现旁路网关功能，为局域网设备提供广告过滤功能

<!-- truncate -->

## 什么是透明代理？

透明代理（transparent proxy）是一种在网络层上实现的代理技术，它可以让网络中的所有流量都自动经过代理服务器，而不需要在每个终端设备上配置代理设置。这样，就可以实现对整个网络的流量控制和管理，比如过滤广告、屏蔽恶意网站、加速访问等。

## 为什么要使用clash？

clash是一个基于Go语言开发的跨平台、多协议的代理软件，它支持多种主流的代理协议，以及Socks5、HTTP等本地协议。clash还具有强大的规则引擎，可以根据域名、IP、GEOIP等条件进行分流和策略选择。clash还支持TUN模式，可以将TCP和UDP流量转换为虚拟网卡设备的流量，从而实现全局透明代理。

<hr />

:::note
以上是gpt生成, 很早就弄了，体验非常棒。所以记录一下
:::

## 安装tpclash

1. 下载tpclash

```bash
# ghproxy.com为加速下载
wget https://ghproxy.com/https://github.com/mritd/tpclash/releases/download/v0.0.20/tpclash-premium-linux-amd64
```

2. 安装tpclash

```bash
install tpclash-premium-linux-amd64 /usr/bin/tpclash
```

:::info
由于博主集成比较多，也可以参考我的简化版本[ysicing/clash-premium](https://github.com/ysicing/clash-premium)
:::

## 准备clash premium配置文件

示例请参考[config.yaml](https://github.com/ysicing/clash-premium/blob/master/config.yaml)

## 启动tpclash

> 由于作者已经集成好相关脚本, 细节就不过多讨论了

### 验证是否生效

> 这步很重要哈，不然你可能就断网了(minipc就遇到了😂)

:::info
保证 TPClash 在启动 5 分钟后自动退出, 如果出现断网等情况也能自行恢复

```bash
/usr/bin/tpclash -c /etc/clash/config.yaml --test --debug
```

:::

### 配置systemd服务

```bash
cat /etc/systemd/system/tpclash.service
[Unit]
Description=tpclash.
After=network.target

[Service]
Type=simple
User=root
Restart=on-abort
ExecStart=/usr/bin/tpclash -c /etc/clash/config.yaml

[Install]
WantedBy=multi-user.target
```

启动并自启动

```bash
systemctl enable tpclash --now
```

## 最后

修改路由器默认网关为当前机器的ip

### 补充说明

如果想访问ui，根据配置文件访问 `http://<ip>:<port>/ui/#/proxies`


## 参考文献

- [mritd/tpclash](https://github.com/mritd/tpclash)
- [使用 clash 搭建透明网关实现旁路上网自由](https://little-star.love/posts/5d083060/)
