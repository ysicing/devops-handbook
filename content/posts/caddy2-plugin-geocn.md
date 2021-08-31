---
title: "Caddy2插件Geocn"
date: 2021-08-31T16:00:25+08:00
description: Caddy2插件Geocn相关信息
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocFolding: false
tocPosition: inner
tocLevels: ["h2", "h3", "h4"]
tags:
- caddy
- caddy-plugin
series:
-
categories:
- caddy
image:
---

## 为什么要Geocn

大部分场景下,我们网站允许任何人访问, 某些特殊场景下我们需要限制大陆ip访问。
但是已有插件`caddy-maxmind-geolocation`为啥不用。

默认使用的 GeoIP2 数据库是来自于 MaxMind 的 GeoLite2 免费数据库。这个数据库目前存在一下几个问题：

- 获取不便：从 2019 年 12 月 30 日起，必须注册后才能下载
- 数据量大：数据库庞大，包含全球的 IP 地址段，约 4 MB
- 准确度低：对中国大陆的 IP 地址判定不准，如：香港阿里云的 IP 被判定为新加坡、中国大陆等

新的政策要求注册才能下载会增加时间成本，而且会让自动化下载的难度大大增加。庞大的数据量无可厚非，但是对于大多数中国大陆的用户来说，仅需要去判断 IP 的地理位置是否属于中国大陆境内，其他国家的 IP 一律代理。过多的数据量会增加载入时间，降低查询效率。

基于上述考虑, 结合`caddy-maxmind-geolocation`和`Hackl0us/GeoIP2-CN`两者, 只有判断ip是否是中国大陆ip即可。

## 核心设计

- 使用`Hackl0us/GeoIP2-CN`提供的准确度高、用户使用体验好的仅含有中国大陆 IP 信息的 GeoIP2 数据库
- 使用`caddyhttp.RequestMatcher`, 不得不说 `Request Matchers`
    - 获取`request.RemoteAddr`地址, 优先级最高
    - 从`request.Header`获取`X-Forwarded-For`地址, 如果RemoteAddr为内网地址,才考虑

## 使用caddy

### 编译caddy2

可以参考 [ysicing/caddy2](https://github.com/ysicing/dockerfiles/blob/master/caddy2/Dockerfile)

默认情况下, 直接使用提供的二进制即可。不过我们需要集成第三方插件，需要使用`xcaddy`自行编译

```bash
# 本地安装xcaddy
go install github.com/caddyserver/xcaddy/cmd/xcaddy@latest
# github action安装
    - name: Install Go
      uses: actions/setup-go@v1
      with:
        go-version: 1.17.x
    - name: install xcaddy
      run: |
          echo "install xcaddy"
          go get -u github.com/caddyserver/xcaddy/cmd/xcaddy@latest
    - name: build bin
      run: |
        export TZ='Asia/Shanghai'
        export PATH=$PATH:$(go env GOPATH)/bin
        xcaddy build --with github.com/ysicing/caddy2-geocn
```

构建caddy二进制

```bash
# 使用remote code
xcaddy build --with github.com/ysicing/caddy2-geocn
# 使用local code
xcaddy build --with github.com/ysicing/caddy2-geocn=../caddy2-geocn
```

### 插件本地化测试

```
cd go/src/github.com/ysicing/
git clone https://github.com/ysicing/caddy2-geocn.git
cd caddy2-geocn
# 二进制
make build
make run
# docker
GOOS=linux xcaddy build --with github.com/ysicing/caddy2-geocn=../caddy2-geocn
rm -rf Country.mmdb
wget https://github.com/Hackl0us/GeoIP2-CN/raw/release/Country.mmdb
docker build -t ghcr.io/ysicing/caddy2-geocn -f example/Dockerfile .
```

docker-compose.yaml示例如下:

```yaml
version: '2'
services:
  caddy2-geocn:
    image: ghcr-proxy.hk1.godu.dev/ysicing/caddy2-geocn
    container_name: caddy2-geocn
    ports:
      - '80:80'
    volumes:
      - './Caddyfile:/etc/caddy/Caddyfile'
```

Caddyfile示例如下:

```Caddyfile
(LOG) {
    log {
        output file /var/log/caddy.log {
            roll_size 1mb
		    roll_keep 5
		    roll_keep_for 1h
        }
        format console {
            time_format "iso8601"
        }
    }
}

(COMCFG) {
    encode zstd gzip
}

{
    debug
}

:80 {
    import COMCFG
    import LOG
    metrics /metrics
    @geofilter {
        not geocn {
            db_file "/etc/caddy/Country.mmdb"
        }
    }
    # file_server @geofilter {
    #    root /etc/caddy/example/deny
    #}
    redir @geofilter  https://www.baidu.com{uri} permanent
    file_server {
        root /etc/caddy/example/allow
    }
}
EOF 
docker-compose up -d
```

### 云环境

```docker
docker run -itd 80:80 ghcr.io/ysicing/caddy2-geocn:latest
```

### 应用场景

[我的博客](https://ysicing.me) 就是很好的示例, 分别使用代理和非代理方式访问

## 致谢

- [Hackl0us/GeoIP2-CN](https://github.com/Hackl0us/GeoIP2-CN)
- [Caddyserver](https://caddyserver.com/)