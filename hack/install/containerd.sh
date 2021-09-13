#!/bin/bash

command_exists() {
	command -v "$@" > /dev/null 2>&1
}

systemd_exists() {
    systemctl status "$@" > /dev/null 2>&1
}

do_precheck() {
    [ -f "/etc/systemd/system/containerd.service" ] && exit 0
    command_exists docker && exit 0
    command_exists docker && exit 0
}

do_dl() {
    tmpidr=$(mktemp -d)

    pushd $tmpidr

    wget https://github.com/containerd/containerd/releases/download/v1.5.5/cri-containerd-cni-1.5.5-linux-amd64.tar.gz

    tar -C / -xzf cri-containerd-cni-1.5.5-linux-amd64.tar.gz

    popd

    rm -rf $tmpidr
}

do_install() {

}

do_precheck
do_install