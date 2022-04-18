---
title: "minipc折腾安装pve"
date: 2022-04-18T23:27:49+08:00
description: 在minipc上折腾安装pve
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocFolding: false
tocPosition: inner
tocLevels: ["h2", "h3", "h4"]
tags:
- pve
- debian
- minipc
series:
-
categories:
- pve
image:
---

## 准备工作

- USB移动存储设备
- PVE镜像
- MacOS M1
- MiniPC

### 下载pve镜像

[官网](https://www.proxmox.com/en/downloads/category/iso-images-pve)

等待下载完成,将iso文件转为dmg文件

```bash
hdiutil convert -format UDRW -o proxmox-ve_7.1-2.dmg  proxmox-ve_7.1-2.iso
```

### 制作启动盘

> 在macos上制作PVE启动盘

```bash
# u盘已插入, 确定分配的设备名(盘符)，我这里是disk5
➜  ~ diskutil list

/dev/disk5 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     FDisk_partition_scheme                        *31.0 GB    disk5
   1:               Windows_NTFS U盘装机大师             29.9 GB    disk5s1
   2:             Windows_FAT_32 UDSEFI                  1.1 GB     disk5s2

# 移除disk5上的卷宗,取消挂载
➜  ~ diskutil unmountDisk /dev/disk5
Unmount of all volumes on disk5 was successful

# dd
sudo dd if=/Users/ysicing/hack/iso/proxmox-ve_7.1-2.dmg of=/dev/rdisk5 bs=1m
```

等待dd完成, 就烧录好了pve启动盘，等待minipc了。

## 安装pve

debian系安装都比较简单，参考我在轻量上的操作步骤 [腾讯云Lighthouse上海Debian11安装Proxmox VE](/posts/lighthouse-pve/)