---
title: Headscale 的部署方法和使用教程(20230316版)
date: 2023-03-16T20:55:18+08:00
description: Headscale 的部署方法和使用教程
tags:
- headscale
- tailscale
- 内网穿透
- wireguard
keywords:
- self-hosted
- headscale
- tailscale
- wireguard
---

<!-- truncate -->

> 目的打通所有环境(VM和k8s以及移动端), 组建大局域网

## WireGuard是什么

> `WireGuard`是一个易于配置、快速且安全的开源VPN技术, 主要优点配置和部署 WireGuard 就像配置和使用SSH一样容易。

主要用途取代`OpenVPN`等传统组网工具。

## Tailscale是什么

Tailscale 是一款基于 WireGuard 的虚拟组网工具, 简化了WireGuard部署流程，开箱即用。
Tailscale 是一款商业产品，但个人用户是可以白嫖的, 基本可以满足使用需求。

## Headscale是什么

实现了 Tailscale 控制服务器的所有主要功能, **自主可控**

## Headscale 部署

> 部署比较简单, 这里简单记录一下

### 下载二进制

```bash
wget https://ghproxy.com/https://github.com/juanfont/headscale/releases/download/v0.20.0/headscale_0.20.0_linux_amd64
chmod +x headscale_0.20.0_linux_amd64
mv headscale_0.20.0_linux_amd64 /usr/local/bin/headscale
```

### 准备相关目录或者文件

```bash
# 创建配置目录
mkdir -p /etc/headscale
# 创建目录用来存储数据与证书
mkdir -p /var/lib/headscale
# 创建空的 SQLite 数据库文件
touch /var/lib/headscale/db.sqlite
# 下载 Headscale 配置文件
wget https://github.com/juanfont/headscale/raw/main/config-example.yaml -O /etc/headscale/config.yaml
# 创建用户
useradd headscale -d /home/headscale -m
chown -R headscale:headscale /var/lib/headscale
```

### 编辑配置

```yaml
---
server_url: https://global.vip.ysicing.cloud:443
listen_addr: 0.0.0.0:443
metrics_listen_addr: 127.0.0.1:9090
grpc_listen_addr: 0.0.0.0:50443
grpc_allow_insecure: false
private_key_path: /var/lib/headscale/private.key
noise:
  private_key_path: /var/lib/headscale/noise_private.key
ip_prefixes:
  - 10.77.0.0/24
derp:
  server:
    enabled: true
    region_id: 999
    region_code: "headscale"
    region_name: "Headscale Embedded DERP"
    stun_listen_addr: "0.0.0.0:3478"
  urls:
    - https://controlplane.tailscale.com/derpmap/default
  paths:
    - /etc/headscale/derp.yaml
  auto_update_enabled: true
  update_frequency: 1h
disable_check_updates: false
ephemeral_node_inactivity_timeout: 30m
node_update_check_interval: 10s
db_type: sqlite3
db_path: /var/lib/headscale/db.sqlite
acme_url: https://acme-v02.api.letsencrypt.org/directory
acme_email: "root@ysicing.net"
tls_letsencrypt_hostname: "global.vip.ysicing.cloud"
tls_client_auth_mode: relaxed
tls_letsencrypt_cache_dir: /var/lib/headscale/cache
tls_letsencrypt_challenge_type: TLS-ALPN-01
tls_letsencrypt_listen: ":http"
tls_cert_path: ""
tls_key_path: ""
log:
  level: info
  format: text
acl_policy_path: ""
dns_config:
  nameservers:
    - 1.1.1.1
  domains: []
  magic_dns: false
  base_domain: example.com
unix_socket: /var/run/headscale/headscale.sock
unix_socket_permission: "0770"
logtail:
  enabled: false
randomize_client_port: false
```

:::note
如上只需要将`global.vip.ysicing.cloud`替换成自己的域名即可, 另外如果默认的ipv4段`10.77.0.0/24`冲突, 可自行替换其他可用ip端
:::

### derp配置

```yaml
regions:
  900: # 自定义derper从900-999
    regionid: 900
    regioncode: sh
    regionname: china
    nodes:
      - name: 900a
        regionid: 900
        hostname: derper.sh.ysicing.cloud
        stunport: 0 # 0表示默认
        stunonly: false
        derpport: 7777
```

### 启动HeadScale

```bash
# cat /etc/systemd/system/headscale.service
[Unit]
Description=headscale controller
After=syslog.target
After=network.target

[Service]
Type=simple
User=headscale
Group=headscale
ExecStart=/usr/local/bin/headscale serve
Restart=always
RestartSec=5

# Optional security enhancements
NoNewPrivileges=yes
PrivateTmp=yes
ProtectSystem=strict
ProtectHome=yes
ReadWritePaths=/var/lib/headscale /var/run/headscale
AmbientCapabilities=CAP_NET_BIND_SERVICE
RuntimeDirectory=headscale

[Install]
WantedBy=multi-user.target
```

开启启动

```bash
systemctl enable --now headscale
systemctl status headscale
```

查看端口情况

```bash
ss -tulnp|grep headscale
tcp   LISTEN 0      32768      127.0.0.1:9090       0.0.0.0:*    users:(("headscale",pid=4426,fd=15))
tcp   LISTEN 0      32768              *:50443            *:*    users:(("headscale",pid=4426,fd=10))
tcp   LISTEN 0      32768              *:80               *:*    users:(("headscale",pid=4426,fd=13))
tcp   LISTEN 0      32768              *:443              *:*    users:(("headscale",pid=4426,fd=14))
```

稍等片刻访问设置的域名显示https即可

### 命名空间管理

Tailscale 中有一个概念叫 tailnet，你可以理解成租户，租户与租户之间是相互隔离的，具体看参考 Tailscale 的官方文档： [What is a tailnet](https://tailscale.com/kb/1136/tailnet/)。Headscale 也有类似的实现叫 namespace，即命名空间。我们需要先创建一个 namespace，以便后续客户端接入

```bash
# 创建命名空间
headscale namespaces create default
# 查看命名空间
headscale namespaces list
ID | Name    | Created
1  | default | 2022-09-02 13:00:37
```

## 多端接入

### Linux接入

Debian 11安装:

```bash
# 使用我提供的镜像站加速哈哈哈
curl -fsSL https://pkgs.tailscale.com/stable/debian/bullseye.noarmor.gpg | tee /usr/share/keyrings/tailscale-archive-keyring.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-archive-keyring.gpg] https://mirrors.ysicing.cloud/tailscale/stable/debian bullseye main" | tee /etc/apt/sources.list.d/tailscale.list
# 安装
apt update
apt install tailscale
```

默认脚本安装:

```bash
# 安装
curl -fsSL https://tailscale.com/install.sh | sh
```

```bash
# 默认不开启dns, 不然会很影响体验, 更多参数参考 tailscale up --help
tailscale up --login-server=https://<自定义域名> --accept-routes=true --accept-dns=false
```

执行完上面的命令后，会出现下面的信息

```bash
To authenticate, visit:

https://xxxxxx:443/register/de703e5f2e326cfa4b95c866ce13397433b81fcc22de6cf4e39770095facf921

```

在浏览器中打开该链接, 将页面的命令复制粘贴到 headscale 所在机器的终端中，并将 NAMESPACE 替换为前面所创建的 namespace, 类似如下:

```bash
headscale -u default nodes register --key de703e5f2e326cfa4b95c866ce13397433b81fcc22de6cf4e39770095facf921
```

如果节点比较多:

```bash
#!/bin/bash
headscale -u default nodes register --key $1
headscale node list
```

### macOS安装

可以参考[macOS配置](https://icloudnative.io/posts/how-to-set-up-or-migrate-headscale/#macos)

### 群晖DS218+安装

下载客户端并安装[tailscale-x86_64-dsm7](https://pkgs.tailscale.com/stable/tailscale-x86_64-1.38.1-380017-dsm7.spk)

ssh登录群晖

```bash
sudo tailscale down
sudo tailscale up --login-server=https://自定义域名 --accept-dns=false
# 后续同
```

另外需要额外设置如下, 不过在任务计划里设置开机任务, 具体设置参考官方文档[synology](https://tailscale.com/kb/1131/synology/#enabling-synology-outbound-connections)


```bash
sudo /var/packages/Tailscale/target/bin/tailscale configure-host
sudo synosystemctl restart pkgctl-Tailscale.service
```

其他细节也可以参考 [群晖上基于Headscale内网穿透](/posts/headscale-dsm7/)

### 局域网(含容器网络)打通

```bash
# 添加route
tailscale up --login-server=https://<自定义域名> --accept-routes=true --accept-dns=false --advertise-routes=10.80.0.0/16,10.90.0.0/16
# 开启路由
headscale routes enable -r 21
# 路由列表
headscale routes list
Route        | Enabled
10.80.0.0/16 | true
10.90.0.0/16 | true
```

测试

```bash
# 查看路由
ip route show table 52 | grep 10.80.0.0/16
10.80.0.0/16 dev tailscale0
# 测试访问k3s coredns
```

### iOS支持

在1.38.x版本后支持自定义控制端地址，可以设置为headscale地址.

## 注意

:::danger
在阿里云部署可能会导致服务访问阿里云服务，需要手动执行如下，删除默认tailscale路由

```bash
iptables -D ts-input -s 100.64.0.0/10 ! -i tailscale0 -j DROP
iptables -D ts-forward -s 100.64.0.0/10 -o tailscale0 -j DROP
```

:::
