---
title: "k8s实践之部署第一个应用"
date: 2020-05-18T22:55:18+08:00
description: "k8s实践之部署第一个应用"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- kubernetes
series:
-
categories: 
- kubernetes
image:
---

## 部署第一个应用

```yaml
# https://sh.ysicing.me/k8s/demo/deploy.yaml
apiVersion: apps/v1    #与k8s集群版本有关，使用 kubectl api-versions 即可查看当前集群支持的版本
kind: Deployment    #该配置的类型，我们使用的是 Deployment
metadata:            #译名为元数据，即 Deployment 的一些基本属性和信息
  namespace: default # 命名空间
  name: demo-deployment    #Deployment 的名称
  labels:        #标签，可以灵活定位一个或多个资源，其中key和value均可自定义，可以定义多组，目前不需要理解
    app: demo    #为该Deployment设置key为app，value为demo的标签
spec:            #这是关于该Deployment的描述，可以理解为你期待该Deployment在k8s中如何使用
  replicas: 1    #使用该Deployment创建一个应用程序实例
  #strategy: #滚动策略 最多新增一个，最小下线一个
  #  rollingUpdate:
  #    maxSurge: 1
  #    maxUnavailable: 1
  #  type: RollingUpdate
  selector:        #标签选择器，与上面的标签共同作用，目前不需要理解
    matchLabels: #选择包含标签app:demo的资源
      app: demo
  template:        #这是选择或创建的Pod的模板
    metadata:    #Pod的元数据
      labels:    #Pod的标签，上面的selector即选择包含标签app:demo的Pod
        app: demo
    spec:        #期望Pod实现的功能（即在pod中部署）
      containers:    #生成container，与docker中的container是同一种
      - name: godemo    #container的名称
        image: ysicing/godemo    #使用镜像godemo创建container，该container默认80端口可访问
```

部署应用

```
kubectl apply -f https://sh.ysicing.me/k8s/demo/deploy.yaml
deployment.apps/demo-deployment created
```

查看部署结果

```
# 默认ns就是default可省却
kubectl get deployments -n default
NAME              READY   UP-TO-DATE   AVAILABLE   AGE
demo-deployment   1/1     1            1           2m54s

kubectl get pods
NAME                               READY   STATUS    RESTARTS   AGE
demo-deployment-59cd96d4d5-cjjwr   1/1     Running   0          3m17s
```

`Deployment`是pod控制器

常见pod控制器

```
守护型:
    无状态非系统级应用: Deployment (如nginx)
    无状态系统级应用: DaemonSet (如日志监控收集端，每个node节点仅且需要跑一个pod)
    有状态应用: StatefulSet (数据库类应用如mysql等)
非守护型:
    一次性任务: Job
    定时任务: CronJob
```

### 常用命令

```
# 获取资料
kubectl explain 类型(如pods)

# 获取资源信息
kubectl get 资源类型

kubectl get pods 获取default租户的所有pods资源列表
kubectl get nodes 获取节点资源列表
kubectl get deploy 获取default租户类型为deployment的资源列表

# 显示资源的详细信息
kubectl describe 资源类型 资源名称

kubectl describe deploy demo-deployment 获取default租户deployment类型且名为demo-deployment的详细信息

# 看pod日志，类似docker logs
kubectl logs Pod名称 
kubectl logs demo-deployment-59cd96d4d5-cjjwr 查看default租户下pod名为demo-deployment-59cd96d4d5-cjjwr的日志

# 进入容器，类型docker exec
kubectl exec -it Pod名称 操作命令

kubectl exec -it demo-deployment-59cd96d4d5-cjjwr ash
/ #
```

## 访问部署的应用

那么，部署完第一个应用又该如何访问?

Kubernetes 中的 Service（服务） 提供了这样的一个抽象层，它选择具备某些特征的 Pod（容器组）并为它们定义一个访问方式。

在创建Service的时候，通过设置配置文件中的 spec.type 字段的值，可以以不同方式向外部暴露应用程序，这里介绍常用的3种：

```
ClusterIP(默认): 集群内部可访问
NodePort: NAT方式,可以通过访问集群中任意节点+端口号的方式访问服务 <NodeIP>:<NodePort>,此时ClusterIP的访问方式仍然可用。
LoadBalancer: 负载均衡(依赖云访问)。此时 ClusterIP 和 NodePort 的访问方式仍然可用。
```

![ClusterIP方式](/images/k8s/clusterip.png)
![NodePort方式](/images/k8s/NodePort.png)
![LoadBalancer方式](/images/k8s/lb.png)

``` yaml
kubectl explain svc

# https://sh.ysicing.me/k8s/demo/svc.yaml
apiVersion: v1
kind: Service
metadata:
  name: demo-service	#Service 的名称
  labels:     	#Service 自己的标签
    app: demo	#为该 Service 设置 key 为 app，value 为 demo 的标签
spec:	    #这是关于该 Service 的定义，描述了 Service 如何选择 Pod，如何被访问
  selector:	    #标签选择器
    app: demo	#选择包含标签 app:demo 的 Pod
  ports:
  - name: demo-port	#端口的名字
    protocol: TCP	    #协议类型 TCP/UDP
    port: 80	        #集群内的其他容器组可通过 80 端口访问 Service
    nodePort: 32600   #通过任意节点的 32600 端口访问 Service
    targetPort: 80	#将请求转发到匹配 Pod 的 80 端口
  type: NodePort	#Serive的类型，ClusterIP/NodePort/LoaderBalancer
```

生效

```
kubectl apply -f https://sh.ysicing.me/k8s/demo/svc.yaml
service/demo-service created
```

查看service，通过之前的文档

```
kubectl get svc -l app=demo
NAME           TYPE       CLUSTER-IP    EXTERNAL-IP   PORT(S)        AGE
demo-service   NodePort   10.96.37.87   <none>        80:32600/TCP   55s

---

kubectl describe svc/demo-service

Name:                     demo-service
Namespace:                default
Labels:                   app=demo
Annotations:              kubectl.kubernetes.io/last-applied-configuration:
                            {"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"app":"demo"},"name":"demo-service","namespace":"default"},"spe...
Selector:                 app=demo
Type:                     NodePort
IP:                       10.96.37.87
Port:                     demo-port  80/TCP
TargetPort:               80/TCP
NodePort:                 demo-port  32600/TCP
Endpoints:                172.16.219.5:80
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>
```

测试服务访问

```
# 在集群节点
root@k8s1:~# curl 10.96.37.87
{"hostname":"demo-deployment-59cd96d4d5-cjjwr","ip":{"eth0":"172.16.219.5/32","lo":"127.0.0.1/8"}}
root@k8s1:~# curl 172.16.219.5
{"hostname":"demo-deployment-59cd96d4d5-cjjwr","ip":{"eth0":"172.16.219.5/32","lo":"127.0.0.1/8"}}
root@k8s1:~# curl 192.168.100.101:32600
{"hostname":"demo-deployment-59cd96d4d5-cjjwr","ip":{"eth0":"172.16.219.5/32","lo":"127.0.0.1/8"}}
root@k8s1:~# curl 192.168.100.102:32600
{"hostname":"demo-deployment-59cd96d4d5-cjjwr","ip":{"eth0":"172.16.219.5/32","lo":"127.0.0.1/8"}}
```

那么问题来了，如果想通过clusterip方式提供对外服务，该怎么做？

```
# https://sh.ysicing.me/k8s/demo/ing.yaml
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  labels:
    app: demo
  name: demo-ingress # ingress名
  namespace: default
spec:
  rules:
    - host: godemo.slb.k7s.xyz # 域名
      http:
        paths:
          - backend:
              serviceName: demo-service # godemo的 service名
              servicePort: demo-port # godemo的service定义的port
            path: / #路径
```

生效

```
kubectl apply -f https://sh.ysicing.me/k8s/demo/ing.yaml
ingress.networking.k8s.io/demo-ingress created

kubectl get ing
NAME           HOSTS                ADDRESS   PORTS   AGE
demo-ingress   godemo.slb.k7s.xyz             80      91s
```

验证ingress

```
curl godemo.slb.k7s.xyz      
{"hostname":"demo-deployment-59cd96d4d5-cjjwr","ip":{"eth0":"172.16.219.5/32","lo":"127.0.0.1/8"}}
```

这时候流量增加，怎么快速伸缩应用。

### 伸缩应用

伸缩 的实现可以通过更改 deploy.yaml 文件中部署的 replicas（副本数）来完成

```
# replicas: 1 ---> replicas: 4
# 改完生效
kubectl apply -f https://sh.ysicing.me/k8s/demo/deploy2.yaml
deployment.apps/demo-deployment configured

# 查看pod
kubectl get pods -l app=demo
NAME                               READY   STATUS    RESTARTS   AGE
demo-deployment-59cd96d4d5-78v28   1/1     Running   0          16s
demo-deployment-59cd96d4d5-cjjwr   1/1     Running   0          15m
demo-deployment-59cd96d4d5-mn7r8   1/1     Running   0          16s
demo-deployment-59cd96d4d5-mvxk2   1/1     Running   0          16s

# 修改了 Deployment 的 replicas 为 4 后，Kubernetes 又为该 Deployment 创建了 3 新的 Pod，这 4 个 Pod 有相同的标签。因此nginx Service 通过标签选择器与新的 Pod建立了对应关系，将访问流量通过负载均衡在 4 个 Pod 之间进行转发

Name:                     demo-service
Namespace:                default
Labels:                   app=demo
Annotations:              kubectl.kubernetes.io/last-applied-configuration:
                            {"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"app":"demo"},"name":"demo-service","namespace":"default"},"spe...
Selector:                 app=demo
Type:                     NodePort
IP:                       10.96.37.87
Port:                     demo-port  80/TCP
TargetPort:               80/TCP
NodePort:                 demo-port  32600/TCP
Endpoints:                172.16.109.71:80,172.16.109.72:80,172.16.219.5:80 + 1 more...
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>
```

验证效果,流量是负载到后端不同pod上

```
root@k8s1:~# curl godemo.slb.k7s.xyz
{"hostname":"demo-deployment-59cd96d4d5-mn7r8","ip":{"eth0":"172.16.109.71/32","lo":"127.0.0.1/8"}}
root@k8s1:~# curl godemo.slb.k7s.xyz
{"hostname":"demo-deployment-59cd96d4d5-cjjwr","ip":{"eth0":"172.16.219.5/32","lo":"127.0.0.1/8"}}
root@k8s1:~# curl godemo.slb.k7s.xyz
{"hostname":"demo-deployment-59cd96d4d5-78v28","ip":{"eth0":"172.16.219.6/32","lo":"127.0.0.1/8"}}
```


### 最后

```yaml
陈述式：
    kubectl create -f xx.yaml
        
申明式（建议使用）：
    kubectl apply -f xx.yaml
```

- pod容器如果未发生调度，重启容器ip是不会改变的

另外除了Service这种网络，还有`hostPort`,`hostNetwork`

```
hostPort：直接将容器的端口与所调度的节点上的端口路由，这样可以通过宿主机的IP加上来访问Pod了, Ingress就是这样的
hostNetwork：共享宿主机的网络名称空间
```

这里可以这么测试使用hostPort

```
kubectl apply -f https://sh.ysicing.me/k8s/demo/deploy3.yaml
kubectl get pods  -l app=demo -o wide
NAME                               READY   STATUS    RESTARTS   AGE    IP              NODE   NOMINATED NODE   READINESS GATES
demo-deployment-6c5664f4d6-s6w8v   1/1     Running   0          112s   172.16.109.68   k8s2   <none>           <none>

curl 666.slb.k7s.xyz:28080
{"hostname":"demo-deployment-6c5664f4d6-s6w8v","ip":{"eth0":"172.16.109.68/32","lo":"127.0.0.1/8"}}
```