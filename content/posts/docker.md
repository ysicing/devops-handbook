---
title: "懒人版一键快速安装docker(20230317更新)"
date: 2023-03-17T18:34:18+08:00
description: "懒人版一键快速安装docker(20230317更新)"
tags:
- docker
- cri
---

<!-- truncate -->

## 安装并配置

```bash
curl -fsSL https://cos.ysicing.cloud/oss/scripts/docker.sh | bash
curl -fsSL https://cos.ysicing.cloud/oss/scripts/dockerconfig.sh | bash
```

做了如下设置

```json
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "registry-mirrors": ["https://dyucrs4l.mirror.aliyuncs.com"],
  "bip": "169.254.0.1/24",
  "max-concurrent-downloads": 10,
  "log-driver": "json-file",
  "log-level": "warn",
  "log-opts": {
    "max-size": "20m",
    "max-file": "2"
  },
  "storage-driver": "overlay2"
}
```

## 安装tools

```bash
docker run --rm -v /usr/local/bin:/sysdir ysicing/tools tar zxf /pkg.tgz -C /sysdir
```

内置了

```bash
helminit
docker-compose
ctop
cclear (清理退出容器)
din (进入容器 din <cname/>cid> ash/bash(默认)/sh)
dps (容器状态)
upgrade-tools // 升级二进制
```

源码可以参见 [ysicing/tools](https://github.com/ysicing/tools/blob/master/tools/release.sh)
