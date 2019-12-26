#!/bin/bash

source ../stdlib.sh

progress "check docker"

if command_exists docker && [ -e /var/run/docker.sock ]; then
    (
        docker_version="$(docker -v | cut -d ' ' -f3 | cut -d ',' -f1)"
        info "docker installed version" ${docker_version}
    ) || true
else
    run apt update && apt install apt-transport-https ca-certificates curl software-properties-common -y
    run curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/$lsb_dist/gpg | apt-key add -qq - 
    echo "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/debian stretch edge" > /etc/apt/sources.list.d/docker.list
    run apt update  -qq >/dev/null

    progress "install docker"

    run apt update && apt install docker-ce -y
    run docker run --rm -v /usr/local/bin:/sysdir ysicing/tools tar zxf /pkg.tgz -C /sysdir
fi

if [ ! -f "/etc/docker/daemon.json" ]; then

    progress "Setup daemon"

    cat > /etc/docker/daemon.json <<EOF
{
  "exec-opts": ["native.cgroupdriver=cgroupfs"],
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

fi

if [ ! -z "$HTTP_PROXY_LOCAL" ]; then
    progress "write docker proxy"
    mkdir -pv /etc/systemd/system/docker.service.d
    cat > /etc/systemd/system/docker.service.d/http-proxy.conf <<EOF
[Service]
Environment="HTTP_PROXY=$HTTP_PROXY_LOCAL" "HTTPS_PROXY=$HTTP_PROXY_LOCAL" "NO_PROXY=localhost,127.0.0.1,10.0.0.0/8,192.168.0.0/16,172.16.0.0/12"
EOF

fi

progress "restart docker"

run systemctl daemon-reload && systemctl restart docker

modprobe overlay
modprobe br_netfilter

[ ! -f "/etc/sysctl.d/99-kubernetes-cri.conf" ] && (
    cat > /etc/sysctl.d/99-kubernetes-cri.conf <<EOF
net.bridge.bridge-nf-call-iptables  = 1
net.ipv4.ip_forward                 = 1
net.bridge.bridge-nf-call-ip6tables = 1
EOF

    run sysctl --system
)

progress "check k8s"

if command_exists kubelet && [ -e /etc/default/kubelet ]; then
    (
        k8s_version="$(kubeadm version -o short)"
        info "k8s installed version" ${k8s_version}
    ) || true
else
    run curl https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | apt-key add - 
    echo "deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main" >/etc/apt/sources.list.d/kubernetes.list
    run apt-get update  -qq >/dev/null
    progress "install k8s ($pkg)"
    run apt-get update && apt-get install -y kubeadm kubectl kubelet
fi

if [ -z "$ip" ]; then
  ip=$(ip r | grep -E "(eth|en)" | grep -vE "(^169.254|^127|default|^10.0.2.)" | awk '{print $NF}')
fi

echo "KUBELET_EXTRA_ARGS=--fail-swap-on=false --node-ip=${ip}" > /etc/default/kubelet

run systemctl daemon-reload && systemctl restart kubelet

progress "kubeadm init cluster"

run kubeadm init --apiserver-advertise-address=${ip} --image-repository  registry.cn-hangzhou.aliyuncs.com/google_containers --pod-network-cidr=192.168.0.0/16  --service-cidr=10.96.0.0/12 --ignore-preflight-errors=Swap

mkdir -p $HOME/.kube
cp -a /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config

progress "Installing a pod network add-on"

run kubectl apply -f https://docs.projectcalico.org/v3.10/manifests/calico.yaml
run kubectl apply -f https://docs.projectcalico.org/v3.10/manifests/calicoctl.yaml

echo "alias cctl=\"kubectl exec -i -n kube-system calicoctl /calicoctl -- \"" >> /root/.bashrc 

run source /root/.bashrc

run kubectl taint nodes --all node-role.kubernetes.io/master-

nodename=$(kubectl get node | grep master | awk '{print $1}')

kubectl label nodes $nodename op.k7s.xyz/role=master.op

run kubectl apply -f nginx-ingress/nginx-ingress.yml

run kubectl apply -f traefik2/deploy.yml

info "install weave"

run kubectl apply -f "https://cloud.weave.works/k8s/scope.yaml?k8s-version=$(kubectl version | base64 | tr -d '\n')"

run kubectl apply -f weave/ui.yml

run kubectl apply -f weave/plugins.yml

info "install kuboard"

run kubectl apply -f kuboard/deploy.yml

run kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep kuboard-user | awk '{print $1}')   

run kubectl apply -f nfs/deploy.yml