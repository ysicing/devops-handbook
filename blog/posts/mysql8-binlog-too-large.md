---
title: mysql数据库binlog日志太大解决办法
date: 2018-05-18T22:55:18+08:00
description: 本文主要mysql数据库binlog日志太大解决办法
tags:
- mysql
---

<!-- truncate -->

:::info
基于`bitnami/mysql:8.0`操作
:::

## 临时操作(实践版本 8.0)

```mysql
# 查看binlog列表
show binary logs;
# 查看binlog过期时间, 默认30天(2592000)
show variables like '%binlog_expire_logs_seconds%';
# 修改为 3天(259200)
set global binlog_expire_logs_seconds=259200;
# 刷新日志
flush logs;
```

## 永久操作(未实践)

修改`my.cnf`

```bash
# 设置binlog日志大小
max_binlog_size = 500M
# 设置过期清理时间
expire_logs_days = 3
```

## 5.7版本数据库(未实践)

```mysql
# 查看binlog列表
show binary logs;
# 查看binlog过期时间, 默认90天, 0表示永不过期
show variables like '%expire_logs_days%';
# 修改为 3天
set global expire_logs_days=3;
# 刷新日志
flush logs;
```
