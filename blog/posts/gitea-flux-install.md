---
title: 基于gitea安装flux
description: 本文主要记录本人安装flux
date: 2023-02-25T22:55:18+08:00
tags:
- k8s
- gitops
- flux
---

<!-- truncate -->

## 准备工作

- 安装flux
- 同步镜像到腾讯云镜像仓库

## 安装

```bash
flux bootstrap git --url=ssh://git@git.ysicing.net/cloud/fluxcd.git --registry ccr.ccs.tencentyun.com/k7scn --private-key-file ~/.ssh/id_rsa
```

## 校验

```bash
flux check
► checking prerequisites
✔ Kubernetes 1.24.10+k3s1 >=1.20.6-0
► checking controllers
✔ helm-controller: deployment ready
► ccr.ccs.tencentyun.com/k7scn/helm-controller:v0.29.0
✔ kustomize-controller: deployment ready
► ccr.ccs.tencentyun.com/k7scn/kustomize-controller:v0.33.0
✔ notification-controller: deployment ready
► ccr.ccs.tencentyun.com/k7scn/notification-controller:v0.31.0
✔ source-controller: deployment ready
► ccr.ccs.tencentyun.com/k7scn/source-controller:v0.34.0
► checking crds
✔ alerts.notification.toolkit.fluxcd.io/v1beta2
✔ buckets.source.toolkit.fluxcd.io/v1beta2
✔ gitrepositories.source.toolkit.fluxcd.io/v1beta2
✔ helmcharts.source.toolkit.fluxcd.io/v1beta2
✔ helmreleases.helm.toolkit.fluxcd.io/v2beta1
✔ helmrepositories.source.toolkit.fluxcd.io/v1beta2
✔ kustomizations.kustomize.toolkit.fluxcd.io/v1beta2
✔ ocirepositories.source.toolkit.fluxcd.io/v1beta2
✔ providers.notification.toolkit.fluxcd.io/v1beta2
✔ receivers.notification.toolkit.fluxcd.io/v1beta2
✔ all checks passed
```
