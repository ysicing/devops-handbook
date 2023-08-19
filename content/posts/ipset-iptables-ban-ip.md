---
title: "基于ipset和iptables屏蔽某IP访问某些端口"
date: 2023-06-22T18:59:59+08:00
description: "本文主要介绍如何使用ipset和iptables屏蔽某IP访问某些端口"
tags:
- linux
- ipset
- iptables
keywords:
- linux
- ipset
- iptables
url: /linux/ipset-iptables-ban-ip
---





对于IP的屏蔽大概只有两种方式: `加白`和`加黑`。

<!-- truncate -->

- `加白`就是把允许访问的ip添加入白名单中，没在白名单中的都进行过滤，不允许访问
- `加黑`就是把不允许访问的ip加入到黑名单中，没在黑名单中的不做限制

:::tip 示例 加黑模式

这里以封禁中国境内ip访问某境外服务器的3306端口为例;

- 所有配置操作都在境外服务器上操作
- 所有测试操作都在境内服务器上操作
- 默认境外ip为 `a.b.c.d`

:::

## 操作前测试

```bash title="端口是开放的"
21:33 ➜  ~ nc -v -z a.b.c.d 3306
Connection to a.b.c.d port 9966 [tcp/mysql] succeeded!
```

## 操作

### 安装ipset

`ipset`是`iptables`的扩展,通过它创建匹配整个IP地址集合的规则, 可以快速的让我们屏蔽某个IP段

```bash
apt update
apt install -y ipset
```

### 获取境内ip段

我们通常可以从[http://www.ipdeny.com](http://www.ipdeny.com)获取相关的ip信息, 之前github上也有维护相关的ipset.zone的。

```bash
wget http://www.ipdeny.com/ipblocks/data/countries/cn.zone
```

### 加载境内ip段

- `hash:net`类型的集合适用于存储IP地址和CIDR地址块

```bash
# 创建一个名为cnip的规则
ipset -N cnip hash:net
# 下面的方式也可以，同上面的
ipset create cnip hash:net
# 导入ip段信息
for i in $(cat ./cn.zone ); do ipset -A cnip $i; done
```

查看规则

```bash
# 查看所有
ipset list
# 查看cnip的
ipset list cnip
```

### 屏蔽操作

```bash title="默认屏蔽tcp&udp"
iptables -I INPUT -p tcp -m multiport --dport 3306 -m set --match-set cnip src -j DROP
iptables -I INPUT -p udp -m multiport --dport 3306 -m set --match-set cnip src -j DROP
```

## 测试

```bash title="端口是关闭的"
21:33 ➜  ~ nc -v -z a.b.c.d 3306
nc: connectx to a.b.c.d port 3306 [tcp/mysql] failed:Connection timed out
```

## 移除屏蔽

```bash
iptables -D INPUT -p tcp -m multiport --dport 3306 -m set --match-set cnip src -j DROP
iptables -D INPUT -p udp -m multiport --dport 3306 -m set --match-set cnip src -j DROP
ipset destroy cnip
```
