---
title: "在TKE上使用Traefik Ingress"
date: 2022-01-10T21:08:31+08:00
description: 本文主要讲述在tke上部署traefik ingress
tags:
- ingress
- kubernetes
- tke
- traefik
---

<!-- truncate -->

> Traefik是一款优秀的边缘路由工具，兼容所有主流的集群技术。

具体如下特性:

- 原生支持服务发现、动态配置，可以自动watch后端变化同步到负载均衡，不需要重新加载配置

- 支持灵活配置可观性`logs`、`metrics`、`tracing`

- 提供dashboard功能

- 拥有丰富的高级特性: 灰度发布、流量复制、中间件、https等。

> 本文主要已最新稳定版本 `2.5.6`为例讲述在tke集群中安装traefik，后续关于traefik都已本版本为例

## 前提条件

- 已经ready集群的tke集群或者k3s集群,(后面会简单说下k3s单节点集群安装)
- 已配置好`kubectl`
- 已安装`helm`
- 已安装 [ergo](https://github.com/ysicing/ergo)

### 安装traefik

1. 添加traefik helm仓库

```bash
helm repo add traefik https://helm.traefik.io/traefik
helm repo update
# 下载helm包并解压
helm pull traefik/traefik --untar 
```

2. tke集群准备一个闲置的slb，获取slbid待用

3. 安装`jaeger-operator`

```bash
kubectl create namespace observability
ergo ops wget  https://github.com/jaegertracing/jaeger-operator/releases/download/v1.29.0/jaeger-operator.yaml
kubectl create -f /root/.ergo/tmp/jaeger-operator.yaml -n observability
```

4. 安装`jaegertracing` all-in-one

> 测试使用，生产使用可考虑高可用部署

```yaml
apiVersion: jaegertracing.io/v1
kind: Jaeger
metadata:
  name: simplest
  namespace: observability
spec:
  strategy: allInOne
  allInOne:
    image: jaegertracing/all-in-one:latest
  ingress:
    enabled: true
    hosts:
      - jaeger-x.external.ysicing.me
    annotations:
      kubernetes.io/ingress.class: traefik
      traefik.ingress.kubernetes.io/router.entrypoints: websecure
      traefik.ingress.kubernetes.io/router.tls: "true"
      traefik.ingress.kubernetes.io/router.tls.certresolver: myresolver
```

将上述yaml保存为`jaeger.yaml`

```bash
kubectl apply -n observability -f ./observability/jaeger.yaml
```

5. 安装gateway api

启用实验性 Kubernetes 网关,需要提前安装。具体可以参考官方文档[Traefik & Kubernetes with Gateway API](https://doc.traefik.io/traefik/providers/kubernetes-gateway/),后面也会专门介绍.

```bash
kubectl kustomize "github.com/kubernetes-sigs/gateway-api/config/crd?ref=v0.3.0" \
| kubectl apply -f -
```

6. 配置traefik value.yaml

```yaml
image:
  name: traefik
  tag: ""
  pullPolicy: IfNotPresent
deployment:
  enabled: true
  kind: Deployment
  replicas: 1
  terminationGracePeriodSeconds: 60
  minReadySeconds: 0
  podAnnotations: 
    tke.cloud.tencent.com/networks: "tke-route-eni" # 在 VPC-CNI 与 Global Router 两种网络模式混用的情况下，显示声明 Pod 要使用弹性网卡，与以下 eni-ip 的 request 与 limit 一起配合使用

ingressClass:
  enabled: true
  isDefaultClass: true

pilot:
  enabled: false

experimental:
  plugins:
    enabled: true
  kubernetesGateway:
    enabled: true
    appLabelSelector: "traefik"

ingressRoute:
  dashboard:
    enabled: true
    annotations:
      kubernetes.io/ingress.class: traefik

rollingUpdate:
  maxUnavailable: 1
  maxSurge: 1


#
# Configure providers
#
providers:
  kubernetesCRD:
    enabled: true
    allowCrossNamespace: true
    allowExternalNameServices: true
    ingressClass: traefik

  kubernetesIngress:
    enabled: true
    allowExternalNameServices: true
    publishedService:
      enabled: true # 让 Ingress 的外部 IP 地址状态显示为 Traefik 的 LB IP 地址
logs:
  general:
    level: ERROR
  access:
    enabled: true
    filters: 
      # statuscodes: "200,300-302" #设置只保留指定状态码范围内的访问日志
      retryattempts: true # 设置代理访问重试失败时，保留访问日志
      minduration: 10ms # 设置保留请求时间超过指定持续时间的访问日志
    fields:
      general:
        defaultmode: keep # 设置默认日志输出模式，keep表示保留所有日志字段，drop表示不保留日志字段
        names: 
          ClientUsername: drop
      headers:
        defaultmode: keep # 设置 Header 中字段是否保留
        names: 
          User-Agent: redact
          Authorization: drop
          Content-Type: keep

metrics:
  prometheus:
    entryPoint: metrics

globalArguments:
  - "--global.checknewversion"
  - "--global.sendanonymoususage"

additionalArguments: 
   - "--providers.kubernetesingress.ingressclass=traefik"
   - "--entryPoints.web.proxyProtocol.insecure"
   - "--api=true"
   - "--certificatesresolvers.myresolver.acme.email=ysicing@you.mail"
   - "--certificatesresolvers.myresolver.acme.storage=/data/acme.json"
  #- "--certificatesresolvers.myresolver.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory"
   - "--certificatesresolvers.myresolver.acme.tlschallenge=true"
   - "--certificatesresolvers.myresolver.acme.httpchallenge=true"
   - "--certificatesresolvers.myresolver.acme.httpchallenge.entrypoint=web"
  #- "--certificatesresolvers.myresolver.acme.dnschallenge=false"
   - "--tracing.jaeger=true"
   - "--tracing.jaeger.samplingServerURL=http://simplest-agent.observability.svc:5778/sampling"
   - "--tracing.jaeger.localAgentHostPort=simplest-agent.observability.svc:6831"
   - "--tracing.jaeger.collector.endpoint=http://simplest-collector.observability.svc:14268/api/traces?format=jaeger.thrift"
  #- "--log.level=DEBUG"

ports:
  # The name of this one can't be changed as it is used for the readiness and
  # liveness probes, but you can adjust its config to your liking
  traefik:
    port: 9000
    expose: false
    exposedPort: 9000
    protocol: TCP
  web:
    port: 8000
    expose: true
    exposedPort: 80
    protocol: TCP
    redirectTo: websecure # http重定向https, 内置中间件
  websecure:
    port: 8443
    expose: true
    exposedPort: 443
    protocol: TCP
    tls: #开启默认tls
      enabled: false
      # this is the name of a TLSOption definition
      options: ""
      certResolver: ""
      domains: []
  metrics:
    port: 9100
    expose: false
    exposedPort: 9100
    protocol: TCP

service:
  enabled: true
  type: LoadBalancer
  annotations: 
    service.kubernetes.io/tke-existed-lbid: lb-xxx # 闲置slb id
    service.cloud.tencent.com/direct-access: "true" # 网关类的应用建议使用 LB 直通 Pod (绕过 NodePort)。若使用 VPC-CNI 与 Global Router 两种网络模式混用，用此注解来显示声明 LB 直绑 Pod (绕过 NodePort); 若创建集群时就选的 VPC-CNI 网络模式，则不需要显示声明 (默认 LB 直通 Pod)。详情请参见官方文档 https://cloud.tencent.com/document/product/457/48793
    service.cloud.tencent.com/enable-grace-shutdown: "true"  # 表示使用优雅停机

persistence:
  enabled: true
  name: data
#  existingClaim: ""
  accessMode: ReadWriteOnce
  size: 128Mi
  # storageClass: ""
  path: /data
  annotations: {}
  # subPath: "" # only mount a subpath of the Volume into the pod

rbac:
  enabled: true
  namespaced: false
podSecurityPolicy:
  enabled: false
resources: 
  requests:
    cpu: "100m"
    memory: "50Mi"
    tke.cloud.tencent.com/eni-ip: "1"
  limits:
    cpu: "1000m"
    memory: "1500Mi"
    tke.cloud.tencent.com/eni-ip: "1"
affinity: {}

# host默认需要配置，默认不需要
securityContext:
  capabilities:
    drop: [ALL]
    # add: [NET_BIND_SERVICE]
  readOnlyRootFilesystem: true
  runAsGroup: 65532 #0
  runAsNonRoot: true #false
  runAsUser: 65532 #0

podSecurityContext:
  fsGroup: 65532 #0
```

安装traefik

```bash
# 编辑默认的values.yaml
kubectl create ns traefik-v2
helm upgrade -i  --namespace=traefik-v2 traefik ./traefik
```

## 使用

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name:  whoami
  namespace: traefik-v2
  labels:
    app:  whoami
spec:
  selector:
    matchLabels:
      app: whoami
  replicas: 2
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: whoami
    spec:
      # initContainers:
        # Init containers are exactly like regular containers, except:
          # - Init containers always run to completion.
          # - Each init container must complete successfully before the next one starts.
      containers:
      - name:  whoami
        image:  traefik/whoami
        resources:
          requests:
            cpu: 100m
            memory: 100Mi
          limits:
            cpu: 100m
            memory: 100Mi
        livenessProbe:
          tcpSocket:
            port: 80
          initialDelaySeconds: 5
          timeoutSeconds: 5
          successThreshold: 1
          failureThreshold: 3
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /_status/healthz
            port: 80
          initialDelaySeconds: 5
          timeoutSeconds: 2
          successThreshold: 1
          failureThreshold: 3
          periodSeconds: 10
        ports:
        - containerPort:  80
          name:  whoami
      restartPolicy: Always
---
apiVersion: v1
kind: Service
metadata:
  name: whoami
  namespace: traefik-v2
spec:
  selector:
    app: whoami
  type: ClusterIP
  ports:
  - name: whoami
    protocol: TCP
    port: 80
    targetPort: 80
---
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: whoami
  namespace: traefik-v2
  annotations:
    kubernetes.io/ingress.class: traefik
spec:
  entryPoints:
    - websecure
  routes:
  - match: Host(`whoami.internal-pre.ysicing.me`)
    kind: Rule
    services:
    - name: whoami
      port: 80
  tls:
    certResolver: myresolver
    # secretName: self-tls
    # 自签证书
    # openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout tls.key -out tls.crt -subj "/CN=whoami.internal-pre.ysicing.me"
    # kubectl create secret tls self-tls --cert=tls.crt --key=tls.key -n traefik-v2
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: whoami
  namespace: traefik-v2
  annotations:
    kubernetes.io/ingress.class: traefik
    traefik.ingress.kubernetes.io/router.entrypoints: websecure
    traefik.ingress.kubernetes.io/router.tls: "true"
    traefik.ingress.kubernetes.io/router.tls.certresolver: myresolver
    # traefik.ingress.kubernetes.io/router.middlewares: traefik-v2-http2https@kubernetescrd
spec:
  rules:
  - host: whoami2.internal-pre.ysicing.me
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: whoami
            port:
              number: 80
```

apply到集群访问测试

```http
Hostname: whoami-57fd8795c-4s55f
IP: 127.0.0.1
IP: 10.52.37.48
RemoteAddr: 10.0.16.12:37954
GET / HTTP/1.1
Host: whoami2.internal-pre.ysicing.me
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.35 Safari/537.36 Edg/96.0.1054.13
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Dnt: 1
Sec-Ch-Ua: " Not A;Brand";v="99", "Chromium";v="96", "Microsoft Edge";v="96"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "macOS"
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: cross-site
Sec-Fetch-User: ?1
Uber-Trace-Id: 2310a2ad4e9d5245:5b38aa949db62245:2310a2ad4e9d5245:1
Upgrade-Insecure-Requests: 1
X-Forwarded-For: 101.35.53.4
X-Forwarded-Host: whoami2.internal-pre.ysicing.me
X-Forwarded-Port: 443
X-Forwarded-Proto: https
X-Forwarded-Server: sh-pre
X-Real-Ip: 101.35.53.4
```
