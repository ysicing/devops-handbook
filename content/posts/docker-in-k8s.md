---
title: "在k8s中使用docker in docker"
date: 2020-05-29T16:55:18+08:00
description: "使用docker in docker"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- docker
- kubernetes
series:
-
categories: 
- 
image:
---

## 部署

```yaml
# docker.yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: docker-api
  namespace: gaea-op
  annotations:
    k8s.gaea.me/workload: app
  labels:
    k8s.gaea.me/name: docker-api
spec:
  replicas: 1
  template:
    metadata:
      labels:
        k8s.gaea.me/name: docker-api
    spec:
      containers:
        - name: dockerd
          image: 'docker:18.09.9-dind'
          securityContext:
            privileged: true
        - name: docker-cli
          image: 'docker:18.09.9'
          env:
            - name: DOCKER_HOST
              value: tcp://127.0.0.1:2375
          command: ["/bin/sh"]
          args: ["-c", "docker info >/dev/null 2>&1; while [ $? -ne 0 ] ; do sleep 3; docker info >/dev/null 2>&1; done; docker pull library/busybox:latest; docker save -o busybox-latest.tar library/busybox:latest; docker rmi library/busybox:latest; while true; do sleep 86400; done"]
  selector:
    matchLabels:
      k8s.gaea.me/name: docker-api
  serviceName: docker-api
---
apiVersion: v1
kind: Service
metadata:
  name: docker-api
  namespace: gaea-op
spec:
  ports:
    - name: tcp-2375
      port: 2375
  clusterIP: None
  selector:
    k8s.gaea.me/name: docker-api
```

```bash
kubectl apply -f docker.yaml
```

## 使用

```bash
# docker api地址: docker-api-0.docker-api.gaea-op.svc.cluster.local
kubectl exec -it pods/docker-api-0   -n gaea-op -c docker-cli -- ash
/ # docker info
```

## go api操作