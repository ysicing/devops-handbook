---
title: eks集群添加管理员
date: 2022-05-25T22:55:18+08:00
description: eks集群添加管理员
tags:
- k8s
- eks
- eksctl
---

<!-- truncate -->

## 添加管理员

```bash
eksctl create iamidentitymapping     --cluster demo-us-eks-prod-01     --region=us-east-1     --arn arn:aws:iam::<根ID>:user/demo --group system:masters     --no-duplicate-arns
```
