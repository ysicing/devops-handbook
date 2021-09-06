---
title: "Lima虚拟机初体验二"
date: 2021-09-05T20:16:57+08:00
description: M1 Mac上使用Lima运行Debian虚拟机
draft: true
hideToc: false
enableToc: true
enableTocContent: false
tocFolding: false
tocPosition: inner
tocLevels: ["h2", "h3", "h4"]
tags:
- vm
- debian
- macOS
series:
-
categories:
- macOS
image:
---

接上文[Lima虚拟机初体验一](/posts/lima-vm-on-macos/)在M1上玩转Lima

## 快速开始

#### M1系统信息

```macOS M1
# brew install m-cli
➜  ~ m info
ProductName:	macOS
ProductVersion:	11.5.2
BuildVersion:	20G95
```

#### 安装Lima

```bash
brew install lima
```

#### patch 



```
INFO[0066] [hostagent] time="2021-09-06T21:37:53+08:00" level=fatal msg="accelerator \"hvf\" is not supported by /opt/homebrew/bin/qemu-system-aarch64 ( Hint: as of August 2021, qemu-system-aarch64 on ARM Mac needs to be patched for enabling hvf accelerator, see https://gist.github.com/nrjdalal/e70249bb5d2e9d844cc203fd11f74c55 )"
```

一键patch

```bash
zsh -c "$(curl -fsSL https://raw.githubusercontent.com/nrjdalal/silicon-virtualizer/master/install-qemu.sh)"
```

#### 启动lima

```bash
# 下载专用debian配置
wget https://sh.ysicing.me/lima/debian.yml
# 启动debian虚拟机
limactl start ./debian.yml
```