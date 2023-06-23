---
title: "minipc折腾安装pve"
date: 2022-04-18T23:27:49+08:00
description: 在minipc上折腾安装pve
tags:
- pve
- debian
- minipc
---

<!-- truncate -->

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

## 配置无线网卡

> 默认源啥的都改了哦

```bash
apt full-upgrade
mv /usr/share/proxmox-ve/pve-apt-hook /usr/share/proxmox-ve/pve-apt-hook.old
echo "exit 0" > /usr/share/proxmox-ve/pve-apt-hook
chmod +x /usr/share/proxmox-ve/pve-apt-hook
# 安装网卡相关工具包
apt install -y firmware-iwlwifi wireless-tools wpasupplicant
# 安装其他工具
apt install -y net-tools
# 查看网卡型号
➜  ~  lsmod | grep iw
iwlmvm                421888  0
mac80211             1015808  1 iwlmvm
iwlwifi               376832  1 iwlmvm
cfg80211              888832  3 iwlmvm,iwlwifi,mac80211
iw_cm                  49152  1 rdma_cm
ib_core               360448  4 rdma_cm,iw_cm,ib_iser,ib_cm
# 查看网卡信息 
➜  ~ iwconfig
lo        no wireless extensions.

enp3s0    no wireless extensions.

wlp1s0    IEEE 802.11  ESSID:off/any
          Mode:Managed  Access Point: Not-Associated   Tx-Power=-2147483648 dBm
          Retry short limit:7   RTS thr:off   Fragment thr:off
          Encryption key:off
          Power Management:on

vmbr0     no wireless extensions.
# 启用网卡
ifconfig wlp1s0 up 或 ifup wlp1s0
# 扫描wifi
iwlist wlp1s0 scan
# 选择wifi,生成配置
wpa_passphrase <wifi> <password> > /etc/wpa_supplicant/wlp1s0.conf
# 编辑网卡 /etc/network/interfaces, 新增
allow-hotplug wlp1s0
iface wlp1s0 inet dhcp
  wpa-conf /etc/wpa_supplicant/wlp1s0.conf

# 重启网络
systemctl restart networking.service

# 查看ip r, 查看已分配ip了，完成。
```

### 其他

> 失败可参考，本人未遇到问题，故没有测试如下命令。

```bash
killall -9 wpa_supplicant
ifconfig wlan0 down
iwconfig wlan0 mode Managed
ifconfig wlan0 up
wpa_supplicant -B -dwext -iwlan0 -c /etc/wpa_supplicant/wireless.conf -dd
```
