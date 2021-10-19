---
title: "Brew Cask日常使用"
date: 2021-10-19T09:57:40+08:00
description: 记录brew cask使用小技巧
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocFolding: false
tocPosition: inner
tocLevels: ["h2", "h3", "h4"]
tags:
- macOS
series:
-
categories:
- macOS
- 工具集
image:
---

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