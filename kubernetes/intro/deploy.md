## 部署第一个应用

```yaml
# nginx.yaml
apiVersion: apps/v1	#与k8s集群版本有关，使用 kubectl api-versions 即可查看当前集群支持的版本
kind: Deployment	#该配置的类型，我们使用的是 Deployment
metadata:	        #译名为元数据，即 Deployment 的一些基本属性和信息
  namespace: default # 命名空间
  name: nginx-deployment	#Deployment 的名称
  labels:	    #标签，可以灵活定位一个或多个资源，其中key和value均可自定义，可以定义多组，目前不需要理解
    app: nginx	#为该Deployment设置key为app，value为nginx的标签
spec:	        #这是关于该Deployment的描述，可以理解为你期待该Deployment在k8s中如何使用
  replicas: 1	#使用该Deployment创建一个应用程序实例
  #strategy: #滚动策略 最多新增一个，最小下线一个
  #  rollingUpdate:
  #    maxSurge: 1
  #    maxUnavailable: 1
  #  type: RollingUpdate 
  selector:	    #标签选择器，与上面的标签共同作用，目前不需要理解
    matchLabels: #选择包含标签app:nginx的资源
      app: nginx
  template:	    #这是选择或创建的Pod的模板
    metadata:	#Pod的元数据
      labels:	#Pod的标签，上面的selector即选择包含标签app:nginx的Pod
        app: nginx
    spec:	    #期望Pod实现的功能（即在pod中部署）
      containers:	#生成container，与docker中的container是同一种
      - name: nginx	#container的名称
        image: nginx:1.17.4-alpine	#使用镜像nginx创建container，该container默认80端口可访问
```

部署应用

```
kubectl apply -f nginx.yaml
deployment.apps/nginx-deployment created
```

查看部署结果

```
# 默认ns就是default可省却
kubectl get deployments -n default
NAME               READY   UP-TO-DATE   AVAILABLE   AGE
nginx-deployment   1/1     1            1           41s

kubectl get pods
NAME                               READY   STATUS    RESTARTS   AGE
nginx-deployment-cffbc65cd-kh5zs   1/1     Running   0          77s
```

`Deployment`是pod控制器

常见pod控制器

```
守护型:
    无状态非系统级应用: Deployment (如nginx)
    无状态系统级应用: DaemonSet (如日志监控收集端，每个node节点仅且需要跑一个pod)
    有状态应用: statefulSet (数据库类应用如mysql等)
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

kubectl describe deploy nginx-deployment 获取default租户deployment类型且名为nginx-deployment的详细信息

# 看pod日志，类似docker logs
kubectl logs Pod名称 
kubectl logs nginx-deployment-cffbc65cd-kh5zs 查看default租户下pod名为nginx-deployment-cffbc65cd-kh5zs的日志

# 进入容器，类型docker exec
kubectl exec -it Pod名称 操作命令

kubectl exec -it nginx-deployment-cffbc65cd-kh5zs ash
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

# nginx-svc.yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service	#Service 的名称
  labels:     	#Service 自己的标签
    app: nginx	#为该 Service 设置 key 为 app，value 为 nginx 的标签
spec:	    #这是关于该 Service 的定义，描述了 Service 如何选择 Pod，如何被访问
  selector:	    #标签选择器
    app: nginx	#选择包含标签 app:nginx 的 Pod
  ports:
  - name: nginx-port	#端口的名字
    protocol: TCP	    #协议类型 TCP/UDP
    port: 80	        #集群内的其他容器组可通过 80 端口访问 Service
    nodePort: 32600   #通过任意节点的 32600 端口访问 Service
    targetPort: 80	#将请求转发到匹配 Pod 的 80 端口
  type: NodePort	#Serive的类型，ClusterIP/NodePort/LoaderBalancer
```

生效

```
kubectl apply -f nginx-svc.yaml
service/nginx-service created
```

查看service，通过之前的文档

```
kubectl get svc nginx-service
NAME            TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
nginx-service   NodePort   10.96.177.127   <none>        80:32600/TCP   58s

Name:                     nginx-service
Namespace:                default
Labels:                   app=nginx
Annotations:              kubectl.kubernetes.io/last-applied-configuration:
                            {"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"app":"nginx"},"name":"nginx-service","namespace":"default"},"s...
Selector:                 app=nginx
Type:                     NodePort
IP:                       10.96.177.127
Port:                     nginx-port  80/TCP
TargetPort:               80/TCP
NodePort:                 nginx-port  32600/TCP
Endpoints:                192.168.102.19:80
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>
```

测试服务访问

```
# 在集群节点
curl -I 192.168.102.19
HTTP/1.1 200 OK
curl -I 10.96.177.127
HTTP/1.1 200 OK
curl -I 10.147.20.50:32600 # 10.147.20.50 为Node节点ip
HTTP/1.1 200 OK
```

那么问题来了，如果想通过clusterip方式提供对外服务，该怎么做？

```
# nginx-ingress.yaml
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  labels:
    app: nginx # 为Ingress设置labels
  name: nginx-ingress # ingress名
  namespace: default
spec:
  rules:
    - host: local.ysicing.me # 域名
      http:
        paths:
          - backend:
              serviceName: nginx-service # nginx的 service名
              servicePort: nginx-port # nginx的service定义的port
            path: / #路径
```

生效

```
kubectl apply -f nginx-ingress.yaml
ingress.networking.k8s.io/nginx-ingress created

kubectl get ing
NAME            HOSTS              ADDRESS   PORTS     AGE
nginx-ingress   local.ysicing.me             80        30s
```

验证ingress

```
# local.ysicing.me 已经配置了hosts
curl -I local.ysicing.me
HTTP/1.1 200 OK
```

这时候流量增加，怎么快速伸缩应用。

### 伸缩应用

伸缩 的实现可以通过更改 nginx.yaml 文件中部署的 replicas（副本数）来完成

```
# replicas: 1 ---> replicas: 4
# 改完生效
kubectl apply -f nginx.yaml
deployment.apps/nginx-deployment configured

kubectl get pods -l app=nginx
NAME                               READY   STATUS    RESTARTS   AGE
nginx-deployment-cffbc65cd-gw69m   1/1     Running   0          29s
nginx-deployment-cffbc65cd-kh5zs   1/1     Running   0          36m
nginx-deployment-cffbc65cd-p9pn8   1/1     Running   0          29s
nginx-deployment-cffbc65cd-vlj98   1/1     Running   0          29s

# 修改了 Deployment 的 replicas 为 4 后，Kubernetes 又为该 Deployment 创建了 3 新的 Pod，这 4 个 Pod 有相同的标签。因此nginx Service 通过标签选择器与新的 Pod建立了对应关系，将访问流量通过负载均衡在 4 个 Pod 之间进行转发

kubectl describe svc/nginx-service
Name:                     nginx-service
Namespace:                default
Labels:                   app=nginx
Annotations:              kubectl.kubernetes.io/last-applied-configuration:
                            {"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"app":"nginx"},"name":"nginx-service","namespace":"default"},"s...
Selector:                 app=nginx
Type:                     NodePort
IP:                       10.96.177.127
Port:                     nginx-port  80/TCP
TargetPort:               80/TCP
NodePort:                 nginx-port  32600/TCP
Endpoints:                192.168.102.19:80,192.168.102.20:80,192.168.121.149:80 + 1 more...
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>
```

### 最后

```yaml
陈述式：
    kubectl create -f xx.yaml
        
申明式（建议使用）：
    kubectl apply -f xx.yaml
```

- pod容器如果未发生调度，重启容器ip是不会改变的

