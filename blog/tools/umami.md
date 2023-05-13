---
title: "部署轻量数据统计分析umami"
date: 2023-05-13T18:59:59+08:00
description: "本文主要介绍如何部署umami以及升级v1版本"
tags:
- self-hosted
- umami
keywords:
- self-hosted
- umami
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

Umami 是一个简单、易于使用的开源网站分析解决方案。它的目标是提供一个清晰的视图，而不会让你的隐私权受到侵犯。

<!-- truncate -->

## 安装v2

:::tip 说明
- 安装其实比较简单哈, 这里我们以compose和k8s为例，介绍如何安装, 默认已经了解docker或者k8s了
- 对MySQL比较了解哈, 基本使用mysql版本哈
:::

### 关于镜像

> 可能官方镜像无法拉取, 这里我同步了一下, 有需要的可以使用哈

:::note 同步时间:2023.05.13

- `registry.cn-beijing.aliyuncs.com/k7scn/umami:mysql-latest`
- `ccr.ccs.tencentyun.com/k7scn/umami:mysql-latest`

:::

### 具体部署

:::tip 请对照修改哦

- `APP_SECRET`: 最好改成自己随机字符串，可以使用这个工具随机生成`pwgen 32 1`
- `DATABASE_URL`: 自己的数据库连接信息

:::

> 操作如下😂, 仅供参考:

<Tabs
  defaultValue="docker"
  values={[
    {label: 'docker', value: 'docker'},
    {label: 'k8s', value: 'k8s'},
  ]}>
  <TabItem value="docker" label="docker">
<details>
<summary>docker-compose.yml</summary>

```yaml title="示例如下,数据库信息根据自己的要求"
---
version: '3'
services:
  umami:
    image: ccr.ccs.tencentyun.com/k7scn/umami:mysql-latest
    container_name: umami
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: mysql://umami:umamipassword@db:3306/umami
      DATABASE_TYPE: mysql
      APP_SECRET: umami_hash_salt_random_secrets
    depends_on:
      - db
    restart: always
  db:
    image: bitnami/mysql:8.0
    container_name: db
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_USER: umami
      MYSQL_PASSWORD: umamipassword
      MYSQL_DATABASE: umami
    volumes:
      - 'mysql_data:/bitnami/mysql/data'
    restart: always
    healthcheck:
      test: ['CMD', '/opt/bitnami/scripts/mysql/healthcheck.sh']
      interval: 15s
      timeout: 5s
      retries: 6
volumes:
  mysql_data:
    driver: local
```

</details>
  </TabItem>
  <TabItem value="k8s" label="k8s">
<details>
<summary>umami.yaml</summary>

```yaml title='示例如下, 默认数据库已经通过helm安装好了'
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    mode.ysicing.me/workload: web
  labels:
    mode.ysicing.me/workload: web
    k8s.ysicing.me/name: umami
  name: umami
spec:
  replicas: 1
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 0%
    type: RollingUpdate
  selector:
    matchLabels:
      mode.ysicing.me/workload: web
      k8s.ysicing.me/name: umami
  template:
    metadata:
      labels:
        mode.ysicing.me/workload: web
        k8s.ysicing.me/name: umami
    spec:
      containers:
      - image: ccr.ccs.tencentyun.com/k7scn/umami:mysql-latest
        imagePullPolicy: Always
        name: umami
        env:
        - name: DATABASE_URL
          value: "mysql://umami:umamipassword@mysql.default.svc:3306/umami"
        - name: APP_SECRET
          value: "umami_hash_salt_random_secrets"
        - name: DATABASE_TYPE
          value: "mysql"
        resources:
          limits:
            cpu: 500m
            memory: 500Mi
          requests:
            cpu: 100m
            memory: 100Mi
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
      restartPolicy: Always
      terminationGracePeriodSeconds: 30
---
apiVersion: v1
kind: Service
metadata:
  annotations:
    mode.ysicing.me/workload: web
  labels:
    mode.ysicing.me/workload: web
    k8s.ysicing.me/name: umami
  name: umami
spec:
  ports:
  - name: http
    port: 3000
    protocol: TCP
    targetPort: 3000
  selector:
    mode.ysicing.me/workload: web
    k8s.ysicing.me/name: umami
  sessionAffinity: None
  type: ClusterIP
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    mode.ysicing.me/workload: web
  labels:
    mode.ysicing.me/workload: web
  name: umami
spec:
  ingressClassName: nginx
  rules:
  - host: umami.external.ysicing.cloud
    http:
      paths:
      - backend:
          service:
            name: umami
            port:
              name: http
        path: /
        pathType: ImplementationSpecific
```

</details>
  </TabItem>
</Tabs>

### 使用

默认安装完访问域名或者:3000端口

:::tip 账号

- 默认账号: `admin`
- 默认密码: `umami`

:::

## 升级v1版本

由于我很早之前就基于k8s安装了，需要手动升级一下

<details>
<summary>使用job处理一下</summary>

```yaml title="升级脚本"
apiVersion: batch/v1
kind: Job
metadata:
  name: unami-upgrade
spec:
  template:
    metadata:
      name: unami-upgrade
    spec:
      containers:
        - name: unami-upgrade
          image: ccr.ccs.tencentyun.com/k7scn/umami:mysql-latest
          command: ["sh", "-c", "npm config set registry https://registry.npm.taobao.org/ && npx @umami/migrate-v1-v2@latest"]
          workingDir: /app
          env:
            - name: DATABASE_URL
              value: "mysql://umami:umamipassword@mysql.default.svc:3306/umami"
            - name: APP_SECRET
              value: "umami_hash_salt_random_secrets"
            - name: DATABASE_TYPE
              value: "mysql"
      restartPolicy: Never
  backoffLimit: 1
```

</details>

```bash
# 重启使用最新镜像
kubectl rollout restart deploy/umami
```

:::tip 其他

- tracker script has been renamed from `umami.js` to `script.js`
- job方式升级有瑕疵没有清理掉v1的库哈

:::

### 服务中断

中间踩了npx没法下载相关包的坑😂😂, 浪费了比较长的时间

![status](/images/blog/20230513/umami-status.png)

## 最后

如果使用clash作为代理，可能有几条规则会导致你没法访问[官方文档](https://umami.is/)

- [ACL4SSR/ACL4SSR](https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/BanEasyListChina.yaml)
- [Loyalsoldier/clash-rules(reject)](https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt)

