## Ingress Controller部署之nginxinc

```
kubectl apply -f https://ysicing.me/hack/k7s/install/nginx-ingress/nginx-ingress.yml
```

部署文档 [nginxinc/kubernetes-ingress v1.6.0](https://github.com/nginxinc/kubernetes-ingress/tree/v1.6.0/deployments)


### 默认情况下

```
*.k7s.xyz 192.168.100.101
*.slb.k7s.xyz 192.168.100.102
*.vlb.k7s.xyz192.168.100.103
```