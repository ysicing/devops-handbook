## 部署kuboard

```
kubectl apply -f https://ysicing.me/hack/k7s/install/kuboard/deploy.yml
# 因为ingress部署关系，所以配置解析域名为ui.slb.k7s.xyz
# 管理节点执行，获取token
kbtoken
```