---
title: "Lima虚拟机初体验二"
date: 2021-09-05T20:16:57+08:00
description: M1 Mac上使用Lima运行Debian虚拟机
tags:
- vm
- debian
- macOS
---

<!-- truncate -->

接上文[Lima虚拟机初体验一](/posts/lima-vm-on-macos/)在M1上玩转Lima

## 快速开始

### M1系统信息

```macOS M1
# brew install m-cli
➜  ~ m info
ProductName:	macOS
ProductVersion:	11.5.2
BuildVersion:	20G95
```

### m1 patch 

```
# 安装构建依赖
brew update
brew install libffi gettext glib pkg-config autoconf automake pixman ninja
# 下载源码
git clone https://github.com/qemu/qemu
cd qemu
git checkout 3c93dfa42c394fdd55684f2fbf24cf2f39b97d47
curl https://patchwork.kernel.org/series/485309/mbox/ | git am
# build
mkdir build && cd build
../configure --target-list=aarch64-softmmu --enable-hvf --disable-gnutls
make -j8 
# 安装
sudo make install
```

注意一点:

> 可能通过brew安装的qemu，会识别默认该路径下的`/opt/homebrew/bin/qemu-system-aarch64`, 而patch生成的则在`/usr/local/bin/qemu-system-aarch64`。

```
rm /opt/homebrew/bin/qemu-system-aarch64
```

### 测试patch

```bash
wget https://mirrors.tuna.tsinghua.edu.cn/debian-cd/current/arm64/iso-cd/debian-11.0.0-arm64-netinst.iso

qemu-img create -f qcow2 virtual-disk.qcow2 8G

cp $(dirname $(which qemu-img))/../share/qemu/edk2-aarch64-code.fd .

dd if=/dev/zero conv=sync bs=1m count=64 of=ovmf_vars.fd

/usr/local/bin/qemu-system-aarch64 \
  -machine virt,accel=hvf,highmem=off \
  -cpu cortex-a72 -smp 4 -m 4G \
  -device virtio-gpu-pci \
  -device virtio-keyboard-pci \
  -drive "format=raw,file=edk2-aarch64-code.fd,if=pflash,readonly=on" \
  -drive "format=raw,file=ovmf_vars.fd,if=pflash" \
  -drive "format=qcow2,file=virtual-disk.qcow2" \
  -cdrom debian-11.0.0-arm64-netinst.iso
```

成功启动虚拟机表示patch成功了，可以通过lima启动管理虚拟机了

### 安装Lima并启动

安装lima

```bash
brew install lima
```

启动lima

```bash
# 下载专用debian配置
wget https://sh.ysicing.me/lima/debian.yml
# 启动debian虚拟机
limactl start ./debian.yml
```

## 附录阅读

- [Github - Create Virtual Machines using QEMU on Silicon based Apple Macs](https://gist.github.com/nrjdalal/e70249bb5d2e9d844cc203fd11f74c55)
- [Github - Running Linux and Windows on M1 with QEMU](https://gist.github.com/citruz/9896cd6fb63288ac95f81716756cb9aa#gistcomment-3629192)
