## 部署存储

#### 部署nfs

```
# 未安装存储
curl https://ysicing.me/hack/k7s/install/nfs/deploy.sh | bash
# 已安装存储
kubectl apply -f https://ysicing.me/hack/k7s/install/nfs/deploy.yaml
```