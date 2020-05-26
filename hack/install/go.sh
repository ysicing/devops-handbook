#!/bin/bash

go::install(){
    pushd /tmp
    # 下载
    wget https://dl.google.com/go/go1.14.3.linux-amd64.tar.gz
    # 解压
    tar -C /usr/local -xzf go1.14.3.linux-amd64.tar.gz
    popd 
}

go::config(){
    cat >> /root/.bashrc <<EOF
    export GO111MODULE=on
    export GOPROXY=https://goproxy.cn
    export GOPATH="/root/go"
    export GOBIN="$GOPATH/bin"
    export PATH=$PATH:$GOBIN:/usr/local/go/bin
EOF

    source /root/.bashrc
}

go::test(){
    go env
}

go::install
go::config
go::test