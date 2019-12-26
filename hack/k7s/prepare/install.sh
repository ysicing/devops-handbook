#!/bin/bash

source ../stdlib.sh

run apt-get update

run apt-get install python-pip python-apt nfs-kernel-server -y

[ -f "/root/.ssh/id_rsa.pub" ] && (
	info "exisst /root/.ssh/id_rsa.pub"
) || (
	ssh-keygen  -t  rsa   -P ''   -f  /root/.ssh/id_rsa
)

run cat /root/.ssh/id_rsa.pub >> /root/.ssh/authorized_keys

run pip install -U pip -i https://pypi.tuna.tsinghua.edu.cn/simple

run pip install -i https://pypi.tuna.tsinghua.edu.cn/simple ansible

run ansible-playbook init.yml

info "init nfs dir /k8sdata"

mkdir /k8sdata

echo "/k8sdata/ *(insecure,rw,sync,no_root_squash,no_subtree_check)" > /etc/exports
#echo "/k8sdata/ *(insecure,rw,sync,no_root_squash)" > /etc/exports

systemctl enable rpcbind
systemctl enable nfs-server

systemctl start rpcbind
systemctl start nfs-server

run exportfs -r

run showmount -e 127.0.0.1
