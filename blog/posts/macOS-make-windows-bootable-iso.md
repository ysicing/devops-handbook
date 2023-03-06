---
title: 在macOS上制作win11启动盘
date: 2022-04-18T23:27:49+08:00
description: 在macOS上制作win11启动盘
tags:
- macOS
- windows
---

<!-- truncate -->

> 简单记录一下

## 1. 下载win11镜像

直接从[官网](https://www.microsoft.com/en-us/software-download/windows11)下载就好了, 根据自己的情况选择。

## 2. 准备一个至少8GB的U盘

我准备了一个32G的

## 3. 实操

```bash
# 列出磁盘
diskutil list


/dev/disk4 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     FDisk_partition_scheme                        *31.0 GB    disk4
   1:                 DOS_FAT_32 WIN10                   31.0 GB    disk4s1

# 将U盘格式化为WINDOWS FAT32格式
diskutil eraseDisk MS-DOS "WIN11" GPT /dev/disk4

# 挂载win11镜像
hdiutil mount ~/Downloads/Win11_Chinese\(Simplified\)_x64v1.iso

# 复制镜像到u盘, 忽略install.wim文件，太大单独处理
rsync -vha --exclude=sources/install.wim  /Volumes/CCCOMA_X64FRE_ZH-CN_DV9/* /Volumes/WIN11
# 处理wim文件, 使用 wimlib 将 install.wim 文件拆分为 2 个文件，每个文件最大3.8G
brew install wimlib
wimlib-imagex split /Volumes/CCCOMA_X64FRE_ZH-CN_DV9/sources/install.wim /Volumes/WIN11/sources/install.swm 3800
# 完成，推出
```

## 4. 重装系统

U盘启动即可
