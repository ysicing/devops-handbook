---
title: CTM, 我都服了上海电信
date: 2023-04-18T00:00:00+08:00
description: 我都服了上海电信
tags:
- site
keywords:
- site
- 中国电信
---

如题.

<!-- truncate -->

```bash
# ~/.ssh/config 新增如下改善一下
Host github.com
 ProxyCommand nc -v -x 127.0.0.1:7890 %h %p
```
