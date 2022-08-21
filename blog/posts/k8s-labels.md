---
title: "k8s标签和选择器"
date: 2020-05-18T22:55:18+08:00
description: "k8s标签和选择器"
tags:
- kubernetes
---

<!-- truncate -->

格式要求：

```
有效标签值必须为 63 个字符或更少，并且必须为空或以字母数字字符（[a-z0-9A-Z]）开头和结尾，中间可以包含破折号（-）、下划线（_）、点（.）和字母或数字
```

### 节点调度nodeSelector

```bash
# 打label
kubectl label nodes <node-name> <label-key>=<label-value>
# 显示label
kubectl get node --show-labels
```

pod调度到节点

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    env: test
spec:
  containers:
  - name: nginx
    image: nginx
    imagePullPolicy: IfNotPresent
  nodeSelector:
    disktype: ssd
```
