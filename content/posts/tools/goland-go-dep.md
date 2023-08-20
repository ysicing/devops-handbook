---
title: "GoLand构建约束排除解决"
date: 2023-05-09T15:35:59+08:00
description: "本文主要介绍如何解决GoLand构建约束排除解决"
authors: ysicing
tags:
- go
- ide
- goland
keywords:
- go
- ide
- goland
url: /tools/goland-go-dep
---

<!-- truncate -->

## 背景

这个问题困扰了我好久，主要是我在家的M1没遇到这类问题，但是在公司的amd64机器上就遇到了，一直没找到原因，今天终于找到了😓, 我还排查了好久包问题呢。

![问题](/images/blog/20230509/goland-go-dep.png)

## 解决

:::tip 简单分析一下,大概如下3种情况

- [x] 检查代码中的约束, 如`// +build linux`
- [x] 检查构建标记, GoLand设置了自定义构建标记
- [ ] GoLand清除缓存

:::

根据背景可以得知, 同一套代码在不同机器上构建结果不一致, 那么问题就出在GoLand上了。

:::tip 很遗憾，不是我解决的，来自GPT的解答

如果您在更改代码或构建选项后遇到问题，可以尝试清除 GoLand 的缓存。在 GoLand 的“文件”菜单中，选择“无效缓存/重新加载”选项，然后选择“清除无效和过期的缓存”并点击“确定”按钮。这将清除 GoLand 的缓存并重新加载项目，有时可以解决构建约束排除的问题

:::

> 在GPT的帮助下, 终于解决了这个问题🙋
