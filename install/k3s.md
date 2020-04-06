> k3s 安装小记

k3s 是Rancher推出的轻量级 k8s.

## 下载安装脚本

```
# 境外
curl -sfL https://get.k3s.io > install.sh
# 大陆
curl -sfL https://docs.rancher.cn/k3s/k3s-install.sh > k3s-install.sh
```

## 安装master节点

```
INSTALL_K3S_EXEC="--no-deploy traefik --node-ip 10.147.20.41 --docker" ./install.sh
# 配置kubeconfig
cp -a /etc/rancher/k3s/k3s.yaml /root/.kube/config
```

## 安装worker节点

```
# token 是从 master 节点的 /var/lib/rancher/k3s/server/node-token 文件里获取的。

K3S_TOKEN=K107941e2fbb3596e5678ee39c0ac875fe83bf97b05535f898e06d8881bf1a65212::server:380bb2b3064b115f110260aec43a72e3 K3S_URL=https://10.147.20.41:6443 INSTALL_K3S_MIRROR=cn INSTALL_K3S_EXEC="--node-ip 10.147.20.43 --docker" ./k3s-install.sh
```

## 安装ingress

