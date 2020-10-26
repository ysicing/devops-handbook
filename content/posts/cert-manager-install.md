---
title: "k8s 上利用 cert-manager 自动签发 TLS 证书"
date: 2020-10-26T11:02:44+08:00
description: "k8s 上利用 cert-manager 自动签发 TLS 证书"
draft: true
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: inner
tocLevels: ["h2", "h3", "h4"]
tags:
- kubernetes
series:
-
categories:
- kubernetes
image:
---

> 通过helm部署Cert Manager

### 创建命名空间

```
kubectl create namespace cert-manager
```

### 添加helm仓库

```
helm repo add jetstack https://charts.jetstack.io
helm repo update
```

### 安装crds

```
helm upgrade -i cert-manager -n cert-manager -f https://gitee.com/godu/helminit/raw/master/cert-manager.1.0.3.yaml --version v1.0.3 jetstack/cert-manager
# 查看安装情况
kubectl get pods -n cert-manager
NAME                                       READY   STATUS    RESTARTS   AGE
cert-manager-6564dc56bf-qgxlr              1/1     Running   0          97s
cert-manager-cainjector-7b98cf8646-t6cqd   1/1     Running   0          97s
cert-manager-webhook-5f8bb4f46c-44hzt      1/1     Running   0          97s
```

### 创建集群级Issuer

```
cat > clusterissuer.yaml <<EOF
apiVersion: cert-manager.io/v1alpha2
kind: ClusterIssuer
metadata:
  labels:
    name: letsencrypt-prod
  name: letsencrypt-prod # 自定义的签发机构名称，后面会引用
spec:
  acme:
    email: your@domain # 你的邮箱，证书快过期的时候会邮件提醒，不过我们可以设置自动续期
    solvers:
    - http01:
        ingress:
          class: nginx
    privateKeySecretRef:
      name: letsencrypt-prod # 指示此签发机构的私钥将要存储到哪个 Secret 对象中
    server: https://acme-v02.api.letsencrypt.org/directory # acme 协议的服务端，我们用 Let's Encrypt
EOF

kubectl apply -f clusterissuer.yaml
kubectl get clusterissuer
```

### 创建证书

```

```