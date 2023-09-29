---
title: "傻瓜式教学: Debian安装k3s(长期维护版本)"
date: 2023-04-05T12:55:18+08:00
description: "傻瓜式教学: 如何在Debian上手动部署k3s"
tags:
- kubernetes
- k3s
- debian
- self-hosted
- docker
keywords:
- kubernetes
- k3s
- debian
- self-hosted
- docker
url: /k3s/debian-install-k3s
---

> 傻瓜式教学: 如何在Debian上手动部署k3s

<!-- truncate -->

## 要求

:::note 仅供参考

- [Debian](/tags/debian)
- [Docker](/tags/docker)(可选)
- [Tailscale](/tags/tailscale)/[Headscale](/tags/headscale)(可选)

:::

## Debian准备

默认已经更新好内核和安装好docker了, 如果不会请参考:

- [Debian升级内核](/posts/debian-upgrade)
- [懒人版一键快速安装Docker](/posts/docker)
- [Headscale的部署方法和使用教程](/posts/headscale-intro)

### 初始化Debian系统

:::info 说明
这是我的一键初始化脚本，如果你有更好的建议，欢迎提出来；

```bash title="初始化一键脚本"
curl https://ghproxy.com/https://raw.githubusercontent.com/easysoft/quickon_cli/master/hack/manifests/scripts/init.sh | bash
```

:::

或者使用你自己的初始化脚本哈，如果使用你自己的初始化脚本需要安装

```bash title="wireguard"
apt install wireguard -y
```

## 部署k3s

### 下载二进制文件

```bash titile="需要在所有节点中k3s二进制文件"
wget https://ghproxy.com/https://github.com/k3s-io/k3s/releases/download/v1.24.12%2Bk3s1/k3s
chmod +x k3s
mv k3s /usr/local/bin/k3s
```

### 部署控制节点

:::note 个性化说明

- 数据存储, 默认是sqlite(默认即可), 可选其他的如mysql, 我的示例就是mysql(多master高可用)
- 网络cni组件, 默认是`flannel(vxlan)`, 可选其他的，我的示例就是`wireguard-native`
- 基于tailscale跨云配置`node-ip/node-external-ip`, 我的示例就是开启了跨云配置

:::

<details>
<summary>k3s.service</summary>

```service title="/etc/systemd/system/k3s.service"
[Unit]
Description=Lightweight Kubernetes
Documentation=https://k3s.io
Wants=network-online.target

[Install]
WantedBy=multi-user.target

[Service]
Type=notify
EnvironmentFile=-/etc/systemd/system/k3s.service.env
KillMode=process
Delegate=yes
# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=1048576
LimitNPROC=infinity
LimitCORE=infinity
TasksMax=infinity
TimeoutStartSec=0
Restart=always
RestartSec=5s
ExecStartPre=-/usr/sbin/modprobe br_netfilter
ExecStartPre=-/usr/sbin/modprobe overlay
ExecStart=/usr/local/bin/k3s server --datastore-endpoint mysql://tidb-region-k3s:athe8AhSheyooPh8Uph0lieJ4Fdeitei2su@tcp(10.10.10.10:3306)/tidbk3s  --tls-san kapi.ysicing.net --tls-san kubeapi.ysicing.net  --cluster-cidr 10.20.0.0/16 --service-cidr 10.30.0.0/16 --service-node-port-range 30000-60000 --flannel-backend wireguard-native --disable-network-policy --disable-helm-controller --disable servicelb,traefik,local-storage   --kube-proxy-arg "proxy-mode=ipvs" "masquerade-all=true"  --kube-proxy-arg "metrics-bind-address=0.0.0.0" --docker --node-ip 10.77.0.2 --node-external-ip 10.77.0.2
```

</details>

将上述文件保存后，执行如下:

```bash title="启动 k3s 控制平面并设置开机自启"
systemctl enable k3s --now
```

查看集群状态：

```bash
k3s kubectl get nodes
# 自行下载kubectl或者软链接
ln -s /usr/local/bin/k3s /usr/local/bin/kubectl
```

### 部署计算节点

<Tabs
  defaultValue="EnvironmentFile"
  values={[
    {label: 'EnvironmentFile', value: 'EnvironmentFile'},
    {label: 'Service Unit', value: 'service'},
  ]}>
  <TabItem value="EnvironmentFile" label="EnvironmentFile">

<details>
<summary>k3s.service.env</summary>

:::note
`K3S_URL`: API Server 的 URL，一般格式为：<https://<master_ip>:6443。其中> <master_ip> 是控制节点的IP或者tls-san对应的域名哈<br/>
`K3S_TOKEN`: 加入集群所需的 token，可以在控制节点上查看 `/var/lib/rancher/k3s/server/node-token` 文件
:::

```env title="/etc/systemd/system/k3s.service.env"
K3S_URL=https://kubeapi.ysicing.net:6443
K3S_TOKEN=KToken
```

</details>

  </TabItem>

  <TabItem value="service" label="Service Unit">

<details>
<summary>k3s.service</summary>

```service title="/etc/systemd/system/k3s.service"
[Unit]
Description=Lightweight Kubernetes
Documentation=https://k3s.io
Wants=network-online.target

[Install]
WantedBy=multi-user.target

[Service]
#Type=notify
Type=exec
EnvironmentFile=-/etc/systemd/system/k3s.service.env
KillMode=process
Delegate=yes
# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=1048576
LimitNPROC=infinity
LimitCORE=infinity
TasksMax=infinity
TimeoutStartSec=0
Restart=always
RestartSec=5s
ExecStartPre=-/usr/sbin/modprobe br_netfilter
ExecStartPre=-/usr/sbin/modprobe overlay
ExecStart=/usr/local/bin/k3s agent --kube-proxy-arg "proxy-mode=ipvs" "masquerade-all=true" --kube-proxy-arg "metrics-bind-address=0.0.0.0" --docker --node-external-ip 10.77.0.3 --node-ip 10.77.0.3
```

</details>

  </TabItem>
</Tabs>

```bash title="启动 k3s agent 并设置自启"
systemctl enable k3s --now
```

### 高可用节点说明

需要结合一下, 就是控制节点service unit和计算节点env两者相结合，简单说就是控制节点`/etc/systemd/system/k3s.service.env`需要和计算节点的配置文件一样

:::note 如何验证呢?

查看非第一个节点的任意节点 `/var/lib/rancher/k3s/agent/etc/k3s-agent-load-balancer.json`

:::

## 高级操作

基于tailscale实现, 其他内网穿透类似

### 打通内网和k3s service路由

```bash title="添加service路由"
 tailscale up --login-server=https://headscale.ysicing.net --accept-routes=true --accept-dns=false --advertise-routes=10.30.0.0/16
```

### 部署lb组件

:::danger
跨云可能不太行哈，我仅在未跨云环境下使用，没法监听tailscale网卡
:::

```bash titile="部署负载均衡组件"
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm upgrade -i lb bitnami/metallb -n kube-system
```

ip池

```yaml title="ippool.yaml"
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: lbpool
  namespace: kube-system
spec:
  addresses:
  - 10.19.49.1/24
```

部署生效ip池

```bash
kubectl apply -f ippool.yaml
# 另外一个节点添加转发，也可以是上面一个节点转发哈
 tailscale up --login-server=https://headscale.ysicing.net --accept-routes=true --accept-dns=false --advertise-routes=10.19.49.1/24
```

### 部署存储

<details>
<summary>基于nfs实现存储类</summary>

```bash
helm repo add nfs-subdir-external-provisioner https://kubernetes-sigs.github.io/nfs-subdir-external-provisioner/
helm repo update
helm upgrade -i nfs-subdir-external-provisioner nfs-subdir-external-provisioner/nfs-subdir-external-provisioner \
    -n kube-system \
    --set image.repository=ccr.ccs.tencentyun.com/k7scn/nfs-subdir-external-provisioner \
    --set nfs.server=10.0.8.8 \
    --set nfs.path=/k8sshare \
```
</details>

### 部署ingress组件

基于<code>nginx-ingress-controller</code>实现

<details>
<summary>default-backend</summary>

```bash title="default-backend"
# 部署默认后端，劫持404，503，504
kubectl apply -f https://ghproxy.com/https://raw.githubusercontent.com/ysicing/default-backend/master/deploy.yaml
```
</details>

<details>
<summary>配置文件</summary>

- 默认使用`DaemonSet`,指定节点角色(node-role)是nginx的节点部署
- 默认证书是`kube-system/tls-ysicing-cloud`

```bash
# 添加rule
kubectl label nodes k.t2.ysicing.local  node-role.kubernetes.io/nginx=true
# 创建证书
kubectl create secret tls tls-ysicing-cloud --cert=/tmp/fullchain.cer --key=/tmp/privkey.key --dry-run=client -o yaml > /tmp/tls-ysicing-cloud.yaml
kubectl apply -f /tmp/tls-ysicing-cloud.yaml -n kube-system
```

```yaml title="nginx-ingress-controller.yaml"
config:
  access-log-path: /var/log/nginxweb/nginx_access.log
  compute-full-forwarded-for: "true"
  custom-http-errors: 403,503,504
  error-log-path: /var/log/nginxweb/nginx_error.log
  forwarded-for-header: X-Forwarded-For
  generate-request-id: "true"
  keep-alive-requests: "10000"
  log-format-escape-json: "true"
  log-format-upstream: '{ "timestamp": "$time_iso8601", "network": { "x-forward-for":
    "$proxy_add_x_forwarded_for", "remote_addr": "$remote_addr"}, "user": { "id":
    "$remote_user"},"user-agent": {"original": "$http_user_agent"},"namespace": "$namespace","http":
    { "version": "$server_protocol", "request": {"body": {"bytes":$body_bytes_sent},
    "bytes":$request_length, "method": "$request_method", "referrer": "$http_referer",
    "request_id": "$request_id"}, "response": {"body": {"bytes":$body_bytes_sent},
    "bytes":$bytes_sent, "status_code": "$status", "time":$request_time}, "upstream":
    {"name": "$proxy_upstream_name", "bytes": $upstream_response_length, "status_code":"$upstream_status",
    "time":$upstream_response_time, "address": "$upstream_addr"}, "url": {"domain":
    "$host","path": "$uri", "query": "$args", "original": "$request_uri"}}}'
  max-worker-connections: "65536"
  proxy-body-size: 500m
  upstream-keepalive-connections: "200"
  use-forwarded-headers: "true"
  gzip-level: "9"
  use-gzip: "true"
  force-ssl-redirect: "true"
defaultBackendService: "kube-system/custom-default-backend"
reportNodeInternalIp: true
watchIngressWithoutClass: true
ingressClassResource:
  name: nginx
  enabled: true
  default: true
extraArgs:
  default-ssl-certificate: "kube-system/tls-ysicing-cloud"
# hostNetwork: true
dnsPolicy: ClusterFirstWithHostNet
nodeSelector:
  node-role.kubernetes.io/nginx: "true"
extraVolumes:
  - emptyDir: {}
    name: log-volume
extraVolumeMounts:
  - mountPath: /var/log/nginxweb
    name: log-volume
defaultBackend:
  enabled: false
metrics:
  enabled: true
  serviceMonitor:
    enabled: true
kind: DaemonSet
daemonset:
  useHostPort: true
# strategy:
#   type: Recreate
```

</details>

<details>
<summary>部署ingress</summary>

```bash title="helm部署"
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm upgrade -i nginx-ingress-controller bitnami/nginx-ingress-controller -n kube-system -f ./nginx-ingress-controller.yaml
```

</details>
