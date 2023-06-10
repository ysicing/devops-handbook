---
title: Debian 11 Bullseye 升级 Debian 12 Bookworm
description: 本文主要记录Debian 11 Bullseye 升级 Debian 12 Bookworm
date: 2023-06-10T10:55:18+08:00
tags:
- debian
keywords:
- debian
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

> 本文主要记录Debian 11 Bullseye 升级 Debian 12 Bookworm

<!-- truncate -->

### 前提

- 升级前先快照
- 不支持LXC
- Debian 11

### 更新Debian11

:::tip

<details>
<summary>升级前先确定是否为Debian 11</summary>

```bash title="cat /etc/os-release"
root@cn-bj-r1.ysicing.local:~$ cat /etc/os-release
PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
```

</details>

:::

<details>
<summary>更新当前系统到最新版本</summary>

```bash
apt update
apt upgrade -y
apt dist-upgrade -y
apt autoclean
apt autoremove -y
```

</details>

### 更新软件源

- 仅变更 `/etc/apt/sources.list`
- 由于Debian 12及以后的版本，支持分发非自由固件二进制文件（`non-free`），如部分驱动，都被转移到新组件目录: 非自由固件（`non-free-firmware`）

<Tabs
  defaultValue="命令行操作"
  values={[
    {label: '命令行操作', value: '命令行操作'},
    {label: '重写文件', value: '重写文件'},
  ]}>
  <TabItem value="命令行操作" label="命令行操作">

<details>
<summary>操作如下</summary>

```bash
# 替换 bullseye 为 bookworm
sed -i 's/bullseye/bookworm/g' /etc/apt/sources.list
sed -i 's/bullseye/bookworm/g' /etc/apt/sources.list.d/*.list
# 新增 non-free-firmware 可选, 但建议
sed -i 's/non-free/non-free non-free-firmware/g' /etc/apt/sources.list
```

</details>

</TabItem>
<TabItem value="重写文件" label="重写文件">

<details>
<summary>重写/etc/apt/sources.list</summary>

```bash
cat > /etc/apt/sources.list <<EOF
deb http://mirrors.tencent.com/debian/ bookworm main contrib non-free non-free-firmware
deb http://mirrors.tencent.com/debian/ bookworm-updates main contrib non-free non-free-firmware
deb http://mirrors.tencent.com/debian/ bookworm-backports main contrib non-free non-free-firmware
deb http://mirrors.tencent.com/debian/ bookworm-proposed-updates main contrib non-free non-free-firmware
deb http://mirrors.tencent.com/debian-security bookworm-security main contrib non-free non-free-firmware
EOF
```

:::tip 腾讯云内网

```bash
cat > /etc/apt/sources.list <<EOF
deb http://mirrors.tencentyun.com/debian/ bookworm main contrib non-free non-free-firmware
deb http://mirrors.tencentyun.com/debian/ bookworm-updates main contrib non-free non-free-firmware
deb http://mirrors.tencentyun.com/debian/ bookworm-backports main contrib non-free non-free-firmware
deb http://mirrors.tencentyun.com/debian/ bookworm-proposed-updates main contrib non-free non-free-firmware
deb http://mirrors.tencentyun.com/debian-security bookworm-security main contrib non-free non-free-firmware
EOF
```

:::

</details>

</TabItem>
</Tabs>

### 升级系统

完成上述操作后，再次执行更新系统命令

:::note 用Debian都知道的

- 更新过程种会提示一些软件是否需要自动重启，选 Yes 即可，以及一些软件的配置文件是否需要更新，按照自己的情况选择即可，默认回车即视为使用旧的配置文件

- 另外有些软件会提示是否变更配置, 默认选择`keep the local version`即可

:::

```bash
apt update
apt upgrade -y
apt dist-upgrade -y
# 在升级完成没报错后执行，也可以在reboot后执行
apt autoclean
apt autoremove -y

reboot
```

确定查看系统版本

```bash title="cat /etc/debian_version"
root@cn-bj-r1.ysicing.local ~ # cat /etc/debian_version
12.0
```

确定查看系统版本

```bash title="uname -a"
root@cn-bj-r1.ysicing.local:~$ uname -a
Linux cn-bj-r1.ysicing.local 6.1.0-9-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-1 (2023-05-08) x86_64 GNU/Linux
```
