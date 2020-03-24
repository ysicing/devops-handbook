# Summary

## 前言

* [序言](README.md)

## 云原生实践

* [安装集群或工具]()
    * [docker](install/docker.md)
    * [debian初始化](install/init.md)
    * [k8s之sealos](install/sealos.md)
    * [k8s之minikube](install/minikube.md)
    * [helm](install/helm.md)
    * [存储之NFS](install/nfs.md)
    * [Ingress Controller部署](install/ingress.md)
    * [Promethues部署](install/prometheus.md)
    * [k8s启用feature特性](install/feature.md)

* [概念篇](kubernetes/intro/index.md)
    * [部署第一个应用](kubernetes/intro/deploy.md)
    * [资源权限控制](kubernetes/intro/sa.md)
* [Ingress Controller高级使用]()
    * [配置域名证书](kubernetes/addons/ingress/tls-config.md)

* [网络篇](kubernetes/network/index.md)
* [存储篇](kubernetes/storage/index.md)
* [插件篇](kubernetes/plugins/index.md)
* [Addons篇](kubernetes/addons/index.md)
    * [安装Drone](kubernetes/helm/drone.md)
    * [安装Registry](kubernetes/helm/docker-registry.md)
* [ACK实践](kubernetes/ack/index.md)
    * [新增内网slb ingress](kubernetes/ack/ingress.md)
* [tutorials]()
    * [部署efk(fluentd)](kubernetes/tutorials/setup_efk_logging_stack.md)

* [Linux](linux/index.md)
    * [Debian使用技巧](linux/linux.md)
        * [Debian Buster日常操作](linux/debian-buster-op.md)
        * [在线重装](linux/reinstall.md)
        * [轻量云升级内核](linux/aliyun_debian_upgrade_kernel.md)
    * [定时器](linux/timers.md)    
    * [FAQ](linux/faq.md)

* [开源软件]()
    * [DNS-Adguard](soft/dns/adguard.md)
    * [OpenLDAP](soft/ldap/openldap_install.md)

* [开发准备]()
    * [安装Node](develop/env/nodejs.md)
    * [安装Go](develop/env/go.md)

    * [vim配置](develop/env/vim_config.md)
    * [vscode配置](develop/env/vscode_config.md)

## 研发那点事

* [脚本语言思考]()
    * [awk 中关于多个$的用法](develop/shell/awk-func.md)

* [Go开发学习]()
    * [Go项目结构](develop/gostudy/project-layout.md)
    * [Go基础](develop/gostudy/ch01/index.md)
* [Gin中文文档]()
    * [GUIDE]()
        * [安装](gin/guide/installation.md)
        * [自定义](gin/guide/customization.md)

##  历史博文

 * [龙芯Mips64el平台上部署K8S](posts/mips64el-loongson-k8s.md)

## 附录

* [有趣的开源项目](appendix/index.md)
* [macOS常用工具](appendix/macOS-apps.md)
* [关于](appendix/about.md)
