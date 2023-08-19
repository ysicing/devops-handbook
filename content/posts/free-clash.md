---
title: 构建自己的clash本土化服务
date: 2023-03-01T00:00:00+08:00
description: 构建自己的clash本土化服务来访问公司内部资源
tags:
- clash
- free
keywords:
- clash
- free
url: /451/free-clash
---

> 构建自己的clash本土化服务来访问公司内部资源

<!-- truncate -->

:::danger
仅限个人本地测试用来访问公司内部服务
:::

## 项目

具体可以参考: [clash-premium](https://github.com/ysicing/clash-premium)

:::danger
由于资源来自互联网, 没法保证安全, 请谨慎使用
:::

## 使用

```bash
docker run -itd --name clash-premium -p 7890:7890 -p 22222:22222 ttl.sh/clash-premium:2h
```

然后配置自己的代理即可 `127.0.0.1:7890`
