---
title: "如何在线重装Debian11"
date: 2020-05-22T22:55:18+08:00
description: "介绍如何给云服务商提供的机器在线重装Debian，以轻量云为例"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- debian
series:
-
categories: 
- debian
image: images/debian/Debian_logo.png
---

## 1. 背景

- 云服务商提供的机器可能安装了一些服务组件，如监控等等，想要一个干净的环境。
- 一条命令快速重装干净的Linux环境
- 目前仅支持Debian(不会不打算支持其他系统)
- 基于萌咖大佬的二次魔改

## 2. 定制

- 默认root密码 vagrant(安装完成建议修改，禁止密码登录)
- 默认配置源为`mirrors.tuna.tsinghua.edu.cn`,默认添加了`security`,`backports`
- 默认时区为`Asia/Shanghai`
- 默认安装了`curl wget openssh-server sudo sed apt-transport-https net-tools`等常用工具
- 同时默认支持自定义密码

## 3. 安装

```bash
curl -sSL https://sh.ysicing.me/reinstall/install.sh | bash
# 指定参数
# -p 默认密码vagrant
# -m 默认源aliyun
bash <(wget --no-check-certificate -qO- 'https://sh.ysicing.me/reinstall/install.sh') -p thah6oob7KieChie
```

### 3.1 特殊: 自定义硬盘

> 存在多个硬盘时，需要下载 [`https://sh.ysicing.me/reinstall/install-sdev.sh`](https://sh.ysicing.me/reinstall/install-sdev.sh)文件，编辑如下部分即可

```bash
# -p 默认密码vagrant
# -m 默认源aliyun
# -s 指定启动硬盘
bash <(wget --no-check-certificate -qO- 'https://sh.ysicing.me/reinstall/install-sdev.sh') -p thah6oob7KieChie -s /dev/sdb
```

## 4. 参考附录

[[ Linux VPS ] Debian/Ubuntu/CentOS 网络安装/重装系统/纯净安装 一键脚本](https://moeclub.org/2018/04/03/603/?spm=ysicing.me)