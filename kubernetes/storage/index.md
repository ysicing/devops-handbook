## 部署存储

#### 部署nfs

```
# 未安装存储
curl https://ysicing.me/hack/k7s/install/nfs/deploy.sh | bash
# 已安装存储
kubectl apply -f https://ysicing.me/hack/k7s/install/nfs/deploy.yaml
```

#### 配置默认存储

```
# 集群已有存储类型（StorageClass），执行 kubectl get sc看下当前是否设置了默认的 storageclass
kubectl get sc

kubectl patch storageclass nfs-data -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
```