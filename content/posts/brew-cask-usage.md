---
title: "Brew Cask日常使用"
date: 2021-10-19T09:57:40+08:00
description: 记录brew cask使用小技巧

tags:
- macOS
- tools
---

<!-- truncate -->

记录一下, 如何升级brew cask安装的软件。

## 安装cu

```bash
brew tap buo/cask-upgrade
```

## 自动升级


```bash
brew update
brew cu -a
```
