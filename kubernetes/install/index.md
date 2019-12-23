## 安装

> 推荐使用[sealos](https://github.com/fanux/sealos), 一键高可用，简单上手

## 准备工作

### 虚拟机

环境: 3台机器(debian/buster, 4.19.0-6-amd64, 172.20.0.101~172.20.0.103, 2核4G80G存储)

```
mkdir k8s && cd k8s
wget https://ysicing.me/hack/vm/Vagrantfile
vagrant up
```

### 初始化环境

```
docker pull ysicing/ansible
docker run -it --rm ysicing/ansible bash
cp inventory.ini.example inventory.ini
# 初始化系统,安装docker
ansible-playbook all.yml
exit
```

