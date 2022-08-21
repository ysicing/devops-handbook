---
title: "Lima虚拟机初体验一"
date: 2021-09-05T10:16:57+08:00
description: Intel Mac上使用Lima运行Debian虚拟机

tags:
- vm
- debian
- macOS
---

<!-- truncate -->

## 什么是Lima

> Linux virtual machines on macOS

即专注于在macOS上支持文件共享、端口转发和使用 containerd 的 Linux 虚拟机, 其诞生的初衷是推广在macOS上使用`containerd`和`nerdctl`

#### 功能

- 支持自动文件共享
- 支持端口转发
- 内置支持`containerd`
- 基于QEMU支持 `Intel on Intel`, `ARM on Intel`, `ARM on ARM`, `Intel on ARM`
- 支持Linux发行版常见都可以,如`Debian`

## 快速开始

#### 安装

```bash
# Intel Mac
brew install lima
```

#### Debian自定义配置

生成debian配置

```yaml
cat > ./debian.yml<<EOF
arch: "default"
images:
  - location: "~/hack/iso/debian-11-generic-amd64-20210814-734.qcow2"
    arch: "x86_64"
  - location: "https://cloud.debian.org/images/cloud/bullseye/20210814-734/debian-11-generic-amd64-20210814-734.qcow2"
    arch: "x86_64"
cpus: 2
memory: "4GiB"
disk: "100GiB"
mounts:
  - location: "~"
    writable: false
  - location: "/tmp/lima"
    writable: true
ssh:
  localPort: 60024
provision:
  - mode: system
    script: |
      #!/bin/bash
      echo "/usr/local/bin/nerdctl \$@" > /usr/local/bin/docker
      chmod +x /usr/local/bin/docker
  - mode: system
    script: |
      #!/bin/bash
      nerdctl run --rm -v /usr/local/bin:/sysdir registry.cn-beijing.aliyuncs.com/k7scn/tools tar zxf /pkg.tgz -C /sysdir
probes:
- script: |
    #!/bin/bash
    set -eux -o pipefail
    if ! timeout 120s bash -c "until test -f /usr/local/bin/dps; do sleep 3; done"; then
            echo >&2 "tools is not installed yet"
            exit 0
    fi
EOF
```

或者

```bash
wget https://sh.ysicing.me/lima/debian.yml
```

#### 启动lima虚拟机

```bash
limactl start ./debian.yml

? Creating an instance "debian"  [Use arrows to move, type to filter]
> Proceed with the default configuration
  Open an editor to override the configuration
  Exit

? Creating an instance "debian" Proceed with the default configuration
INFO[0000] Downloading "https://github.com/containerd/nerdctl/releases/download/v0.11.1/nerdctl-full-0.11.1-linux-amd64.tar.gz" (sha256:ce7a6e119b03c3fb8ded3d46d929962fd17417bea1d5bbc07e0fce49494d8a09)
INFO[0000] Using cache "/Users/ysicing/Library/Caches/lima/download/by-url-sha256/3304d173f1e1824e5be6cf84bf2f78825cf0db416c4c975dbb2458776942629e/data"
INFO[0001] Attempting to download the image from "~/hack/iso/debian-11-generic-amd64-20210814-734.qcow2"
INFO[0002] Downloaded image from "~/hack/iso/debian-11-generic-amd64-20210814-734.qcow2"
INFO[0002] [hostagent] Starting QEMU (hint: to watch the boot progress, see "/Users/ysicing/.lima/debian/serial.log")
INFO[0002] SSH Local Port: 60024
INFO[0002] [hostagent] Waiting for the essential requirement 1 of 4: "ssh"
INFO[0020] [hostagent] The essential requirement 1 of 4 is satisfied
INFO[0020] [hostagent] Waiting for the essential requirement 2 of 4: "sshfs binary to be installed"
INFO[0029] [hostagent] The essential requirement 2 of 4 is satisfied
INFO[0029] [hostagent] Waiting for the essential requirement 3 of 4: "/etc/fuse.conf to contain \"user_allow_other\""
INFO[0044] [hostagent] The essential requirement 3 of 4 is satisfied
INFO[0044] [hostagent] Waiting for the essential requirement 4 of 4: "the guest agent to be running"
INFO[0044] [hostagent] The essential requirement 4 of 4 is satisfied
INFO[0044] [hostagent] Mounting "/Users/ysicing"
INFO[0044] [hostagent] Mounting "/tmp/lima"
INFO[0045] [hostagent] Waiting for the optional requirement 1 of 2: "systemd must be available"
INFO[0045] [hostagent] Forwarding "/run/user/501/lima-guestagent.sock" (guest) to "/Users/ysicing/.lima/debian/ga.sock" (host)
INFO[0045] [hostagent] The optional requirement 1 of 2 is satisfied
INFO[0045] [hostagent] Waiting for the optional requirement 2 of 2: "containerd binaries to be installed"
INFO[0045] [hostagent] Not forwarding TCP [::]:22
INFO[0045] [hostagent] Not forwarding TCP 0.0.0.0:22
INFO[0045] [hostagent] The optional requirement 2 of 2 is satisfied
INFO[0045] READY. Run `limactl shell debian` to open the shell.
```

如果过程失败了, 请检查yaml中的端口配置 `ssh.localPort`, 较大概率是端口冲突了
如果提示`READY`, 则表示虚拟机已经ok

```bash
08:08 ➜  hack limactl shell debian
debian
ysicing@lima-debian:/Users/ysicing/hack$
```

```bash
limactl shell debian uname -a
Linux lima-debian 5.10.0-8-amd64 #1 SMP Debian 5.10.46-4 (2021-08-03) x86_64 GNU/Linux
```

## 容器使用

> 定制后的配置，可以无缝使用docker命令

#### 运行容器

```bash
# 类似docker run
limactl shell debian nerdctl run -d --name nginx -p 127.0.0.1:8080:80 nginx:alpine
# 类型docker ps
limactl shell debian nerdctl ps                                                    
CONTAINER ID    IMAGE                             COMMAND                   CREATED           STATUS    PORTS                     NAMES
8b877fa8e942    docker.io/library/nginx:alpine    "/docker-entrypoint.…"    10 seconds ago    Up        127.0.0.1:8080->80/tcp    nginx
```

或者

```
limactl shell debian docker run -d --name nginx -p 127.0.0.1:8080:80 nginx:alpine
limactl shell debian docker ps                                                    
CONTAINER ID    IMAGE                             COMMAND                   CREATED           STATUS    PORTS                     NAMES
8b877fa8e942    docker.io/library/nginx:alpine    "/docker-entrypoint.…"    10 seconds ago    Up        127.0.0.1:8080->80/tcp    nginx
limactl shell debian dps                                                
CONTAINER ID    IMAGE                             COMMAND                   CREATED           STATUS    PORTS                     NAMES
8b877fa8e942    docker.io/library/nginx:alpine    "/docker-entrypoint.…"    10 seconds ago    Up        127.0.0.1:8080->80/tcp    nginx
```

浏览器访问http://127.0.0.1:8080显示nginx默认静态页

## 其他

1. 使用root用户

```
sudo password root
su root
```

## 附录

#### 配置说明

lima默认配置, 默认在当前用户`~/.lima/default/lima.yaml`

```yaml
# /Users/ysicing/.lima/default/lima.yaml
# ===================================================================== #
# BASIC CONFIGURATION
# ===================================================================== #

# Arch: "default", "x86_64", "aarch64".
# "default" corresponds to the host architecture.
arch: "default"

# An image must support systemd and cloud-init.
# Ubuntu and Fedora are known to work.
# Default: none (must be specified)
images:
  # Try to use a local image first.
  - location: "~/Downloads/hirsute-server-cloudimg-amd64.img"
    arch: "x86_64"
  - location: "~/Downloads/hirsute-server-cloudimg-arm64.img"
    arch: "aarch64"

  # Download the file from the internet when the local file is missing.
  # Hint: run `limactl prune` to invalidate the "current" cache
  - location: "https://cloud-images.ubuntu.com/hirsute/current/hirsute-server-cloudimg-amd64.img"
    arch: "x86_64"
  - location: "https://cloud-images.ubuntu.com/hirsute/current/hirsute-server-cloudimg-arm64.img"
    arch: "aarch64"

# CPUs: if you see performance issues, try limiting cpus to 1.
# Default: 4
cpus: 2

# Memory size
# Default: "4GiB"
memory: "4GiB"

# Disk size
# Default: "100GiB"
disk: "100GiB"

# Expose host directories to the guest
# Default: none
mounts:
  - location: "~"
    # CAUTION: `writable` SHOULD be false for the home directory.
    # Setting `writable` to true is possible, but untested and dangerous.
    writable: false
  - location: "/tmp/lima"
    writable: true

ssh:
  # A localhost port of the host. Forwarded to port 22 of the guest.
  # Currently, this port number has to be specified manually.
  # Default: none
  localPort: 60022
  # Load ~/.ssh/*.pub in addition to $LIMA_HOME/_config/user.pub .
  # This option is useful when you want to use other SSH-based
  # applications such as rsync with the Lima instance.
  # If you have an insecure key under ~/.ssh, do not use this option.
  # Default: true
  loadDotSSHPubKeys: true

# ===================================================================== #
# ADVANCED CONFIGURATION
# ===================================================================== #

containerd:
  # Enable system-wide (aka rootful)  containerd and its dependencies (BuildKit, Stargz Snapshotter)
  # Default: false
  system: false
  # Enable user-scoped (aka rootless) containerd and its dependencies
  # Default: true
  user: true

# Provisioning scripts need to be idempotent because they might be called
# multiple times, e.g. when the host VM is being restarted.
# provision:
#   # `system` is executed with the root privilege
#   - mode: system
#     script: |
#       #!/bin/bash
#       set -eux -o pipefail
#       export DEBIAN_FRONTEND=noninteractive
#       apt-get install -y vim
#   # `user` is executed without the root privilege
#   - mode: user
#     script: |
#       #!/bin/bash
#       set -eux -o pipefail
#       cat <<EOF > ~/.vimrc
#       set number
#       EOF

# probes:
#  # Only `readiness` probes are supported right now.
#  - mode: readiness
#    description: vim to be installed
#    script: |
#       #!/bin/bash
#       set -eux -o pipefail
#       if ! timeout 30s bash -c "until command -v vim; do sleep 3; done"; then
#         echo >&2 "vim is not installed yet"
#         exit 1
#       fi
#    hint: |
#      vim was not installed in the guest. Make sure the package system is working correctly.
#      Also see "/var/log/cloud-init-output.log" in the guest.

# ===================================================================== #
# FURTHER ADVANCED CONFIGURATION
# ===================================================================== #

firmware:
  # Use legacy BIOS instead of UEFI.
  # Default: false
  legacyBIOS: false

video:
  # QEMU display, e.g., "none", "cocoa", "sdl".
  # As of QEMU v5.2, enabling this is known to have negative impact
  # on performance on macOS hosts: https://gitlab.com/qemu-project/qemu/-/issues/334
  # Default: "none"
  display: "none"

network:
  # The instance can get routable IP addresses from the vmnet framework using
  # https://github.com/lima-vm/vde_vmnet. Both vde_switch and vde_vmnet
  # daemons must be running before the instance is started. The interface type
  # (host, shared, or bridged) is configured in vde_vmnet and not lima.
  vde:
    # vnl (virtual network locator) points to the vde_switch socket directory,
    # optionally with vde:// prefix
    # - vnl: "vde:///var/run/vde.ctl"
    #   # VDE Switch port number (not TCP/UDP port number). Set to 65535 for PTP mode.
    #   # Default: 0
    #   switchPort: 0
    #   # MAC address of the instance; lima will pick one based on the instance name,
    #   # so DHCP assigned ip addresses should remain constant over instance restarts.
    #   macAddress: ""
    #   # Interface name, defaults to "vde0", "vde1", etc.
    #   name: ""

# Port forwarding rules. Forwarding between ports 22 and ssh.localPort cannot be overridden.
# Rules are checked sequentially until the first one matches.
# portForwards:
#   - guestPort: 443
#     hostIP: "0.0.0.0" # overrides the default value "127.0.0.1"; allows privileged port forwarding
#   # default: hostPort: 443 (same as guestPort)
#   # default: guestIP: "127.0.0.1" (also matches bind addresses "0.0.0.0", "::", and "::1")
#   # default: proto: "tcp" (only valid value right now)
#   - guestPortRange: [4000, 4999]
#     hostIP:  "0.0.0.0" # overrides the default value "127.0.0.1"
#   # default: hostPortRange: [4000, 4999] (must specify same number of ports as guestPortRange)
#   - guestPort: 80
#     hostPort: 8080 # overrides the default value 80
#   - guestIP: "127.0.0.2" # overrides the default value "127.0.0.1"
#     hostIP: "127.0.0.2" # overrides the default value "127.0.0.1"
#   # default: guestPortRange: [1024, 65535]
#   # default: hostPortRange: [1024, 65535]
#   - guestPort: 8888
#     ignore: true (don't forward this port)
#   # Lima internally appends this fallback rule at the end:
#   - guestIP: "127.0.0.1"
#     guestPortRange: [1024, 65535]
#     hostIP: "127.0.0.1"
#     hostPortRange: [1024, 65535]
#   # Any port still not matched by a rule will not be forwarded (ignored)
```
