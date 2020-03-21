## sealos安装k8s

> 推荐使用[sealos](https://github.com/fanux/sealos), 一键高可用，简单上手, 安装k8s 1.17.4版本

## 准备工作

### 虚拟机

环境: 3台机器(debian/buster, 5.4.0-0.bpo.3-amd64, 192.168.100.101~192.168.100.103, 2核4G80G存储)

```bash
mkdir k8s && cd k8s
wget https://ysicing.me/hack/vm/Vagrantfile
vagrant up
```

### 初始化环境

```
docker pull ysicing/ansible
docker run -it --rm ysicing/ansible bash
# 如果是其他机器需要自行修改inventory.ini
cp inventory.ini.example inventory.ini
# 初始化系统,安装docker
ansible-playbook all.yml
exit
```

### 安装k8s

源码编译安装sealos,使用新特性

> 说明，我定制了sealos和calico版本为最新版本

```
git clone https://github.com/ysicing/sealos.git --depth 1
./build-in-docker.sh
# 同步sealos到相关节点，如果你用上述步骤初始化系统，默认已经内置了sealos😂
mv sealos /usr/local/bin/
```

```
# 下载k7s文件. 需要自行下载k8s二进制文件
docker run --rm -v /root:/sysdir ysicing/k7s cp /kube.tgz /sysdir
# 安装1master2worker
sealos init --passwd vagrant --podcidr 172.16.0.0/16 --repo registry.cn-hangzhou.aliyuncs.com/google_containers --master  192.168.100.101 --node 192.168.100.102 --node 192.168.100.103 --version 1.17.4 --pkg-url /root/kube.tgz

# 清除
sealos clean

# 成功示例
 kubectl get node
NAME               STATUS   ROLES    AGE   VERSION
cn1.vps.godu.dev   Ready    <none>   22h   v1.17.4
cn2.vps.godu.dev   Ready    <none>   22h   v1.17.4
cn3.vps.godu.dev   Ready    master   22h   v1.17.4
```

内网网段与calico冲突,故调整calico和vagrant虚拟机网段

```
桥接网络: 192.168.199.0/24
hostonly: 192.168.100.0/24
podcidr: 172.16.0.0/16
svccidr: 10.96.0.0/12
```

### 允许管理节点调度pod

```
kubectl taint nodes --all node-role.kubernetes.io/master-
```