---
title: "基于DNSPOD使用cert-manager自动签发TLS证书"
date: 2021-11-22T10:51:42+08:00
description: k8s上使用cert-manager自动签发 TLS 证书
tags:
- cert-manager
- kubernetes
- qcloud
---

<!-- truncate -->

## 序

最近在使用tke集群和dnspod, 记录一下基于dnspod部署cert-manager

## 安装cert-manager

> 这里使用bitnami提供的cert-manager

```bash
kubectl create namespace cert-manager
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm upgrade -i cert-manager -n cert-manager --set installCRDs=true --set leaderElection.namespace=cert-manager bitnami/cert-manager
```

## 安装dnspod webhook

创建腾讯云API token

```
helm repo add roc https://charts.imroc.cc
helm repo update
helm upgrade -i  cert-manager-webhook-dnspod roc/cert-manager-webhook-dnspod \
    --namespace cert-manager \
    --set clusterIssuer.secretId=<SECRET_ID> \
    --set clusterIssuer.secretKey=<SECRET_KEY> 
```

## 创建ClusterIssuer

> 由于上面配置了默认创建, 默认ClusterIssuer为`dnspod`

### 创建 Certificate

```yaml
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: tls-ops-default-ops-com-prod
  namespace: default
spec:
  secretName: tls-ops-default-ops-com-prod # 证书保存的 secret 名
  dnsNames:
  - "*.default.ops.com"
  issuerRef:
    name: dnspod
    kind: ClusterIssuer
    group: cert-manager.io
```

通过dns验证可以创建泛域名证书。

## 部署

1. 在ingress里使用

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/whitelist-source-range: 10.0.0.0/8
  labels:
    app: cce
  name: cce
  namespace: cce-system
spec:
  rules:
  - host: api.cce-system.internal.ysicing.net
    http:
      paths:
      - backend:
          service:
            name: cce
            port:
              number: 8080
        path: /
        pathType: Prefix
  tls:
  - hosts:
    - api.cce-system.internal.ysicing.net
    secretName: cce-tls
```

2. 在istio ingressgateway中使用

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: example-gw
  namespace: istio-system
spec:
  selector:
    app: istio-ingressgateway
    istio: ingressgateway
  servers:
  - port:
      number: 80
      name: HTTP-80
      protocol: HTTP
    hosts:
    - example.com
    - "*.example.com"
    tls:
      httpsRedirect: true # http 重定向 https (强制 https)
  - port:
      number: 443
      name: HTTPS-443
      protocol: HTTPS
    hosts:
    - example.com
    - "*.example.com"
    tls:
      mode: SIMPLE
      credentialName: example-crt-secret # 引用证书 secret
---
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: example-vs
  namespace: test
spec:
  gateways:
  - istio-system/example-gw # 转发规则绑定到 ingressgateway，将服务暴露出去
  hosts:
  - 'test.example.com'
  http:
  - route:
    - destination:
        host: example
        port:
          number: 80
```

## 参考

https://imroc.cc/k8s/trick/cert-manager-webhook-dnspod/

[k8s上利用cert-manager自动签发TLS证书](/posts/cert-manager-install/)
