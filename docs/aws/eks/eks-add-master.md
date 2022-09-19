---
title: eks集群添加管理员
tags:
- k8s
- eks
- aws
---

## 添加管理员

```bash
eksctl create iamidentitymapping     --cluster demo-us-eks-prod-01     --region=us-east-1     --arn arn:aws:iam::<根ID>:user/demo --group system:masters     --no-duplicate-arns
```
