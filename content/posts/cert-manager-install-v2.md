---
title: "k8s上基于DNSPOD利用cert-manager自动签发TLS证书"
date: 2021-11-22T10:51:42+08:00
description: k8s上利用cert-manager自动签发 TLS 证书
draft: true
hideToc: false
enableToc: true
enableTocContent: false
tocFolding: false
tocPosition: inner
tocLevels: ["h2", "h3", "h4"]
tags:
- cert-manager
- kubernetes
series:
-
categories:
- kubernetes
image:
---

## 安装

```bash
kubectl create namespace cert-manager
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm upgrade -i cert-manager -n cert-manager --set installCRDs=true --set leaderElection.namespace=cert-manager bitnami/cert-manager
```

## 安装dnspod webhook

下载helm

```bash
git clone --depth 1 https://github.com/qqshfox/cert-manager-webhook-dnspod.git
```

申请域名dnspod token, 更新yaml, 仅列出需要变更的数据，其他默认即可

```bash
# dnspod-webhook-values.yaml
secrets: # 将前面生成的 id 和 token 粘贴到下面
  apiID: "<ID>"
  apiToken: "<Token>"

clusterIssuer:
  enabled: true # 自动创建出一个 ClusterIssuer
  email: your@email.com # 填写你的邮箱地址
```

安装webhook

```bash
helm upgrade --install -n cert-manager -f dnspod-webhook-values.yaml cert-manager-webhook-dnspod ./deploy/cert-manager-webhook-dnspod
```

## 创建ClusterIssuer

> 由于上面配置了默认创建, 默认ClusterIssuer为`cert-manager-webhook-dnspod-cluster-issuer`

### 创建 Certificate

```yaml
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: tls-ops-default-ops-com-prod
  namespace: default
spec:
  secretName: tls-ops-default-ops-com-prod # 证书保存的 secret 名
  commonName: 
  dnsNames:
  - "*.default.ops.com"
  issuerRef:
    name: cert-manager-webhook-dnspod-cluster-issuer
    kind: ClusterIssuer
    group: cert-manager.io
```

通过dns验证可以创建泛域名证书。


## 参考

https://imroc.cc/k8s/trick/cert-manager-webhook-dnspod/

[k8s上利用cert-manager自动签发TLS证书](/posts/cert-manager-install/)