> docker快速安装

## 安装

```
curl -fsSL https://ysicing.me/hack/docker/install.sh | bash 
或者
ergo install docker -h
```

做了如下设置

```json
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "registry-mirrors": ["https://reg-mirror.qiniu.com","https://dyucrs4l.mirror.aliyuncs.com","https://dockerhub.azk8s.cn"],
  "bip": "169.254.0.1/24",
  "max-concurrent-downloads": 10,
  "log-driver": "json-file",
  "log-level": "warn",
  "log-opts": {
    "max-size": "20m",
    "max-file": "2"
  },
  "storage-driver": "overlay2"
}
```

## docker常用工具安装

```
docker run --rm -v /usr/local/bin:/sysdir ysicing/tools tar zxf /pkg.tgz -C /sysdir
```

内置了

```bash
etcdctl
helm(v3)
helminit // 初始化helm, 默认配置的是mirror.azure.cn
docker-compose
calicoctl
ctop
cclear (清理退出容器)
din (进入容器 din <cname/>cid> ash/bash(默认)/sh)
dps (容器状态)
etcdcli (特别支持k8s集群的etcd)
kbtoken (查看kuboard admin用户token)
kdtoken (查看dashboard-admin 用户token)

istioctl
linkerd

upgrade-tools // 升级二进制
```