## 关于

> 姑且算我的博客吧，🐶!

### 托管

目前博客部署在Ucloud 🇭🇰 k8s集群上

## 集群

- *.godu.dev 大陆🇨🇳k8s集群
- *.ysicing.me 香港🇭🇰k8s集群
- *.k7s.xyz 本地k8s集群

### 更新

内网网段与calico冲突,故调整calico和vagrant虚拟机网段

```
桥接网络: 192.168.199.0/24
hostonly: 192.168.100.0/24
podcidr: 172.16.0.0/16
svccidr: 10.96.0.0/12
```