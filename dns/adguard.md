## AdGuard使用姿势

> AdGuard Home使用Golang开发，因此安装非常简单，这里以容器的方式部署为例，其它方式可参考官方帮助文档。

### 主要功能

- 拦截AD
- 号称隐私保护
- 家庭保护模式
- 自定义过滤(劫持) (😂我用的最多的是这个)

### 部署

二话不说直接上

```yaml
# docker-compose.yaml
version: '2.1'
services:
  caddy:
    image: spanda/caddy
    container_name: caddy
    volumes:
    - ./ssl:/root/.caddy
    - /var/log/caddy:/var/log/caddy
    - ./Caddyfile:/etc/Caddyfile
    network_mode: host
    restart: always
  dns:
    image: adguard/adguardhome
    container_name: dns
    volumes:
    - ./ad/conf:/opt/adguardhome/conf
    - ./ad/work:/opt/adguardhome/work
    network_mode: host
    restart: always

# Caddyfile
dns.ysicing.net {
   gzip
   tls root@ysicing.net
   log / /var/log/caddy/dns.ysicing.net.log "{remote} {when} {method} {uri} {proto} {status} {size} {>User-Agent} {latency}" {
        rotate_size 50
        rotate_age  90
        rotate_keep 20
        rotate_compress
        }
	
    header / {
        Strict-Transport-Security "max-age=31536000;includeSubDomains;preload"
		Access-Control-Allow-Origin  *
		Access-Control-Allow-Methods "GET, POST, OPTIONS"
        -Server
    }
    proxy / 127.0.0.1:7070 {
        transparent
        websocket
    }
}
```

访问公网`IP:3000`,按着无脑一顿猛操作。修改默认web监听端口为127.0.0.1:7070,53端口默认监听全部。


### 使用

#### Windows

1. 打开网络和Internet设置
2. 打开网络和共享中心
3. 打开以太网
4. 打开属性
5. 编辑TCP/IPV4
6. 使用下面的DNS服务器 首 59.110.220.53 备 8.8.8.8

#### Mac

跳过很简单

#### 安卓

自己折腾吧，私有dns搞不定，官方APP可以