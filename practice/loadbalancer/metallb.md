## metallb部署使用

k8s默认不提供裸机的 loadbalancer service. 如果要使用loadbalancer service，那么就要用到metallb了

metallb支持两种工作模式,一种是layer2模式,也就是工作在2层来负责相应arp请求，对于局域网中的人来说仿佛就是给服务分配了一个ip，但是2层模式不是真正的负载均衡，因为所有的流量会经过集群中的一个节点，当这个节点挂了的话，metallb会迁移ip到另外一个节点上。另外一种是bgp模式，在bgp模式下，集群中每一个节点都会和路由器建立bgp会话，所以bgp模式是高可用的，但是需要你的路由器支持bgp。路由器是不支持bgp的，所以就采用二层模式。

### 安装

#### 快速安装

```
ergo helm install lb --ip 172.16.74.102 --pk .ssh/id_rsa
# 默认配置 
kubectl edit configmaps --namespace metallb-system metallb-config -o yaml
apiVersion: v1
data:
  config: |
    address-pools:
    - addresses:
      - 11.11.11.0/24
      name: generic-cluster-pool
      protocol: layer2
kind: ConfigMap
```

首先你要确认你的k8s kube-proxy 是不是使用ipvs模式的，如果是那么你要开启strictARP选项，编辑kube-proxy的configmap

```
kubectl edit configmap -n kube-system kube-proxy
# 开启 strictARP: true
```

#### 手动安装

```
kubectl create ns metallb-system
helm upgrade -i metallb -f https://raw.githubusercontent.com/ysicing/helminit/master/metallb/values.yaml -n metallb-system bitnami/metallb --version 2.2.0
```

#### 附录参考

[metallb官方安装文档](https://metallb.universe.tf/installation/)