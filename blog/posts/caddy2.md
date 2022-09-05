---
title: "Caddy2初体验"
date: 2020-09-16T07:38:56+08:00
description: Caddy2初体验
tags:
- caddy
---

> `Caddy2`使用小记

<!-- truncate -->

> 将**Caddy**升级到 **Caddy2**， 记录一下。 2.0版本改变挺大的。

## 环境

腾讯云香港轻量, **Debian 10**, 秒不可言。

## 安装caddy2

#### 使用镜像或者源安装(推荐源安装)

```bash
docker pull registry.cn-beijing.aliyuncs.com/k7scn/caddy
# 或者
echo  "deb [trusted=yes] https://apt.fury.io/caddy/ /" > /etc/apt/sources.list.d/caddy-fury.list
apt update
apt install caddy
```

#### 使用二进制安装

```bash
wget https://github.com/caddyserver/caddy/releases/download/v2.1.1/caddy_2.1.1_linux_amd64.tar.gz
tar xf caddy_2.1.1_linux_amd64.tar.gz
mv caddy /usr/local/bin/caddy2
```

配置systemd

```
# /etc/systemd/system/caddy.service
[Unit]
Description=Caddy
Documentation=https://caddyserver.com/docs/
After=network.target

[Service]
User=caddy
Group=caddy
EnvironmentFile=-/etc/caddy/caddy.env
ExecStart=/usr/local/bin/caddy2 run --environ --config /etc/caddy/Caddyfile
ExecReload=/usr/local/bin/caddy2 reload --config /etc/caddy/Caddyfile
TimeoutStopSec=5s
LimitNOFILE=1048576
LimitNPROC=512
PrivateTmp=true
ProtectSystem=full
AmbientCapabilities=CAP_NET_BIND_SERVICE

[Install]
WantedBy=multi-user.target
```

## Caddyfile使用

> 目前 Caddy2 官方推荐配置文件使用 JSON 格式，或者，不使用配置文件，直接调用 admin API。但我推荐使用 Caddyfile, 日常维护起来要方便一些

```bash
caddy2 adapt --config /etc/caddy/Caddyfile --validate  #校验是否合法
```

<del>官方虽然说从v1升级到v2很简单，我信你的鬼</del>

#### 示例

```

{
  # 开启实验性 HTTP/3
  experimental_http3
  # 测试通过的生产环境中去除该项
  # acme_ca https://acme-staging-v02.api.letsencrypt.org/directory
}

(common_headers) {
  encode gzip
}
(secure_headers) {
  header {
    Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
    X-Frame-Options SAMEORIGIN
    X-Content-Type-Options nosniff
  }
}

ci.hk2.godu.dev {
  tls ops.ysicing@gmail.com
  import common_headers
  import secure_headers
  reverse_proxy 169.254.0.2:80
}

cr.hk2.godu.dev {
  tls ops.ysicing@gmail.com
  import common_headers
  import secure_headers
  reverse_proxy 127.0.0.1:404
}

:80 {
        respond "2020 hello"
}
```

#### 配置说明

caddy2 引入了全局选项**global options**的概念，并且如果全局选项存在，必须位于 Caddyfile 的开头

```
# 全局配置
{
  # 开启实验性 HTTP/3
  experimental_http3
  # 测试通过的生产环境中去除该项
  # acme_ca https://acme-staging-v02.api.letsencrypt.org/directory
}
```

1. 支持**HTTP/3**， 工作在 UDP 协议上，需要放行443 UDP
2. Let’s Encrypt 测试环境，默认caddy2是处于生产环境，测试时可改为测试环境

[官方文档](https://caddyserver.com/docs/caddyfile)
