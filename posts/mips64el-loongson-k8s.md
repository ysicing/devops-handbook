## 龙芯Mips64el平台上部署K8s

> 不会具体讲怎么部署，原理都类似,将原先amd64换成mips64el

## 中标麒麟龙芯CPU源

```bash
# /etc/yum.repos.d/ns7-mips.repo
[ns7-mips64el-os]
name=NeoKylin Linux Advanced Server 7 - $basearch - Os
baseurl=http://download.cs2c.com.cn/neokylin/server/releases/7.0/ls_64/
gpgcheck=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-neokylin-release
enabled=1

[ns7-mips64el-extras]
name=NeoKylin Linux Advanced Server 7 - Addons
baseurl=http://download.cs2c.com.cn/neokylin/server/everything/7.0/ls_64/
gpgcheck=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-neokylin-release
enabled=0

[ns7-mips64el-updates]
name=NeoKylin Linux Advanced Server 7 - Updates
baseurl=http://download.cs2c.com.cn/neokylin/server/updates/7.0/ls_64/
gpgcheck=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-neokylin-release
enabled=1
```

还有一个就是龙芯自己的仓库比较迷，但是软件包比较新

```bash
http://ftp.loongnix.org/os/loongnix/1.0/
```

## 基础镜像

### neokylin基础镜像

```bash
wget https://raw.githubusercontent.com/docker/docker/master/contrib/mkimage-yum.sh
chmod +x ./mkimage-yum.sh
./mkimage-yum.sh -y /etc/yum.conf nk-base

wget http://list.isoftos.win/script/create_docker_image.loogson
chmod +x create_docker_image.loogson
./create_docker_image.loogson nk-base
```

### debian基础镜像

可以通过异构构建镜像方式

可以参考大佬项目 [debian-debootstrap](https://github.com/liupeng0518/debian-debootstrap)

## k8s编译

### 宿主机编译

> 4核16G,性能太差,源码编译安装go新版本差不多两小时

### 通过异构镜像编译

大概修改印象: 

```bash
# 第一处
mips64*)
    host_arch=mips64le
    ;;
# 第二处
"linux/mips64le")
    export CGO_ENABLED=1
    export CC=mips64el-linux-gnu-gcc
    ;;
# 第三处
linux/mips64le
# 第四处
uint64转换一下
```

具体可以通过make <xxx组件名>

## pause镜像

这个得注意一下, 不能用空镜像，可以使用基础镜像