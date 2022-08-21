---
title: "kubectl plugin插件机制初体验之krew"
date: 2020-05-18T22:55:18+08:00
description: "kubectl plugin插件机制初体验之krew"
tags:
- krew
- kubernetes
---

<!-- truncate -->

## kubectl plugin插件机制初体验之krew

### 插件机制

这个早就已经GA了，其作用允许开发者以独立的二进制或脚本形式发布自定义的kubectl子命令, 灵活快速操作k8s

插件不限制语言，只需将脚本或二进制可执行文件以`kubectl-<plugin-name>`的前缀放到PATH中即可.

#### 官方示例

官方Go示例辅助库 [https://github.com/kubernetes/cli-runtime.git](https://github.com/kubernetes/cli-runtime.git)

不太简单的官方示例插件 [https://github.com/kubernetes/sample-cli-plugin](https://github.com/kubernetes/sample-cli-plugin)

#### 示例插件

```
mkdir /usr/local/k8s
export PATH=$PATH:/usr/local/k8s
```

示例插件如下：
```
root@k8s1:~# cat /usr/local/k8s/kubectl-demo
#!/bin/bash

echo $1
```

赋予执行权限 

```
chmod +x /usr/local/k8s/kubectl-demo
```

运行测试:

```
root@k8s1:~# kubectl demo 666
666

root@k8s1:~# kubectl plugin list
The following compatible plugins are available:

/usr/local/k8s/kubectl-demo
```

`kubectl plugin list` 可以查看PATH中查看有哪些插件

### krew

Package manager for kubectl plugins -- [krew](https://krew.dev)

#### 安装krew

```
# Bash and ZSH

(
  set -x; cd "$(mktemp -d)" &&
  curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/download/v0.3.4/krew.{tar.gz,yaml}" &&
  tar zxvf krew.tar.gz &&
  KREW=./krew-linux_amd64 &&
  "$KREW" install --manifest=krew.yaml --archive=krew.tar.gz &&
  "$KREW" update
)

# .bashrc/.zshrc
export PATH=$PATH:/usr/local/k8s:${KREW_ROOT:-$HOME/.krew}/bin
```

查看当前可用的kubectl plugin，发现多了一个kubect-krew

```
root@k8s1:~# kubectl plugin list
The following compatible plugins are available:

/usr/local/k8s/kubectl-demo
/root/.krew/bin/kubectl-krew
```

#### krew使用

```
kubectl krew
krew is the kubectl plugin manager.
You can invoke krew through kubectl: "kubectl krew [command]..."

Usage:
  krew [command]

Available Commands:
  help        Help about any command
  info        Show information about a kubectl plugin
  install     Install kubectl plugins
  list        List installed kubectl plugins
  search      Discover kubectl plugins
  uninstall   Uninstall plugins
  update      Update the local copy of the plugin index
  upgrade     Upgrade installed plugins to newer versions
  version     Show krew version and diagnostics

Flags:
  -h, --help      help for krew
  -v, --v Level   number for the log level verbosity

Use "krew [command] --help" for more information about a command.
```

#### 初体验

```
root@k8s1:~# kubectl get pods
No resources found in default namespace.
root@k8s1:~# kubectl krew install change-ns
Installing plugin: change-ns
Installed plugin: change-ns
root@k8s1:~# kubectl krew list
PLUGIN     VERSION
change-ns  v1.0.0
krew       v0.3.3
root@k8s1:~# kubectl change-ns nginx-ingress
namespace changed to "nginx-ingress"
root@k8s1:~# kubectl get pod
root@k8s1:~#  kubectl get pod
NAME                  READY   STATUS              RESTARTS   AGE
nginx-ingress-rfswh   1/1     Running             0          2m6s
nginx-ingress-v6c4l   1/1     Running             0          2m6s
```
