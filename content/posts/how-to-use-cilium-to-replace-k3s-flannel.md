---
title: "k3s使用Cilium替换默认Flannel"
date: 2021-09-24T18:35:25+08:00
description: 本文主要讲述k3s使用cilium网络
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocFolding: false
tocPosition: inner
tocLevels: ["h2", "h3", "h4"]
tags:
- k3s
- cilium
- 容器
series:
-
categories:
- k3s
image:
---

## 系统要求

- k3s >= 1.16,(默认v1.21.5+k3s1)
- Debian 11，(默认5.10)

## 修改k3s配置

```bash
cat /etc/systemd/system/k3s.service

    --flannel-backend none \
```

将网络默认设置为`none`

## 移除网络相关设置

```bash
# 移除cni命名空间
ip netns show 2>/dev/null | grep cni- | xargs -r -t -n 1 ip netns delete
# 移除cnio网卡
ip link show 2>/dev/null | grep 'master cni0' | while read ignore iface ignore; do
    iface=${iface%%@*}
    [ -z "$iface" ] || ip link delete $iface
done
ip link delete cni0
ip link delete flannel.1
rm -rf /var/lib/cni/
# 清理iptables
iptables-save | grep -v KUBE- | grep -v CNI- | iptables-restore
```

## 安装cilium

### helm安装

```helm
helm repo add cilium https://helm.cilium.io/
helm install cilium cilium/cilium --version 1.10.4 \
   --namespace kube-system\
   --set hubble.relay.enabled=true \
   --set hubble.ui.enabled=true
```

### cilium安装

> 默认 [ysicig/tools](https://github.com/ysicing/tools)已内置

```bash
# 指定pod ip段
cilium install --config cluster-pool-ipv4-cidr="10.42.0.0/16"
# 安装hubble网络拓扑
cilium hubble enable --ui
```

### 验证cilium

```
root@k3s:~# cilium status
    /¯¯\
 /¯¯\__/¯¯\    Cilium:         OK
 \__/¯¯\__/    Operator:       OK
 /¯¯\__/¯¯\    Hubble:         OK
 \__/¯¯\__/    ClusterMesh:    OK
    \__/

Deployment        hubble-ui                Desired: 1, Ready: 1/1, Available: 1/1
Deployment        clustermesh-apiserver    Desired: 1, Ready: 1/1, Available: 1/1
DaemonSet         cilium                   Desired: 2, Ready: 2/2, Available: 2/2
Deployment        cilium-operator          Desired: 1, Ready: 1/1, Available: 1/1
Deployment        hubble-relay             Desired: 1, Ready: 1/1, Available: 1/1
Containers:       cilium                   Running: 2
                  cilium-operator          Running: 1
                  hubble-relay             Running: 1
                  hubble-ui                Running: 1
                  clustermesh-apiserver    Running: 1
Cluster Pods:     12/17 managed by Cilium
Image versions    cilium                   quay.io/cilium/cilium:v1.10.4: 2
                  cilium-operator          quay.io/cilium/operator-generic:v1.10.4: 1
                  hubble-relay             quay.io/cilium/hubble-relay:v1.10.4: 1
                  hubble-ui                quay.io/cilium/hubble-ui:v0.7.9@sha256:e0e461c680ccd083ac24fe4f9e19e675422485f04d8720635ec41f2ba9e5562c: 1
                  hubble-ui                quay.io/cilium/hubble-ui-backend:v0.7.9@sha256:632c938ef6ff30e3a080c59b734afb1fb7493689275443faa1435f7141aabe76: 1
                  hubble-ui                docker.io/envoyproxy/envoy:v1.18.2@sha256:e8b37c1d75787dd1e712ff389b0d37337dc8a174a63bed9c34ba73359dc67da7: 1
                  clustermesh-apiserver    quay.io/coreos/etcd:v3.4.13: 1
                  clustermesh-apiserver    quay.io/cilium/clustermesh-apiserver:v1.10.4: 1
```

### 访问Hubble查看网络连接

![](/images/k8s/hubble-ui.png)

#### 绑定ingress

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    k8s.ysicing.me: hubble-ui
  labels:
    k8s-app: hubble-ui
  name: hubble-ui
  namespace: kube-system
spec:
  rules:
  - host: hubble-ui.internal.ysicing.net
    http:
      paths:
      - backend:
          service:
            name: hubble-ui
            port:
              number: 80
        path: /
        pathType: ImplementationSpecific
  tls:
  - hosts:
    - hubble-ui.internal.ysicing.net
    secretName: tls-ysicing.net
```

浏览器访问 `https://hubble-ui.internal.ysicing.net`

#### port-forward转发

```bash
kubectl port-forward --namespace kube-system  service/hubble-ui 38888:80
```

浏览器访问 `http://127.0.0.1:38888`


