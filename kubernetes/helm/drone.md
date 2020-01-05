## 使用Helm安装Drone

> 一个比较热门的轻量级CI/CD开源工具：[Drone](https://drone.io/)

### 简介

- Drone是用Go开发的开源轻量级CI/CD工具
- 使用简单的 YAML 配置文件来定义和执行 Docker 容器中定义的 Pipeline
- 构成简单,服务占用资源少
    - Server端负责身份认证，仓库配置，用户、Secrets 以及 Webhook 相关的配置
    - Agent端用于接受构建的作业和真正用于运行的 Pipeline 工作流
- 安装简单，支持主流Git托管服务(github,gitea等)
- 官方文档也很全

### 环境

- helm v3.0.2
- drone 1.6.1
- k8s 1.17.0

### 准备工作

注册[Github OAuth应用](https://github.com/settings/developers)

![drone github oauth应用](/images/drone/github.png)

获取到github oauth `Client ID`,`Client Secret`留用。


### 创建持久化存储

```yaml
# https://ysicing.me/hack/demo/pvc.yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: dronepv
spec:
  accessModes:
  - ReadWriteOnce
  capacity:
    storage: 2Gi
  persistentVolumeReclaimPolicy: Delete
  storageClassName: nfs-test
  nfs:
    server: 192.168.100.101
    path: /k8sdata/default-drone-pvc
---
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: dronepvc
  namespace: default
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 2Gi
  storageClassName: nfs-test
```

示例

```
# nfs 地址需要按需调整一下
kubectl apply -f https://ysicing.me/hack/demo/pvc.yaml
kubectl get pvc
```

### 安装

> 本文使用helm方式安装，因为需要对配置做些调整，需要自定义一些配置

```bash
helm repo update
# 获取最新的离线drone包
helm pull  stable/drone
tar xf drone-2.4.0.tgz && cd drone
# 编辑values.yaml
```

示例values.yaml如下

```yaml
# 有注释的地方说明有修改
images:
  server:
    repository: "docker.io/drone/drone"
    tag: 1.6.1
    pullPolicy: IfNotPresent
  agent:
    repository: "docker.io/drone/agent"
    tag: 1.6.1
    pullPolicy: IfNotPresent
  dind:
    repository: "docker.io/library/docker"
    tag: 18.06.1-ce-dind
    pullPolicy: IfNotPresent
service:
  httpPort: 80
  type: ClusterIP
  exposeGRPC: false
ingress:
  enabled: enabled # 启用
  hosts:
    - drone.godu.dev # 域名
  tls:
    - secretName: godu.dev # 证书，集群内已经证书的secret了，可以不启用，因为我的dev域名必须https访问
      hosts:
        - drone.godu.dev # 域名
sourceControl:
  provider: github # github
  secret:
  github:
    clientID: xxx # github oauth id xxx
    clientSecretKey: clientSecret
    clientSecretValue: xxxx # github oauth secret xxxx
    server: https://github.com
  gitlab:
    clientID:
    clientSecretKey: clientSecret
    clientSecretValue:
    server:
  gitea:
    clientID:
    clientSecretKey: clientSecret
    clientSecretValue:
    server:
  gogs:
    server:
  bitbucketCloud:
    clientID:
    clientSecretKey: clientSecret
    clientSecretValue:
  bitbucketServer:
    server:
    consumerKey: consumerKey
    privateKey: privateKey
    username:
    passwordKey: password
server:
  host: "drone.godu.dev"
  protocol: https
  rpcProtocol: http
  adminUser: ysicing # github 登录后就具有管理员权限
  alwaysAuth: false
  kubernetes:
    enabled: true # 运行 Drone 的任务的时候就是直接使用 Kubernetes 的 Job 资源对象来执行，而不是 Drone 的 agent.
  env:
    DRONE_LOGS_DEBUG: "false"
    DRONE_DATABASE_DRIVER: "sqlite3"
    DRONE_DATABASE_DATASOURCE: "/var/lib/drone/drone.sqlite"
  annotations: {}
  resources: {}
  affinity: {}
  nodeSelector: {}
  tolerations: []
  extraContainers: |
  extraVolumes: |
agent:
  env:
    DRONE_LOGS_DEBUG: "false"
  replicas: 1
  annotations: {}
  resources: {}
  livenessProbe: {}
  readinessProbe: {}
  affinity: {}
  nodeSelector: {}
  tolerations: []
dind:
  enabled: true
  driver: overlay2
  resources: {}
metrics:
  prometheus:
    enabled: true
persistence:
  enabled: true
  existingClaim: dronepvc # 刚刚创建的持久化 pvc
rbac:
  create: true
  apiVersion: v1
serviceAccount:
  create: true
  name:
```

部署drone

```bash
$ helm install drone -f values.yaml stable/drone

$ helm status drone

NAME: drone
LAST DEPLOYED: Sun Jan  5 20:30:00 2020
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
*********************************************************************************
***        PLEASE BE PATIENT: drone may take a few minutes to install         ***
*********************************************************************************
From outside the cluster, the server URL(s) are:
     http://drone.godu.dev
```

最后

```
root@k8s.cn1:~/drone/drone# kubectl get pods -l app=drone
NAME                                  READY   STATUS    RESTARTS   AGE
drone-drone-server-5bffbc56df-qzk28   1/1     Running   0          35m
root@k8s.cn1:~/drone/drone# kubectl get ing -l app=drone
NAME          HOSTS            ADDRESS   PORTS     AGE
drone-drone   drone.godu.dev             80, 443   36m
```

### 触发CI构建

```yaml
# .drone.yml
kind: pipeline
name: default

steps:
  - name: build
    image: golang:latest
    environment:
      GOPROXY: https://goproxy.cn
    commands:
      - CGO_ENABLED=0 go build 

  - name: docker
    image: plugins/docker
    settings:
      repo: ysicing/godemo
      use_cache: true
      username:
        from_secret: dockeruser
      password:
        from_secret: docker
    tags:
      - latest
    when:
      event: push
      branch: master
```

代码地址: [BeidouCloudPlatform/demo](https://github.com/BeidouCloudPlatform/demo/blob/master/.drone.yml)

![drone ci](/images/drone/ci.png)

![drone 详情页](/images/drone/d.png)

### Cli工具

```
brew install drone-cli
export DRONE_SERVER=https://drone.godu.dev
export DRONE_TOKEN=<token>
drone info
# 修复webhook，如果调整了域名，可以通过此命令修复webhook
drone repo repair  BeidouCloudPlatform/demo
```

### Job清理问题

因为使用Job的方式进行pipline操作，如果不启用`TTLAfterFinished`会导致job不会被自动清理。 开启feature请参考 [feature开启](/kubernetes/install/feature.md)

默认drone清理是300s