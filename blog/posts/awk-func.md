---
title: "awk 中关于多个$的用法"
date: 2019-12-18T22:55:18+08:00
description: "awk 中关于多个$的用法"
tags:
- shell
---

<!-- truncate -->

> 上周有遇到过这个问题 `awk '{print $$1}'` 这个$$是什么用法呢

间接字段寻址,其类似

```
awk '{print $$1}' ===> awk '{print $($1)}' ===> awk '{Nr=$1; print $Nr}'
```

示例:

```
$ echo -e "1 b c d\n2 b c d\n3 b c d\n4 b c d" 
1 b c d
2 b c d
3 b c d
4 b c d

$ echo -e "1 b c d\n2 b c d\n3 b c d\n4 b c d" | awk '{print $$1}'
1  # since filed #1=1 result print first field
b  # since filed #1=2 result print secondfield
c  # since filed #1=3 result print third field
d  # since filed #1=4 result print fourth field
```

类似$可以根据需要添加更多

```
awk '{print $$$1}' ===>  awk '{print $$($1)}' ===> awk '{print $($($1))}'
```
