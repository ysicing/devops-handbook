#!/bin/bash

curl -fsSL https://get.docker.com | bash -s docker --mirror AzureChinaCloud

cat > /etc/docker/daemon.json <<EOF
{
  "registry-mirrors": ["https://dockerhub.azk8s.cn","https://reg-mirror.qiniu.com"],
  "bip": "172.30.42.1/16",
  "max-concurrent-downloads": 10,
  "log-driver": "json-file",
  "log-level": "warn",
  "log-opts": {
    "max-size": "20m",
    "max-file": "2"
  },
  "storage-driver": "overlay2"
}
EOF

systemctl enable docker
systemctl daemon-reload
systemctl start docker
systemctl restart docker 

docker info -f "{{json .ServerVersion }}"

docker run --rm -v /usr/local/bin:/sysdir ysicing/tools tar zxf /pkg.tgz -C /sysdir
