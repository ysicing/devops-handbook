---
title: 安装k3s集群
tags:
- k3s
---

## 下载二进制

```bash
wget https://ghproxy.com/https://github.com/k3s-io/k3s/releases/download/v1.24.4%2Bk3s1/k3s
chmod +x k3s
mv k3s /usr/local/bin/k3s
```

## 部署控制平面

手动部署,方便改参数

```bash
# /etc/systemd/system/k3s.service
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
ExecStartPre=-/sbin/modprobe br_netfilter
ExecStartPre=-/sbin/modprobe overlay
ExecStart=/usr/local/bin/k3s server --tls-san kubeapi.ysicing.local --cluster-cidr 10.80.0.0/16 --service-cidr 10.90.0.0/16 --service-node-port-range 30000-60000 --cluster-dns 10.90.0.10 --cluster-domain ysicing.local --flannel-backend none --disable-network-policy --disable-helm-controller --disable servicelb,traefik   --kube-proxy-arg "proxy-mode=ipvs" "masquerade-all=true"  --kube-proxy-arg "metrics-bind-address=0.0.0.0"
```

:::tip

- `--tls-san` 这里写自己的域名, kubeconfig到时候有用
- `--flannel-backend` 我需要部署cilium,这里默认就为none
- kube-proxy 使用 `ipvs` 模式
- 数据源默认数据存储是 `Sqlite`, 节省资源
:::

### 启动控制平面

```bash
systemctl enable k3s --now
```

## 添加计算节点

和管理节点类似

### 生成配置文件

```bash
cat > /etc/systemd/system/k3s-agent.service.env <<EOF
K3S_URL=https://<master_ip或者tls-san自定义域名>:6443
K3S_TOKEN=xxxxxxxx
EOF
```

:::tip

- `K3S_TOKEN`加入集群所需的token，可以在管理节点上查看 `/var/lib/rancher/k3s/server/node-token` 文件
:::

### 生成计算节点配置并启动

```bash
# cat /etc/systemd/system/k3s.service
[Unit]
Description=Lightweight Kubernetes
Documentation=https://k3s.io
Wants=network-online.target

[Install]
WantedBy=multi-user.target

[Service]
Type=exec
EnvironmentFile=/etc/systemd/system/k3s-agent.service.env
KillMode=process
Delegate=yes
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
TasksMax=infinity
TimeoutStartSec=0
Restart=always
RestartSec=5s
ExecStartPre=-/sbin/modprobe br_netfilter
ExecStartPre=-/sbin/modprobe overlay
ExecStart=/usr/local/bin/k3s agent --kube-proxy-arg "proxy-mode=ipvs" "masquerade-all=true"     --kube-proxy-arg "metrics-bind-address=0.0.0.0"
```

启动计算节点

```bash
systemctl enable k3s --now
```

## 安装网络组件

```bash
cilium install --helm-set rollOutCiliumPods=true,ipam.operator.clusterPoolIPv4PodCIDR="10.80.0.0/16"
cilium hubble enable --ui
```

## 安装ingress组件

```bash
kubectl apply -f https://ghproxy.com/https://raw.githubusercontent.com/ysicing/default-backend/master/deploy.yaml
helm upgrade -i nginx-ingress-controller bitnami/nginx-ingress-controller -n kube-system -f ./nginx-ingress-controller.yaml --version 9.2.19
```

### ingress自定义配置

```yaml
# nginx-ingress-controller.yaml
clusterDomain: ysicing.local
config:
  access-log-path: /var/log/nginxweb/nginx_access.log
  compute-full-forwarded-for: "true"
  custom-http-errors: 403,503
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
  proxy-body-size: 50m
  upstream-keepalive-connections: "200"
  use-forwarded-headers: "true"
  gzip-level: "9"
  use-gzip: "true"
defaultBackendService: "kube-system/custom-default-backend"
reportNodeInternalIp: true
watchIngressWithoutClass: true
ingressClassResource:
  name: nginx
  enabled: true
  default: true
extraArgs:
  default-ssl-certificate: "cce-system/tls-ysicing-net"
hostNetwork: true
dnsPolicy: ClusterFirstWithHostNet
nodeSelector:
  kubernetes.io/hostname: "knj03.ysicing.cloud"
  # node-role.kubernetes.io/lb: "true"
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
```

:::caution

为啥nginx-ingress-controller选择这个版本`9.2.19`, 因为这个版本之后，在debian 11(5.18)的内核上运行会crash, 简单排查后没有解决途径, 回滚到这个版本

:::
