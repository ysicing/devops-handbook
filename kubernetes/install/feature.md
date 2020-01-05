## 开启集群feature

### ttlSecondsAfterFinished

自动清理完成和失败的Job，目前该特性默认不启用。如何判断未启用,查看job资源，在spec里未发现`ttlSecondsAfterFinished`定义则表示未启用。

#### 启用

我的集群使用sealos安装的，其配置文件在 `/etc/kubernetes/manifests`下,分别调整 kube-apiserver.yaml,kube-controller-manager.yaml,kube-scheduler.yaml配置，新增

```
# 示例
spec:
  containers:
  - command:
    - kube-scheduler
    - --authentication-kubeconfig=/etc/kubernetes/scheduler.conf
    - --authorization-kubeconfig=/etc/kubernetes/scheduler.conf
    - --bind-address=127.0.0.1
    - --kubeconfig=/etc/kubernetes/scheduler.conf
    - --leader-elect=true
    - --feature-gates=TTLAfterFinished=true # 新增配置
    image: k8s.gcr.io/kube-scheduler:v1.17.0
```

调整完成后稍等片刻,相关pod会重建。