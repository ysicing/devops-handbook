---
title: "部署代码质量检测工具Sonarqube"
date: 2023-05-04T17:59:59+08:00
description: "本文主要介绍如何部署Sonarqube"
tags:
- self-hosted
- sonarqube
- devops
keywords:
- self-hosted
- sonarqube
- devops
url: /tools/sonarqube-deploy
---

Sonarqube是一个开源的代码质量检测工具，可以帮助我们检测代码的质量，提供了很多检测项，如代码重复率、代码覆盖率、代码注释率、代码复杂度等等，可以帮助我们提高代码质量。本文将介绍如何安装、配置和使用Sonarqube。

<!-- truncate -->

> 默认使用容器化方式部署

## 安装docker

请参考[懒人版一键快速安装docker](/posts/docker)

## 安装sonarqube

<details>
<summary>docker-compose.yml</summary>

```yaml title="docker-compose.yml"
version: '2'
services:
  postgresql:
    image: hub.qucheng.com/app/postgresql:15
    container_name: postgresql
    restart: always
    volumes:
      - 'postgresql_data:/bitnami/postgresql'
    environment:
      - ALLOW_EMPTY_PASSWORD=yes
      - POSTGRESQL_USERNAME=bn_sonarqube
      - POSTGRESQL_DATABASE=bitnami_sonarqube
  sonarqube:
    image: hub.qucheng.com/app/sonarqube:qc-r3-9.9.0
    container_name: sonarqube
    restart: always
    ports:
      - '6230:9000'
    volumes:
      - 'sonarqube_data:/bitnami/sonarqube'
    depends_on:
      - postgresql
    environment:
      - ALLOW_EMPTY_PASSWORD=yes
      - SONARQUBE_DATABASE_HOST=postgresql
      - SONARQUBE_DATABASE_PORT_NUMBER=5432
      - SONARQUBE_DATABASE_USER=bn_sonarqube
      - SONARQUBE_DATABASE_NAME=bitnami_sonarqube
      - BITNAMI_DEBUG=true
      - SONARQUBE_USERNAME=admin
      - SONARQUBE_PASSWORD=bitnami
volumes:
  postgresql_data:
    driver: local
  sonarqube_data:
    driver: local
```

</details>

:::tip 注意
默认监听端口`6230`, 如果提示端口被占用,请编辑docker-compose.yml文件
:::

启动sonarqube

```bash
docker compose -f docker-compose up -d
```

## 访问sonarqube

稍等几分钟, 启动比较慢, 然后访问`http://<你的ip>:6230`即可, 默认用户名`admin/bitnami`

:::tip 问题排查

如果发现SonarQube没法正常启动请检查一下

`sysctl -a|grep vm.max_map_count` 如果值为65530。

请临时修改一下 `sysctl -w vm.max_map_count=655360`

OR

编辑 `/etc/sysctl.conf` 新增 `vm.max_map_count=655360`, 生效`sysctl -p`

最后重建容器 `docker-compose -f docker-compose.yml restart sonarqube`

> 问题原因是sonarqube依赖es，es在启动的时候要求最少为 262144，不然可能会导致内存溢出从而起不来。

:::

## sonarqube基本操作

略, 按照引导来即可。可能其中需要自己定义质量规则。

## 客户端安装

客户端镜像 `hub.qucheng.com/app/sonar-scanner-cli:4.8`

以下是一个封装脚本示例, 可根据自己情况调整

```bash
#!/bin/bash

export SONARQUBE_URL="http://<你的ip>:6230"
export SONAR_TOKEN="你的token"
export CODE_REPO="你的代码绝对路径"
export SCANNER_OPTS="-Dsonar.projectKey=zentaopms"

docker run \
    --rm \
    -e SONAR_HOST_URL="${SONARQUBE_URL}" \
    -e SONAR_SCANNER_OPTS="${SCANNER_OPTS}" \
    -e SONAR_TOKEN="${SONAR_TOKEN}" \
    -v "${CODE_REPO}:/usr/src" \
    hub.qucheng.com/app/sonar-scanner-cli:4.8
```

将上述脚本修改后保存为`/usr/local/bin/codescan`文件,并赋予执行权限`chmod +x /usr/local/bin/codescan`, 然后写完代码后执行`codescan`即可扫描代码

参考[官方文档](https://docs.sonarqube.org/latest/analyzing-source-code/scanners/sonarscanner/)

## 其他

sonarqube镜像经过定制, 内部集成了一些常用插件

[easysoft/sonarqube-docker](https://github.com/quicklyon/sonarqube-docker)
