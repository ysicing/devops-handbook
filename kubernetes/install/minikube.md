## minikube安装k8s

```
# PROXY可以根据自己需要设置，可不设置
minikube start --memory 4096 --image-repository  registry.cn-hangzhou.aliyuncs.com/google_containers --docker-env HTTP_PROXY=http://192.168.99.1:7890 --docker-env HTTPS_PROXY=http://192.168.99.1:7890  --docker-env NO_PROXY=127.0.0.1/32,192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,localhost
```