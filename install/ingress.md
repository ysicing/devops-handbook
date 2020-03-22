> ingress安装

## 域名相关

默认情况下, 本地环境域名测试

```
*.k7s.xyz 192.168.100.101
*.slb.k7s.xyz 192.168.100.102
*.vlb.k7s.xyz192.168.100.103
```

## NGINX Ingress Controller (ingress-nginx)

使用helm方式安装

```
kubectl apply -f https://ysicing.me/hack/helm/nginx-ingress/ns.yaml
# 安装
helm install nginx-ingress -f https://ysicing.me/hack/helm/nginx-ingress/nginx-ingress-1.34.2.yaml stable/nginx-ingress -n ingress-nginx
# 升级
helm upgrade nginx-ingress -f https://ysicing.me/hack/helm/nginx-ingress/nginx-ingress-1.34.2.yaml stable/nginx-ingress -n ingress-nginx
```

## NGINX Ingress Controllers (kubernetes-ingress)

```
helm repo add nginx-stable https://helm.nginx.com/stable
helm repo update
helm install nginx-ingress -f https://ysicing.me/hack/helm/hack/helm/nginxnc-ingress/nginx-ingress-0.4.3.yaml nginx-stable/nginx-ingress -n ingress-nginx
# 或者
kubectl apply -f https://ysicing.me/hack/k7s/install/nginx-ingress/nginx-ingress.yml
```

部署文档 [nginxinc/kubernetes-ingress v1.6.0](https://github.com/nginxinc/kubernetes-ingress/tree/v1.6.0/deployments)