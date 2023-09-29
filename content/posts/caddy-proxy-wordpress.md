---
title: "Caddy2 反向代理WordPress博客"
date: 2023-03-23T16:00:25+08:00
description: 本文主要简单介绍Caddy2如何反向代理WordPress博客
tags:
- caddy
- wordpress
keywords:
- caddy
- wordpress
---

<!-- truncate -->

## 安装Caddy2

<details>
  <summary>基于软件源安装</summary>

```bash title="安装"
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/caddy-stable-archive-keyring.gpg] https://mirrors.ysicing.net/caddy/stable/deb/debian any-version main" | tee /etc/apt/sources.list.d/caddy.list
apt-get update
apt-get install caddy
```
</details>

具体可以参考 [Caddy2初体验](/posts/caddy2)

## 安装WordPress博客系统

<details>
  <summary>基于docker-compose部署安装</summary>

```yaml title="docker-compose.yaml"
version: '2'
services:
  mariadb:
    image: docker.io/bitnami/mariadb:10.6
    container_name: mariadb
    restart: always
    volumes:
      - '/root/service/data/mariadb:/bitnami/mariadb'
    environment:
      - MARIADB_ROOT_PASSWORD=ealohw5ool1za3Risohqu7heemoophai
      - MARIADB_USER=bn_wordpress
      - MARIADB_DATABASE=bn_wordpress
      - MARIADB_PASSWORD=cieRaig3kieth2ahghuuNg2theePh0Da
  wordpress:
    container_name: wordpress
    image: docker.io/bitnami/wordpress:6
    restart: always
    ports:
      - '8080:8080'
    volumes:
      - '/root/service/data/wordpress:/bitnami/wordpress'
    depends_on:
      - mariadb
    environment:
      - WORDPRESS_DATABASE_HOST=mariadb
      - WORDPRESS_DATABASE_PORT_NUMBER=3306
      - WORDPRESS_DATABASE_USER=bn_wordpress
      - WORDPRESS_DATABASE_NAME=bn_wordpress
      - WORDPRESS_DATABASE_PASSWORD=cieRaig3kieth2ahghuuNg2theePh0Da
```
</details>

直接执行命令起来即可

```bash
docker compose -f /root/service/docker-compose.yaml pull
docker compose -f /root/service/docker-compose.yaml up -d
```

## 配置Caddy

<details>
  <summary>全局Caddyfile</summary>

```yaml title="/etc/caddy/Caddyfile"
(LOG) {
 log {
  output file "{args.0}" {
   roll_size 100M
   roll_uncompressed
   roll_local_time
   roll_keep 3
   roll_keep_for 7d
  }
  format json
 }
}

(ERR) {
 handle_errors {
  redir https://{err.status_code}.example.com
 }
}

{
 debug
}

import /etc/caddy/*.caddy
```

</details>

<details>
  <summary>默认跳转</summary>

```yaml title="/etc/caddy/default_http.caddy"
:80 {
 # import LOG "/var/log/caddy/default-80.log"
 # import ERR
 redir https://example.com{uri} permanent
}
```
</details>


<details>
  <summary>WordPress</summary>

```yaml title="/etc/caddy/example.caddy"
example.com {
 import LOG "/var/log/caddy/blog.log"
 import ERR
 reverse_proxy :8080 {
  header_up Host {host} # {http.request.host}
  header_up X-Real-IP {remote} # {http.request.remote}
  header_up X-Forwarded-For {remote} # {http.request.remote}
  header_up X-Forwarded-Port {http.request.remote.port}
  header_up X-Forwarded-Proto "https"
       }
}

www.example.com {
 redir https://example.com{uri}
}
```

</details>

重启caddy

```bash
# 可以先验证一下语法
caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile
# 没问题重启
systemctl restart caddy
```
