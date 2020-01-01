## k8s平台优质应用工具

> 简单介绍，部署k8s工具

#### 部署kuboard

```
kubectl apply -f https://ysicing.me/hack/k7s/install/kuboard/deploy.yml
# 因为ingress部署关系，所以配置解析域名为ui.slb.k7s.xyz
# 管理节点执行，获取token
kbtoken
```

#### 部署metrics-server

```
kubectl apply -f https://ysicing.me/hack/k7s/install/metrics-server/deploy.yaml
```