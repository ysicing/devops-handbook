## 阿里云轻量应用服务器升级内核

> 升级有风险请慎重哦

#### 配置说明

> 阿里云HK 1核2G2TB30Mbps ¥34/m
> Debian 8.9


#### 更新源

> 需要移除默认源，使用如下源

```
# /etc/apt/sources.list
deb http://mirror.xtom.com.hk/debian/ stretch main contrib non-free
# deb-src http://mirror.xtom.com.hk/debian/ stretch main contrib non-free

deb http://mirror.xtom.com.hk/debian/ stretch-updates main contrib non-free
# deb-src http://mirror.xtom.com.hk/debian/ stretch-updates main contrib non-free

deb http://mirror.xtom.com.hk/debian/ stretch-backports main contrib non-free
# deb-src http://mirror.xtom.com.hk/debian/ stretch-backports main contrib non-free

deb http://mirror.xtom.com.hk/debian-security/ stretch/updates main contrib non-free
#deb-src http://mirror.xtom.com.hk/debian-security/ stretch/updates main contrib non-free
```

更新升级

```bash
apt-get update
apt-get dist-upgrade
```

#### 升级到最新内核

```
apt-get install -t stretch-backports linux-image-amd64
update-grub
reboot
```

#### 升级完成后docker无法启动

```
prior storage driver aufs failed: driver not supported
```

删除`/var/lib/docker`，docker存储由aufs变成overlay2