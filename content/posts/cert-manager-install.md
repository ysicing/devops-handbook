---
title: "基于ALIDNS使用cert-manager自动签发TLS证书"
date: 2020-10-26T11:02:44+08:00
description: "k8s 上利用 cert-manager 自动签发 TLS 证书"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: inner
tocLevels: ["h2", "h3", "h4"]
tags:
- kubernetes
- cert-manager
- 阿里云
series:
-
categories:
- kubernetes
image:
---

## 概述

随着互联网发展，https越来越普及，是个网站都要上个https，否则就是非主流哈哈哈。之前也介绍过**caddy**，自动签发https证书，这是一个传统的方式。那么服务上到k8s上，如何实现永久免费证书了。**cert-manager** 是 Kubernetes 上比较牛逼的证书管理工具，可以帮助从各种来源颁发证书，而且确保证书有效且最新，并尝试在到期前的配置时间续订证书。

## 工作原理

![](https://gitee.com/godu/blogimage/raw/master/blog/20201026/high-level-overview.svg)

**cert-manager**部署到 Kubernetes 集群后，根据实际指定的CRD资源来签发证书并自动续期。

部分名词解释

- **Issuer**/**ClusterIssuer**: 定义证书签发的姿势。两者唯一区别就是**Issuer**只能用来签发单一ns下的证书，**ClusterIssuer**可以签发集群级别的证书。

- **Certificate**: 具体签发域名以及通过哪种姿势(即<b>指定Issuer/ClusterIssuer</b>)。

### 证书签发原理

由于**cert-manager**是基于**ACME**协议与**Let's Encrypt**来签发免费证书，这里就不详细说明这个了, 其主流校验方式是**HTTP-01** 和 **DNS-01**。由于我们需要在内网签发证书，HTTP-01校验方式就不太适用了。

## 操作步骤

> 推荐使用**helmv3**安装

### 安装 cert-manager

```
# 创建命名空间
kubectl create namespace cert-manager
# 添加helm仓库或者更新
helm repo add jetstack https://charts.jetstack.io
helm repo update
helminit
# 一键安装
helm upgrade -i cert-manager -n cert-manager -f https://gitee.com/godu/helminit/raw/master/cert-manager.1.0.3.yaml --version v1.0.3 jetstack/cert-manager
# 查看安装情况
kubectl get pods -n cert-manager
NAME                                       READY   STATUS    RESTARTS   AGE
cert-manager-6564dc56bf-qgxlr              1/1     Running   0          97s
cert-manager-cainjector-7b98cf8646-t6cqd   1/1     Running   0          97s
cert-manager-webhook-5f8bb4f46c-44hzt      1/1     Running   0          97s
```

### DNS-01校验

因为dns托管在阿里云，且cert-manager不支持alidns，只能通过webhook方式部署，来扩展DNS提供商。

这里以阿里dns + alidns-webhook方式为例。

#### 部署alidns-webhook

- 安装alidns-webhook

```bash
# 默认镜像使用阿里云k7scn
kubectl apply -f https://gitee.com/godu/helminit/raw/master/cert-manager/alidns-cm-webhook.yaml
```

- 创建alidns api secret

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: alidns-secret
  namespace: cert-manager
data:
  access-key: YOUR_ACCESS_KEY # base64
  secret-key: YOUR_SECRET_KEY
```

这里需要注意两点，一个是Secret值问题，需要避免\n或者空格影响

建议这样 `echo -n YOUR_ACCESS_KEY | base64`， 还有如果是要创建 ClusterIssuer，Secret 需要创建在 cert-manager 所在命名空间中，如果是 Issuer，那就创建在 Issuer 所在命名空间中。

第2个点就是配置alidns的RAM，这里有个RAM坑。

RAM权限设置如下:

```json
{
    "Version": "1",
    "Statement": [
        {
            "Action": "*",
            "Resource": "acs:alidns:*:*:domain/<域名>",
            "Effect": "Allow"
        },
        {
            "Action": [
                "alidns:DescribeSiteMonitorIspInfos",
                "alidns:DescribeSiteMonitorIspCityInfos",
                "alidns:DescribeSupportLines",
                "alidns:DescribeDomains",
                "alidns:DescribeDomainNs",
                "alidns:DescribeDomainGroups"
            ],
            "Resource": "acs:alidns:*:*:*",
            "Effect": "Allow"
        }
    ]
}
```

正常情况下只需要配置第一条规则即可，但是由于alidns-webhook会校验这个域名存不存在,如果不配置会报403权限

```go
# https://github.com/pragkent/alidns-webhook/blob/master/alidns/client.go#L26
func (c *Client) getHostedZone(zone string) (string, error) {
	request := alidns.CreateDescribeDomainsRequest()
	request.KeyWord = util.UnFqdn(zone)
	request.SearchMode = "EXACT"

	response, err := c.dnsc.DescribeDomains(request)
	if err != nil {
		return "", err
	}

	zones := response.Domains.Domain
	if len(zones) == 0 {
		return "", fmt.Errorf("zone %s does not exist", zone)
	}

	return zones[0].DomainName, nil
}
```

### 创建ClusterIssuer

```yaml
apiVersion: cert-manager.io/v1alpha2
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    # Change to your letsencrypt email
    email: your@domain # 你的邮箱
    server: https://acme-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
    - dns01:
        webhook:
          groupName: acme.yourcompany.com
          solverName: alidns
          config:
            region: ""
            accessKeySecretRef:
              name: alidns-secret
              key: access-key
            secretKeySecretRef:
              name: alidns-secret
              key: secret-key
```

### 创建 Certificate

```yaml
apiVersion: cert-manager.io/v1alpha2
kind: Certificate
metadata:
  name: tls-ops-domain-prod
  namespace: gaea-op
spec:
  secretName: tls-ops-domain-prod # 证书保存的 secret 名
  commonName: 
  dnsNames:
  - "*.bj-internal.ops.domain"
  - "*.bj-external.ops.domain"
  issuerRef:
    name: letsencrypt-prod
    kind: ClusterIssuer
```

通过dns验证可以创建泛域名证书。

### 获取和使用证书

创建好 Certificate 后，稍等2-3分钟 我们可以 查看是否签发成功:

```
kubectl get certificate -n gaea-op
NAME                READY   SECRET                  AGE
tls-ops-domain-prod   True   tls-ops-domain-prod   2m
```

查看证书信息

```
kubectl get secrets/tls-ops-domain-prod  -n gaea-op -o json | jq '.data."tls.crt"' | tr '\"' ' ' | base64 -D | openssl x509 -in /dev/stdin -text -noout

```

### 使用证书

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: log
  namespace: gaea-op
spec:
  rules:
  - host: log01.bj-internal.ops.domain
    http:
      paths:
      - backend:
          serviceName: log
          servicePort: http-2379
        path: /
  tls:
  - hosts:
    - log01.bj-internal.ops.domain
    secretName: tls-ops-domain-prod
status:
  loadBalancer:
    ingress:
    - ip: 10.10.10.159
```


## 总结

到这里为止,  <b>cert-manager </b> 基本操作已经完成。

源码部分  [godu/helminit](https://gitee.com/godu/helminit)



---

欢迎关注我的公众号“**缘生小助手**”，原创实践文章第一时间推送。

<center>
    <img src="https://gitee.com/godu/blogimage/raw/master/wechat/wx_qrcode.jpg" style="width: 100px;">
</center>
