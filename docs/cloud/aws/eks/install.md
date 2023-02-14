---
title: 创建eks集群
tags:
- k8s
- eks
- aws
---

> 所有操作均在境外环境操作，避免调用aws api超时导致失败。

## 生成aws secrets

创建一个子账号生成secrets, 给予管理员权限

```bash
cat ~/.aws/credentials

[default]
aws_access_key_id=<id>
aws_secret_access_key=<key>
```

## 安装 aws-iam-authenticator

```bash
# 下载aws-iam-authenticator
curl -o aws-iam-authenticator https://s3.us-west-2.amazonaws.com/amazon-eks/1.21.2/2021-07-05/bin/linux/amd64/aws-iam-authenticator
# 下载校验文件
curl -o aws-iam-authenticator.sha256 https://s3.us-west-2.amazonaws.com/amazon-eks/1.21.2/2021-07-05/bin/linux/amd64/aws-iam-authenticator.sha256
# 校验
openssl sha1 -sha256 aws-iam-authenticator
# 安装到path目录下
mv aws-iam-authenticator /usr/local/bin/aws-iam-authenticator
chmod +x /usr/local/bin/aws-iam-authenticator
# 测试
aws-iam-authenticator --help
```

## 安装aws

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
./aws/install
```

## 安装kubectl命令

安装集群中会调用kubectl命令

```bash
# 从官方下载
wget https://dl.k8s.io/v1.22.12/kubernetes-client-linux-amd64.tar.gz
tar xzvfC kubernetes-client-linux-amd64.tar.gz /tmp
mv /tmp/kubernetes/client/bin/kubectl /usr/local/bin
rm -rf kubernetes-client-linux-amd64.tar.gz
rm -rf /tmp/kubernetes
# 或者从aws下载，两者差别不大，最好不要跨多个版本
curl -o /usr/local/bin/kubectl https://s3.us-west-2.amazonaws.com/amazon-eks/1.22.6/2022-03-09/bin/linux/amd64/kubectl
chmod +x /usr/local/bin/kubectl
# 验证
kubectl version | grep Client | cut -d : -f 5
```

## 安装helm

```bash
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh
```

## 安装eksctl

```bash
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
 mv /tmp/eksctl /usr/local/bin
# 测试
eksctl version
0.108.0
```

## 创建aws eks集群

> 仅供参考

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  # eks集群名
  name: demo-us-eks-prod-01
  # eks集群所在region
  region: us-east-1
  # eks 版本
  # version: "1.22"

# 定义ipv4, 支持ipv6
# kubernetesNetworkConfig:
#   ipFamily: IPv4

vpc:
  # 指定子网
  cidr: 10.10.0.0/16
  # 限制public api访问
  # publicAccessCIDRs: ["1.2.3.4/32"]
  # 开启api访问
  clusterEndpoints:
    publicAccess: true
    privateAccess: true
  # nat gateway
  nat:
    gateway: Single  #HighlyAvailable

# 集群插件
addons:
  - name: vpc-cni
  - name: coredns
  - name: kube-proxy

iam:
  withOIDC: true

# 全局可用区，也可以针对某个nodegroup单独设置
availabilityZones: ["us-east-1a", "us-east-1b"]

# 节点池
nodeGroups:
    # 系统节点
  - name: system-1-a    # worker nodegroup名字
    labels: { nodetype: system }  # worker 节点的labels
    instanceType: c6g.2xlarge   # 计划使用的EC2类型
    minSize: 1      # autoscaling 最小值
    desiredCapacity: 1  # autoscaling 常规值
    maxSize: 2 # autoscaling 最大值
    volumeSize: 200 ##系统系统盘大小
    volumeType: gp3 ##系统盘类型
    # availabilityZones: ["us-east-1a", "us-east-1b"] ##nodegroup所在AZ
    privateNetworking: true ##是否使用私有网络
    amiFamily: AmazonLinux2
    containerRuntime: containerd
    securityGroups: ##是否使用自定义安全组
      withShared: true
      withLocal: true
      # attachIDs: ["sg-xxxx"]   ##自定义安全组的名字创建一个默认的安全组
    ssh:
      publicKeyPath: /root/.ssh/id_rsa.pub  ##可以ssh到worker的key名字
    tags:
      'Project': 'Demo' ##定义一个tag，计费使用
      'k8s.io/cluster-autoscaler/enabled': 'true'   ##定义自动扩容的tag
      'k8s.io/cluster-autoscaler/nuclearport-ohio-eks-prod': 'owned'    ##定义自动扩容的tag
    taints:
        uessystem: "true:NoSchedule"    ## 定义个污点
    iam:
      withAddonPolicies:    ##选择eks需要使用的iam权限
        #imageBuilder: true
        autoScaler: true
        externalDNS: true
        certManager: true
        #appMesh: true
        ebs: true
        #fsx: true
        efs: true
        albIngress: true
        #xRay: true
        cloudWatch: true

 # worker节点(一个从0开始的弹性集群)
  - name: worker-1-a    ##worker nodegroup名字
    labels:
      nodetype: worker
    instanceType: c6g.2xlarge   ##计划使用的EC2类型
    minSize: 0      ##autoscaling 最小值
    desiredCapacity: 0  ##autoscaling 常规值
    maxSize: 5 ##autoscaling 最大值
    volumeSize: 200 ##系统系统盘大小
    volumeType: gp3 ##系统盘类型
    privateNetworking: true
    amiFamily: AmazonLinux2
    containerRuntime: containerd
    securityGroups:
      withShared: true
      withLocal: true
      # attachIDs: ["sg-xxxx"]
    ssh:
      # publicKeyName: 'xxxxx'  ##可以ssh到worker的key名字
      publicKeyPath: /root/.ssh/id_rsa.pub
    tags:
      'Project': 'Demo' ##tag
      'k8s.io/cluster-autoscaler/enabled': 'true'
      'k8s.io/cluster-autoscaler/nuclearport-ohio-eks-prod': 'owned'
      k8s.io/cluster-autoscaler/node-template/label/nodetype: worker
      k8s.io/cluster-autoscaler/node-template/taint/feaster: "true:NoSchedule"
    taints:
      useworker: "true:NoSchedule"
    iam:
      withAddonPolicies:
        #imageBuilder: true
        autoScaler: true
        externalDNS: true
        certManager: true
        #appMesh: true
        ebs: true
        #fsx: true
        efs: true
        albIngress: true
        #xRay: true
        cloudWatch: true

# 日志收集组件，类型cls日志收集
cloudWatch:
  clusterLogging:
    # enable specific types of cluster control plane logs
    enableTypes: ["audit", "authenticator", "controllerManager"]
    # all supported types: "api", "audit", "authenticator", "controllerManager", "scheduler"
    # supported special values: "*" and "all"
```

创建集群

```bash
# 大概耗时30-40分钟
eksctl create cluster -f demo.yaml --auto-kubeconfig
```

## 销毁集群

```bash
eksctl delete cluster -f demo.yaml --force
```
