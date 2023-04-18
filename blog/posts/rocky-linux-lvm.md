---
title: "Rocky9根目录存储容量调整"
date: 2023-04-18T15:59:59+08:00
description: "本文主要介绍如何在Rocky9调整根目录存储容量"
tags:
- linux
- rocky
- lvm
- 运维
keywords:
- linux
- rocky
- lvm
- 运维
---

简单记录一下Rocky9调整根分区大小.

<!-- truncate -->

## 背景

Rocky9默认安装的时候, 根目录只有70G, 有点小了，而且/home基本用不上, 所以需要调整一下.

```bash title="查看根目录容量df -h"
[root@localhost ~]# df -h
Filesystem           Size  Used Avail Use% Mounted on
devtmpfs             4.0M     0  4.0M   0% /dev
tmpfs                 16G     0   16G   0% /dev/shm
tmpfs                6.2G   19M  6.2G   1% /run
/dev/mapper/rl-root   70G  4.3G   66G   7% /
/dev/mapper/rl-home  867G  6.1G  861G   1% /home
/dev/nvme0n1p2      1014M  283M  732M  28% /boot
/dev/nvme0n1p1       599M  7.0M  592M   2% /boot/efi
tmpfs                3.1G   96K  3.1G   1% /run/user/987
tmpfs                3.1G   36K  3.1G   1% /run/user/0
```

## 操作

Rocky9默认使用的是LVM, 且基于xfs文件系统

### 备份/home(可选)

:::note 可跳过，我的系统是空系统，默认不备份了

<details>

<summary>xfsdump -f /home.bak /home</summary>

```bash title="操作"
xfsdump -f /home.bak /home
xfsdump: using file dump (drive_simple) strategy
xfsdump: version 3.1.10 (dump format 3.0) - type ^C for status and control

 ============================= dump label dialog ==============================

please enter label for this dump session (timeout in 300 sec)
 -> home
session label entered: "home"

 --------------------------------- end dialog ---------------------------------

xfsdump: level 0 dump of q-7-206.quickon.me:/home
xfsdump: dump date: Tue Apr 18 04:01:01 2023
xfsdump: session id: b1ae3c16-70ee-4634-9ac2-b4a1a9429498
xfsdump: session label: "home"
xfsdump: ino map phase 1: constructing initial dump list
xfsdump: ino map phase 2: skipping (no pruning necessary)
xfsdump: ino map phase 3: skipping (only one dump stream)
xfsdump: ino map construction complete
xfsdump: estimated dump size: 20800 bytes

 ============================= media label dialog =============================

please enter label for media in drive 0 (timeout in 300 sec)
 -> home
media label entered: "home"

 --------------------------------- end dialog ---------------------------------

xfsdump: creating dump session media file 0 (media 0, file 0)
xfsdump: dumping ino map
xfsdump: dumping directories
xfsdump: dumping non-directory files
xfsdump: ending media file
xfsdump: media file size 21352 bytes
xfsdump: dump size (non-dir files) : 0 bytes
xfsdump: dump complete: 15 seconds elapsed
xfsdump: Dump Summary:
xfsdump:   stream 0 /home.bak OK (success)
xfsdump: Dump Status: SUCCESS
```
</details>

:::

### 卸载/home

```bash
umount /home
```

### 缩容/home逻辑卷

```bash title="减少/home挂载点对应的逻辑卷大小"
lvreduce -L 50G /dev/mapper/rl-home
```

### 扩容/逻辑卷

```bash
lvextend -l +100%FREE /dev/rl/root
```

:::tip 参数

- `—L`: 指定逻辑卷的大小，单位为MmGgTt
- `-l`: 指定逻辑卷的大小(LE数)

- `-l +100%FREE`: 将卷组中的空闲空间全部分配给当前逻辑卷

:::

### 执行扩容生效

```bash
xfs_growfs /dev/rl/root
```

### 重新挂载/home

```bash
mkfs.xfs -f /dev/mapper/rl-home
mount /home
```

### 恢复(可选)

:::note 可选

```bash
xfsrestore -f /home.bak /home
```

:::

### 验证

```bash
[root@localhost ~]# df -h
Filesystem           Size  Used Avail Use% Mounted on
devtmpfs             4.0M     0  4.0M   0% /dev
tmpfs                 16G     0   16G   0% /dev/shm
tmpfs                6.2G   15M  6.2G   1% /run
/dev/mapper/rl-root  887G   11G  877G   2% /
/dev/nvme0n1p2      1014M  356M  659M  36% /boot
/dev/nvme0n1p1       599M  7.0M  592M   2% /boot/efi
tmpfs                3.1G  100K  3.1G   1% /run/user/987
tmpfs                3.1G   36K  3.1G   1% /run/user/0
/dev/mapper/rl-home   50G  390M   50G   1% /home
```
