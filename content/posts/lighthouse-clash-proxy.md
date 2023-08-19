---
title: "基于腾讯云Lighthouse代理实现无公网CVM访问公网"
date: 2023-03-26T13:46:48+08:00
authors: ysicing
description: 基于腾讯云Lighthouse代理实现无公网CVM访问公网
tags:
- lighthouse
- qcloud
- clash
- nat
- spot
keywords:
- lighthouse
- qcloud
- clash
- nat
- spot
---





<!-- truncate -->

## 前提

- 已经有一个腾讯云轻量云实例
- 已经有一个腾讯云CVM竞价实例(无公网)
- 需要同地域且已经云联网

:::info 安利Spot
我写的竞价机器小助手: [ysicing/spot](https://github.com/ysicing/spot)  
解决频繁开通/销毁竞价CVM实例
:::

## 轻量部署Socks5服务

> 在腾讯云轻量上部署代理服务

<details>
<summary>示例docker-compose.yaml</summary>

```yaml title="docker-compose.yaml"
version: '3.9'
services:
  socks5:
    image: serjs/go-socks5-proxy
    container_name: socks5
    environment:
      - PROXY_USER="xxx"
      - PROXY_PASSWORD="xxx"
    network_mode: host
    restart: always
```
</details>

将上述docker-compose.yaml跑起来即可

```bash
docker compose -f docker-compose.yaml up -d
```

:::info
提示这个socks5是我随便找的一个镜像哈，你也可以用其他工具跑socks5服务哈
:::

## CVM部署Clash服务

下载三个文件哈，手动同步到CVM上

- [https://github.com/Dreamacro/clash/releases/download/premium/clash-linux-amd64-2023.03.18.gz](https://ghproxy.com/https://github.com/Dreamacro/clash/releases/download/premium/clash-linux-amd64-2023.03.18.gz)
- [https://cdn.jsdelivr.net/gh/Hackl0us/GeoIP2-CN@release/Country.mmdb](https://cdn.jsdelivr.net/gh/Hackl0us/GeoIP2-CN@release/Country.mmdb)
- [https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt](https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt)

### 部署Clash

:::note `/etc/clash`目录结构
<details>
<summary>目录结构</summary>

```bash
root@VM-0-15-debian:/etc/clash# tree
.
├── config.yaml
├── Country.mmdb
└── ruleset
    └── lancidr.yaml

1 directory, 4 files
```
</details>
:::

:::note clash.yaml配置文件
<details>
<summary>clash.yaml配置文件</summary>

```yaml title="clash.yaml配置文件"
mixed-port: 7890
# linux
tproxy-port: 7893
routing-mark: 7777
allow-lan: true
bind-address: "*"
mode: rule
log-level: debug
interface-name: eth0
external-controller: 10.0.0.15:22222
secret: "eeg7sachu3ca0O666ccpnb666ie1Shoh3veiCh8Ju"
profile:
  store-selected: true
  store-fake-ip: true
  tracing: true
dns:
  enable: true
  listen: 0.0.0.0:1053
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  default-nameserver:
    - 183.60.83.19
    - 183.60.82.98
  nameserver:
    - 183.60.83.19
    - 183.60.82.98
  fake-ip-filter:
    - '+.tencentyun.com'
    - '+.tencentcs.com'
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4
      - 0.0.0.0/32
      - 127.0.0.1/32

tun:
  enable: true
  stack: system
  dns-hijack:
    - any:53
  auto-route: true
proxies:
    - { name: "lh", type: socks5, server: 10.0.4.1, port: 1080, username: admin, password: admin, tls: false, skip-cert-verify: true, udp: false}
    - { name: "lh2", type: socks5, server: 10.0.4.2, port: 1080, username: admin, password: admin, tls: false, skip-cert-verify: true, udp: false}

proxy-groups:
  - name: auto
    type: select
    proxies:
      - lh
      - lh2

rule-providers:
  lancidr:
    type: file
    behavior: ipcidr
    path: ./ruleset/lancidr.yaml

rules:
  - RULE-SET,lancidr,DIRECT
  - GEOIP,LAN,DIRECT
  - MATCH,auto
```

</details>
:::

<details>
<summary>clash服务</summary>

```bash title="/etc/systemd/system/clash.service"
[Unit]
Description=A rule based proxy.
After=network.target

[Service]
Type=simple
User=root
Restart=on-abort
ExecStart=/usr/bin/clash -d /etc/clash

[Install]
WantedBy=multi-user.target
```
</details>

将上述文件保存

```bash
systemctl enable clash --now
```

## 测试

CVM安装docker哈，或者访问百度

```bash
root@VM-0-15-debian:/etc/clash# curl -I  www.baidu.com -vvv
*   Trying 198.18.0.4:80...
* Connected to www.baidu.com (198.18.0.4) port 80 (#0)
> HEAD / HTTP/1.1
> Host: www.baidu.com
> User-Agent: curl/7.74.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
HTTP/1.1 200 OK
```
