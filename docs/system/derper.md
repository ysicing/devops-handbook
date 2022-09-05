---
title: Headscale 部署私有 DERP 中继服务器
tag:
- headscale
- tailscale
- derper
---

> 本文将会介绍如何让 Headscale  使用自定义的 DERP Servers

## Derper 是什么？

可以阅读 [米开朗基杨 - 中继协议简介](https://icloudnative.io/posts/custom-derp-servers/#中继协议简介)

## 实操

### 构建derper

:::info
最新版本需要go1.19版本

go环境:

```bash
wget https://golang.google.cn/dl/go1.19.linux-amd64.tar.gz
tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
go env -w GOPROXY=https://goproxy.cn,direct
go install tailscale.com/cmd/derper@latest
# 默认derper二进制在 /root/go/bin/derper
```

:::

### 启动derper


```bash
# /etc/systemd/system/derper.service
[Unit]
Description=derper

[Service]
StartLimitInterval=5
StartLimitBurst=10
ExecStart=/root/go/bin/derper -hostname <你的域名> -a ":443" -certdir /root/.cache/tailscale/derper-certs -verify-clients
Restart=always
RestartSec=15

[Install]
WantedBy=multi-user.target
```

启动derper

```bash
systemctl enable derper.service --now
```

创建定时重启derper

```
# /etc/systemd/system/derper.timer
[Unit]
Description=derper timer

[Timer]
# 每小时执行一次
OnActiveSec=1h
# 错过执行, 立刻执行
Persistent=true

[Install]
WantedBy=timers.target
```

启动derper.timer

```bash
# 如果wantedby为timers.target, 不需要设置开机启动, 默认就是开机启动
systemctl start derper.timer
# 其他情况
systemctl enable derper.timer --now
```

查看生效

```bash
systemctl list-timers --no-pager
NEXT                        LEFT          LAST                        PASSED        UNIT                         ACTIVATES
Mon 2022-09-05 23:21:29 CST 59min left    Mon 2022-09-05 22:15:12 CST 6min ago      derper.timer                 derper.service
```

### 配置Headscale

可以参考

```
# https://github.com/juanfont/headscale/blob/main/derp-example.yaml
# If you plan to somehow use headscale, please deploy your own DERP infra: https://tailscale.com/kb/1118/custom-derp-servers/
regions:
  900:
    regionid: 900
    regioncode: custom
    regionname: My Region
    nodes:
      - name: 900a
        regionid: 900
        hostname: myderp.mydomain.no
        ipv4: 123.123.123.123
        ipv6: "2604:a880:400:d1::828:b001"
        stunport: 0
        stunonly: false
        derpport: 0
```

我的参考示例

```bash
# /etc/headscale/derp.yaml
regions:
  900:
    regionid: 900
    regioncode: dev
    regionname: china
    nodes:
      - name: 900a
        regionid: 900
        hostname: <自定义域名>
        stunport: 0
        stunonly: false
        derpport: 0
```

修改配置

```
# /etc/headscale/config.yaml 变更如下
  paths:
    - /etc/headscale/derp.yaml
  # paths: []
```

重启服务

```bash
systemctl restart headscale
```

### 测试

```bash
tailscale netcheck

	* Nearest DERP: bj
	* DERP latency:
		-  bj: 32.9ms  (bj)
```

:::danger
请勿升级到`0.17.0-alpha2`, 否则可能导致服务无法正常启动
:::
