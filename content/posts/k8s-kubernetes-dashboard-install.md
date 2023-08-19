---
title: "部署Kubernetes Dashboard"
date: 2021-09-08T12:59:51+08:00
description: 安装部署k8s Dashboard
tags:
- kubernetes
---

<!-- truncate -->

简单记录一下快速安装dashboard

### 安装

```bash
kubectl apply -f https://sh.ysicing.me/k8s/dashboard/recommended.yaml
```

### 授权

授权集群管理员权限, 默认用户为`super-kd-user`

```bash
kubectl apply -f https://sh.ysicing.me/k8s/dashboard/admin.yaml
```

### 获取token

获取授权用户`super-kd-user`token

```
kdtoken # 可以从ysicing/tools处获取
```

或者

```
# 法一
kubectl get secret -n kubernetes-dashboard $(kubectl get secret -n kubernetes-dashboard|grep super-kd-user |awk '{print $1}') -o jsonpath='{.data.token}'  | base64 --decode

# 法二
kubectl -n kubernetes-dashboard describe secret super-kd-user-token | grep '^token'
```

### 访问

```
kubectl proxy
```

使用浏览器访问`http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/`
登录使用`super-kd-user`Bearer Token

### 附录

[ysicing/toos](https://github.com/ysicing/tools)
