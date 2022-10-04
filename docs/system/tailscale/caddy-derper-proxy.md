---
title: 基于 Caddy2 部署私有 DERP 中继服务器
tags:
- headscale
- tailscale
- derper
- caddy
---

## 场景

通常derper节点上也需要跑一些web服务，需要复用443端口

## Caddy

:::info
caddy2 在 v2.5.0 版本之后集成tailscale插件

后续使用`derper.domain.com`示例

:::

### 如何验证是否包含tailscale插件

```bash
din caddy2 ash
# 进容器查看modules，有没有需要"tls.get_certificate.tailscale"
caddy list-modules
```

### Caddyfile

```bash
# Caddyfile
derper.domain.com {
        tls {
                get_certificate tailscale
        }
        reverse_proxy / 10.0.4.11:77 {
        }
}
```

### derper

> 历史原因懒得调整,可以改成容器部署哈

```bash
# /etc/systemd/system/derper.service
[Unit]
Description=derper

[Service]
StartLimitInterval=5
StartLimitBurst=10
ExecStart=/usr/local/bin/derper -hostname derper.domain.com -a ":77" -verify-clients
Restart=always
RestartSec=15

[Install]
WantedBy=multi-user.target
```

## 部署

```yaml
# docker-compose.yml
version: "3"

services:
  caddy2:
    image: caddy
    container_name: caddy2
    ports:
      - "2019:2019"
      - "80:80"
      - "443:443"
    restart: always
    volumes:
      - $PWD/Caddyfile:/etc/caddy/Caddyfile
      - caddy_data:/data
      - caddy_config:/config
    networks:
      - service

networks:
  service:
    external: false

volumes:
  caddy_data:
    driver: local
  caddy_config:
    driver: local
```

运行启动就ok了

```bash
docker compose -f docker-compose.yml up -d
```
