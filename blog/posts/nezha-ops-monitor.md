---
title: "部署一站式轻监控轻运维系统哪吒监控魔改版金吒监控"
date: 2021-09-22T13:09:03+08:00
description: 本文主要讲述部署金吒监控
tags:
- tools
---

<!-- truncate -->

## 序

魔改版本, 仅支持资源展示。如果需要定时任务或者监控报警，请使用 [哪吒监控](https://github.com/naiba/nezha)

> 本魔改目前仅体现资源相关信息

### 魔改功能

- 支持被动注册和主动注册
- 推荐使用容器化部署

## 服务端

### 配置说明

```yaml
debug: true
httpport: 80
grpcport: 5555
admin: # 本地管理员账号
  user: ysicing
  pass: 12345678
oauth2:
  type: "github" #gitee/github
  admin: "ysicing" #管理员列表，半角逗号隔开
  clientid: "" # 在 https://github.com/settings/developers 创建，无需审核 Callback 填 http(s)://域名或IP/oauth2/callback
  clientsecret: ""
site:
  brand: "金吒监控"
  cookiename: "nezha-dashboard" #浏览器 Cookie 字段名，可不改
  theme: "default"
db:
  type: sqlite
  dsn: "nezha.sqlite"
#  type: mysql
#  dsn: root:rootpass@tcp(db.k8s.ysicing.local:3306)/bjdb?charset=utf8mb4&parseTime=True&loc=Local
  debug: true
  metrics:
    name: nezha-api
    enable: true
```

```bash
kubectl apply -f https://sh.ysicing.me/k8s/nezha/dash.yml
```


## 客户端

主动注册需要持久化`/var/lib/nezha` 

```yaml
version: '2'
services:
  nezha-agent:
    image: ghcr.io/ysicing/nezha-agent:edge
    container_name: nezha-agent
    network_mode: "host"
    pid: "host"
    privileged: true
    volumes:
      - ./agentdata:/var/lib/nezha
    # command:
    # - "--p=cdxxxxxxx" # 被动注册
```


## 演示

[金吒监控](https://nezha.external.ysicing.net/)

## 致谢

[naiba/nezha](https://github.com/naiba/nezha)
