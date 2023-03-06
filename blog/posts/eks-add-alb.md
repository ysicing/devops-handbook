---
title: 配置AWS Load Balancer Controller 附加组件
date: 2022-05-25T22:55:18+08:00
description: tke集群禁止调度注意事项
tags:
- k8s
- eks
---

AWS Load Balancer Controller 管理适用于 Kubernetes 集群的 AWS 弹性负载均衡器

<!-- truncate -->

- 支持应用负载均衡ALB
- 支持网络负载均衡NLB

## 安装

:::info
默认集群名: `demo-us-eks-prod-01`, 需要自行替换
:::

### 创建IAM Policy

```bash
curl -o iam_policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.3/docs/install/iam_policy.json

aws iam create-policy \
    --policy-name AWSLoadBalancerControllerIAMPolicy \
    --policy-document file://iam_policy.json
```

### 创建IAM角色

```bash
eksctl create iamserviceaccount \
  --cluster=demo-us-eks-prod-01 \
  --namespace=kube-system \
  --name=aws-load-balancer-controller \
  --role-name "AmazonEKSLoadBalancerControllerRole" \
  --attach-policy-arn=arn:aws:iam::<根ID>:policy/AWSLoadBalancerControllerIAMPolicy \
  --approve
```

### 安装cert-manager

```bash
kubectl apply \
    --validate=false \
    -f https://github.com/jetstack/cert-manager/releases/download/v1.5.4/cert-manager.yaml
```

### 安装控制器

```bash
curl -Lo v2_4_3_full.yaml https://github.com/kubernetes-sigs/aws-load-balancer-controller/releases/download/v2.4.3/v2_4_3_full.yaml
# 去除默认账户, 上面创建角色时已经生成
sed -i.bak -e '480,488d' ./v2_4_3_full.yaml
# 修改自己集群名
sed -i.bak -e 's|your-cluster-name|demo-us-eks-prod-01|' ./v2_4_3_full.yaml
# 生效
kubectl apply -f v2_4_3_full.yaml
# 设置ingresclass
curl -Lo v2_4_3_ingclass.yaml https://github.com/kubernetes-sigs/aws-load-balancer-controller/releases/download/v2.4.3/v2_4_3_ingclass.yaml
kubectl apply -f v2_4_3_ingclass.yaml
```
