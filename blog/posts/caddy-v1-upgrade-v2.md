---
title: "CaddyV1升级到V2版本"
date: 2022-02-26T20:18:08+08:00
description: 主要讲述caddy v1升级到v2版本的过程

tags:
- caddy
---

<!-- truncate -->

## 背景

> 想升级到v2版本踩踩坑

## 升级踩坑

目前caddy v1版本的安装和使用方式和v2版本相同，但是v2版本使用方式有所不同。

之前也写过[Caddy2的使用](/posts/caddy2/), 这里不详细了，直接跳过了。

### systemd

- v1

```bash
[Service]
Restart=on-abnormal
User=www-data
Group=www-data
Environment=CADDYPATH=/etc/ssl/caddy
ExecStart=/usr/local/bin/caddy -log stdout -agree=true -conf=/etc/caddy/Caddyfile -root=/var/tmp
ExecReload=/bin/kill -USR1 $MAINPID
KillMode=mixed
KillSignal=SIGQUIT
TimeoutStopSec=5s
LimitNOFILE=1048576
LimitNPROC=512
PrivateTmp=true
PrivateDevices=false
ProtectHome=true
ProtectSystem=full
ReadWritePaths=/etc/ssl/caddy
ReadWriteDirectories=/etc/ssl/caddy
```

- v2

```bash
[Service]
Type=notify
User=www-data
Group=www-data
Environment=CADDYPATH=/etc/ssl/caddy
ExecStart=/usr/local/bin/caddy2 run --environ --watch  --config /etc/caddy2/Caddyfile
ExecReload=/usr/local/bin/caddy2 reload --config /etc/caddy2/Caddyfile
TimeoutStopSec=5s
LimitNOFILE=1048576
LimitNPROC=512
PrivateTmp=true
ProtectSystem=full
AmbientCapabilities=CAP_NET_BIND_SERVICE
```

### 代理分流

- v1

```bash
cao.buhuibaidu.me {
    gzip
    timeouts none
    proxy / https://www.baidu.com {
        except /bing
    }
    proxy /bing https://127.0.0.1:40000 {
        header_upstream Host {host}
        header_upstream X-Forwarded-Proto {scheme}
        insecure_skip_verify
    }
}
```

- v2

```bash
cao.buhuibaidu.me {
    import GZIP
    @noproxy {
        not path "/bing"
    }
    reverse_proxy @noproxy https://www.baidu.com
    reverse_proxy /bing https://127.0.0.1:40000 {
        header_up Host {host}
        header_up X-Forwarded-Proto {scheme}
        transport http {
            tls_insecure_skip_verify
       }
    }
}
```

### 未填完的坑

之前v1版本部署过caddy和tailscale以及ergo的镜像代理，貌似v2不好使了

- v1

```bash
debian.ysicing.me {
   gzip
   log stdout
   tls root@ysicing.net
   proxy / https://debian.cdn.ysicing.me/apt/
}

m.deb.ysicing.me {
   gzip
   log stdout
   tls root@ysicing.net
   proxy /tailscale/ https://pkgs.tailscale.com/ {
     without /tailscale
   }
   proxy /caddy/ https://dl.cloudsmith.io/public/caddy {
    without /caddy
  }
}

m.yum.ysicing.me {
   gzip
   log stdout
   tls root@ysicing.net
   proxy /tailscale/ https://pkgs.tailscale.com/ {
     without /tailscale
   }
}
```

- v2

待续

