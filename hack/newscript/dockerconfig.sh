#!/bin/bash

set -e

do_config() {
    [ -d "/etc/docker" ] || mkdir /etc/docker
    cat > /etc/docker/daemon.json <<EOF
{
  "registry-mirrors": ["https://mirror.ccs.tencentyun.com","https://dyucrs4l.mirror.aliyuncs.com"],
  "exec-opts": [
    "native.cgroupdriver=cgroupfs"
  ],
  "bip": "169.254.123.1/24",
  "max-concurrent-downloads": 10,
  "live-restore": true,
  "log-driver": "json-file",
  "log-level": "warn",
  "log-opts": {
    "max-size": "30m",
    "max-file": "3"
  },
  "storage-driver": "overlay2"
}
EOF

    systemctl enable docker
    systemctl daemon-reload
    systemctl start docker
    systemctl restart docker 
    docker info -f "{{json .ServerVersion }}"
    docker pull registry.cn-beijing.aliyuncs.com/k7scn/tools
    docker run --rm -v /usr/local/bin:/sysdir registry.cn-beijing.aliyuncs.com/k7scn/tools tar zxf /pkg.tgz -C /sysdir
    # 腾讯云使用bip有问题 169.254.123.1/24, 请使用172.30.42.1/16
}

do_config