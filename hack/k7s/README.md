# 云原生教程系统

> 快速部署自己的k8s开放环境

## 支持组件

- Kubernetes Dashboard
- traefik 2.0 (80/443)
- nginx-ingress (50080/50443)
- kuboard
- weave

## 启动虚拟机

> Debian 9.11

```
vagrant ssh/sudo su
# 或者
ssh 10.8.82.35
root/vagrant
```

## Debian初始化

```
ssh-keygen
ssh-copy-id -i .ssh/id_rsa.pub 127.0.0.1
cd /src/prepare
./install.sh
```

## 安装k8s

```
cd /src/install
./install.sh
```
