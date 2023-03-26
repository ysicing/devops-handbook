---
title: 轻量云debian挂载数据盘
description: 本文主要记录本人在Debian挂载硬盘
date: 2023-01-29T16:55:18+08:00
tags:
- debian
- 轻量云
- qcloud
- lighthouse
keywords:
- lighthouse
- debian
- 轻量云
- qcloud
---

<!-- truncate -->

> 以腾讯云轻量示例

:::info
默认在控制台已经挂载
:::

## 操作

```bash
# 查看磁盘名称, 有两块一个是系统盘，一个是数据盘
> fdisk -l
Disk /dev/vda: 40 GiB, 42949672960 bytes, 83886080 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xbcfcb5cb

Device     Boot Start      End  Sectors Size Id Type
/dev/vda1  *     2048 83886046 83883999  40G 83 Linux


Disk /dev/vdb: 100 GiB, 107374182400 bytes, 209715200 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

# 格式化ext4
mkfs -t ext4 /dev/vdb
mke2fs 1.46.2 (28-Feb-2021)
Creating filesystem with 26214400 4k blocks and 6553600 inodes
Filesystem UUID: 5430aae0-55fa-4695-b8c9-7989035663f3
Superblock backups stored on blocks:
	32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
	4096000, 7962624, 11239424, 20480000, 23887872

Allocating group tables: done
Writing inode tables: done
Creating journal (131072 blocks):
done
Writing superblocks and filesystem accounting information: done

# 临时挂载
mount /dev/vdb /data
# 验证
df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            965M     0  965M   0% /dev
tmpfs           199M  448K  198M   1% /run
/dev/vda1        40G  2.5G   36G   7% /
tmpfs           991M   24K  991M   1% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           199M     0  199M   0% /run/user/0
/dev/vdb         98G   24K   93G   1% /data
```

:::info
用`fdisk`进行分区挂载也可以哈，也比较简单`fdisk /dev/vdb`按步骤来即可
:::

## 设置开机挂载

:::info

将挂载信息添加到`fstab`里即可, 操作前先备份

```bash
cp -r /etc/fstab /etc/fstab.20220927
```

:::

### UUID方式(常见)

```bash
# 查看ID
blkid /dev/vdb
/dev/vdb: UUID="5430aae0-55fa-4695-b8c9-7989035663f3" BLOCK_SIZE="4096" TYPE="ext4"
# fstab新增
UUID=5430aae0-55fa-4695-b8c9-7989035663f3 /data ext4 defaults 0 0
```

### 云硬盘(轻量推荐)

```bash
# 查看ID
ls /dev/disk/by-id/virtio-disk-*
# fstab新增
/dev/disk/by-id/virtio-disk-<ID> /data ext4 defaults 0 0
```
