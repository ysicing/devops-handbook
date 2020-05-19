---
title: "helm部署docker registry"
date: 2020-05-18T22:55:18+08:00
description: "helm部署docker registry"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- 
series:
-
categories: 
- helm
image:
---

## 部署docker registry

> 最近大陆push镜像老是超时，于是想自建一个，使用helm方式, 和drone安装方式类似

### 部署

```
helm pull stable/docker-registry
tar xf docker-registry-1.9.1.tgz && cd docker-registry/
# 编辑values.yaml,自定义配置
```

```yaml
# 注释部分为调整
replicaCount: 1
updateStrategy:
podAnnotations: {}
podLabels: {}
image:
  repository: registry
  tag: 2.7.1
  pullPolicy: IfNotPresent
service:
  name: registry
  type: ClusterIP
  port: 5000
  annotations: {}
ingress:
  enabled: true # 启用ingress
  path: /
  hosts:
    - hub.local.godu.dev # 域名
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: "0" # k8s ingress 413
    nginx.org/client-max-body-size: "0" # nginxnc ingress 413
  labels: {}
  tls:
    - secretName: godu.dev # 证书
      hosts:
        - hub.local.godu.dev # 域名
resources: {}
persistence:
  accessMode: 'ReadWriteOnce'
  enabled: true
  size: 5Gi
  existingClaim: registry # 同drone
storage: filesystem
secrets:
  haSharedSecret: ""
  htpasswd: ""
configData:
  version: 0.1
  log:
    fields:
      service: registry
  storage:
    cache:
      blobdescriptor: inmemory
  http:
    addr: :5000
    headers:
      X-Content-Type-Options: [nosniff]
  health:
    storagedriver:
      enabled: true
      interval: 10s
      threshold: 3
securityContext:
  enabled: true
  runAsUser: 1000
  fsGroup: 1000
priorityClassName: ""
podDisruptionBudget: {}
nodeSelector: {}
tolerations: []
extraVolumeMounts: []
extraVolumes: []
```

deploy

```
helm install registry -f values.yaml stable/docker-registry
```