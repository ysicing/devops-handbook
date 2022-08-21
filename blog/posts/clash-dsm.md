---
title: "群晖配置Clash"
date: 2020-09-20T21:05:54+08:00
description: 群晖配置Clash
tags:
- clash
---

<!-- truncate -->

![](https://gitee.com/godu/blogimage/raw/master/blog/clash.png)

> 趁着搬家，需要折(dao)腾(shi)一下吃灰的群晖，将Clash升级到2.0

## 准备clash配置文件

由于日常使用clashx，这里就不介绍如何获取Clash配置文件了。自行解决，可以参考大佬整理的[LAZY_RULES](https://github.com/Hackl0us/SS-Rule-Snippet/blob/master/LAZY_RULES/clash.yaml)

#### 注意几点

```yaml
#HTTP(S) and SOCKS5 共用端口
mixed-port: 7890
# 允许局域网的连接（可用来共享代理）
allow-lan: true
# clash 的 RESTful API
external-controller: 0.0.0.0:9090
```

## 效果

![](https://gitee.com/godu/blogimage/raw/master/blog/20200920/qh01.jpg)

![](https://gitee.com/godu/blogimage/raw/master/blog/20200920/qh02.jpg)


### 创建clash-prod服务

- 获取镜像或者上传镜像，这里默认上传镜像

```
docker pull registry.cn-beijing.aliyuncs.com/k7scn/clash:1.1.0
docker save registry.cn-beijing.aliyuncs.com/k7scn/clash:1.1.0 > clash.tar
```

![](https://gitee.com/godu/blogimage/raw/master/blog/20200920/qh03.jpg)

- 创建容器

点击镜像创建容器后，高级设置。

> - 高级设置，勾选启用自动重新启动
> - 卷，持久化配置文件
> - 网络，勾选使用与Docker Host相同的网络(共享网络)



![](https://gitee.com/godu/blogimage/raw/master/blog/20200920/qh04.jpg)

配置完成应用，即可。


### 创建clash-ui服务

同理类似，这里简单说下

```
docker pull registry.cn-beijing.aliyuncs.com/k7scn/clash:yacd
docker save registry.cn-beijing.aliyuncs.com/k7scn/clash:yacd > yacd.tar
```

- 不需要额外配置，当服务起来后，获取clash-ui默认分配的端口，浏览器访问，配置API地址为**http://127.0.0.1:9090**

到这里就达到了上述效果。

## 群晖配置代理

![](https://gitee.com/godu/blogimage/raw/master/blog/20200920/qh05.jpg)


