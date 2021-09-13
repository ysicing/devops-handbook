#!/bin/bash

# sed -i 's/buster\/updates/bullseye-security/g;s/buster/bullseye/g' /etc/apt/sources.list
# sed -i 's/stretch\/updates/bullseye-security/g;s/stretch/bullseye/g' /etc/apt/sources.list

MIRRORS=${MIRRORS:-https://mirrors.tuna.tsinghua.edu.cn}

cat > /etc/apt/sources.list <<EOF
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb ${MIRRORS}/debian/ bullseye main contrib non-free
# deb-src ${MIRRORS}/debian/ bullseye main contrib non-free
deb ${MIRRORS}/debian/ bullseye-updates main contrib non-free
# deb-src ${MIRRORS}/debian/ bullseye-updates main contrib non-free

deb ${MIRRORS}/debian/ bullseye-backports main contrib non-free
# deb-src ${MIRRORS}/debian/ bullseye-backports main contrib non-free

deb ${MIRRORS}/debian-security bullseye-security main contrib non-free
# deb-src ${MIRRORS}/debian-security bullseye-security main contrib non-free
EOF

apt update
apt dist-upgrade -y

apt install -t bullseye-backports linux-image-amd64 -y