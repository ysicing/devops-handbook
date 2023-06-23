---
title: "Docker配置默认网桥ip地址"
date: 2019-09-13T18:24:06+08:00
description: 本文主要记录docker配置默认网络ip段
tags:
- docker
- cri
---

<!-- truncate -->

> 记录一下

## 修改docker默认桥接网络ip段

```bash
cat > /etc/docker/daemon.json <<EOF
{
  "registry-mirrors": ["https://dyucrs4l.mirror.aliyuncs.com"],
  "bip": "169.254.0.1/24",
  "max-concurrent-downloads": 10,
  "log-driver": "json-file",
  "log-level": "warn",
  "log-opts": {
    "max-size": "20m",
    "max-file": "2"
  },
  "default-address-pools": [
    {
      "base": "100.250.0.0/16",
      "size": 24
    }
  ],
  "storage-driver": "overlay2"
}
EOF
```

重启docker

```bash
systemctl restart docker
```

参考文档 [dockerd](https://docs.docker.com/engine/reference/commandline/dockerd/)

