## 附加组件

> 扩展了Kubernetes的功能

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

#### 部署Dashboard

```
sealos install --pkg-url https://github.com/sealstore/dashboard/releases/download/v2.0.0-bata5/dashboard.tar
kdtoken
```