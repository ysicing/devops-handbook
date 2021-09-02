---
title: "ergo安装ingress安装"
date: 2020-05-23T03:55:18+08:00
description: "k8s部署ingress"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- kubernetes
- ingress
series:
-
categories: 
- kubernetes
image:
---


## 域名相关

默认情况下, 本地环境域名测试

```
*.k7s.xyz 11.11.11.111
*.slb.k7s.xyz 11.11.11.112
*.vlb.k7s.xyz 11.11.11.113
```

## ergo安装

```
Usage:
  ergo install ingress [flags]

Flags:
  -h, --help                 help for ingress
      --ingresstype string   ingress: nginx-ingress, traefik, ingress-nginx (default "ingress-nginx")

Global Flags:
      --config string   config file (default is $HOME/.doge/config.yaml)
      --ip strings      需要安装节点ip (default [11.11.11.111])
      --pass string     管理员密码
      --pk string       管理员私钥
      --regioncn        默认使用gitee源 (default true)
      --user string     管理员 (default "root")
```


示例: `ergo install ingress --ip 10.147.20.43 --pk ~/.ssh/id_rsa --regioncn --ingresstype traefik`

## 历史安装

### NGINX Ingress Controller (ingress-nginx)

使用helm方式安装

```
kubectl apply -f https://sh.ysicing.me/k8s/helm/nginx-ingress/ns.yaml
# 安装
helm install nginx-ingress -f https://sh.ysicing.me/k8s/helm/nginx-ingress/nginx-ingress-1.34.2.yaml stable/nginx-ingress -n ingress-nginx
# 升级
helm upgrade nginx-ingress -f https://sh.ysicing.me/k8s/helm/nginx-ingress/nginx-ingress-1.34.2.yaml stable/nginx-ingress -n ingress-nginx
```

### NGINX Ingress Controllers (kubernetes-ingress)

```
helm repo add nginx-stable https://helm.nginx.com/stable
helm repo update
helm install nginx-ingress -f https://sh.ysicing.me/k8s/helm/nginxnc-ingress/nginx-ingress-0.4.3.yaml nginx-stable/nginx-ingress -n ingress-nginx
# 或者
kubectl apply -f https://sh.ysicing.me/k7s/install/nginx-ingress/nginx-ingress.yml
```

部署文档 [nginxinc/kubernetes-ingress v1.6.0](https://github.com/nginxinc/kubernetes-ingress/tree/v1.6.0/deployments)