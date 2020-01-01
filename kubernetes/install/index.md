## 安装

> 推荐使用[sealos](https://github.com/fanux/sealos), 一键高可用，简单上手

## 准备工作

### 虚拟机

环境: 3台机器(debian/buster, 4.19.0-6-amd64, 192.168.100.101~192.168.100.103, 2核4G80G存储)

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

### 安装k8s

源码编译安装sealos,使用新特性

```
git clone https://github.com/fanux/sealos.git --depth 1
make local
mv sealos /usr/local/bin/
```

下载离线包定制离线包

```
wget https://sealyun.oss-cn-beijing.aliyuncs.com/413bd3624b2fb9e466601594b4f72072-1.17.0/kube1.17.0.tar.gz
tar xf kube1.17.0.tar.gz
```

定制后的脚本，我移除了镜像和二进制文件,需要自己二次集成，下载路径<del>[install.tgz](/hack/sealos/install.tgz)</del>或者[kube1.17.0.tar.gz](/hack/vm/)

```
# 安装1master2worker
sealos init --passwd vagrant --podcidr 172.16.0.0/16 --repo registry.cn-hangzhou.aliyuncs.com/google_containers --master  192.168.100.101 --node 192.168.100.102 --node 192.168.100.103 --version 1.17.0 --pkg-url /root/kube1.17.0.tar.gz

# 清除
sealos clean  --passwd vagrant --master  192.168.100.101 --node 192.168.100.102 --node 192.168.100.103
```

<del>特别说明node节点需要指定路由，否则会安装失败,[fanux/sealos#134](https://github.com/fanux/sealos/issues/134)</del>

### 20200101 更新 

目前已经解决了这个问题, vagrant配置桥接网络并注册默认路由 [Vagrantfile](https://ysicing.me/hack/vm/Vagrantfile)