#!/bin/bash

pushd /tmp

wget https://ghproxy.com/https://github.com/containerd/nerdctl/releases/download/v1.4.0/nerdctl-full-1.4.0-linux-amd64.tar.gz
tar Cxzvvf /usr/local nerdctl-full-1.4.0-linux-amd64.tar.gz
rm -rf nerdctl-full-1.4.0-linux-amd64.tar.gz
popd

systemctl enable containerd.service --now

