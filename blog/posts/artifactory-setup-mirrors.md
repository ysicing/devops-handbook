---
title: "使用Artifactory部署私有化软件源"
date: 2020-09-30T22:01:08+08:00
description: 使用Artifactory部署私有化软件源
tags:
- Artifactory
---

> 趁着节前，需要折(dao)腾(shi)一下去年部署的artifactory镜像源，并将升级到7.x版本。

<!-- truncate -->

## 场景

部署私有化软件源，对内提供服务。这里只作为软件源测试使用，其他场景自行琢磨。


## 部署服务

部署很简单，这里使用docker-compose方式部署

```
# docker-compose.yaml
version: '2.1'
services:
  ossv2:
    image: registry.cn-beijing.aliyuncs.com/k7scn/artifactory-pro:7.6.1
    container_name: ossv2
    volumes:
    - /data/ossv2:/var/opt/jfrog/artifactory
    network_mode: host
    restart: always
  nginx:
    image: registry.cn-beijing.aliyuncs.com/k7scn/nginx:1.17.3
    container_name: nginx
    volumes:
    - /var/log/nginx:/var/log/nginx:rw
    - ./config:/etc/nginx/conf.d:rw
    - ./nginxconfig.io:/etc/nginx/nginxconfig.io:rw
    - ./ssl:/etc/nginx/ssl:rw
    - ./wwwroot:/var/www:rw
    network_mode: host
    restart: always
```

#### 注意事项

- **artifactory** 持久化数据目录可用空间最好稍微大些(<b>>500GB</b>)，具体看镜像源数目多少。
- 使用nginx进行反向代理。

## 配置源

7.x 和 6.x 版本差别还挺大的。

`docker-compose up -d` 启动服务后，访问 `<ip>:8082` 进行初始化服务配置，基本默认配置即可或者SKIP跳过。

> 在此过程中有一步比较坑，就是创建默认的**Repositories**，这个跳过跳过，否则后面在使用过程中就要踩坑了，如配置**Debian**或者源后**Alpine**后，如果文件路径里有**.**就会导致文件无法下载404

### artifactory 源

简单介绍一下，

- Local 本地 （通常放一些内部的二进制文件或者其他，当oss用）
- Remote 远程 (常用，默认就基本使用这个 通常镜像aliyun或者tuna)
- Virtual 虚拟 (local + remote)

这里我截取部分软件源示例，基本傻瓜式操作

![](https://gitee.com/godu/blogimage/raw/master/blog/20200930/mirrors01.png)

## 示例配置Debian源

正常Debian源如下:

```bash
deb https://mirrors.ysicing.me/debian/ buster main contrib non-free
deb https://mirrors.ysicing.me/debian/ buster-updates main contrib non-free
deb https://mirrors.ysicing.me/debian/ buster-backports main contrib non-free
deb https://mirrors.ysicing.me/debian-security buster/updates main contrib non-free
```

如果想达成如上，需要做两件事

- 镜像Debian源
- 配置域名

#### 镜像Debian源

- 创建Remote Repositories `debian` 和 `debian-security`

![](https://gitee.com/godu/blogimage/raw/master/blog/20200930/debian_create_repo.png)

- 配置debian Remote Repositories

![](https://gitee.com/godu/blogimage/raw/master/blog/20200930/mirrors_debian.png)

同理 debian-security 类似

- 配置完成后访问 **\<ip\>:8082/artifactory/debian/** 或者 **\<ip\>:8081/artifactory/debian/**

![](https://gitee.com/godu/blogimage/raw/master/blog/20200930/list_debian.png)

到这里，我们已经实现了

```bash
deb http://172.16.72.42:8082/artifactory/debian/ buster main contrib non-free
....
```

ip+端口的方式终究不太好记，是时候拖出nginx大杀器了

#### 配置nginx

这里不具体说nginx配置了，直接上配置

```
# mirrors.conf
server {
    listen 80;
    listen [::]:80;
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    server_name mirrors.ysicing.me;
    if ($http_x_forwarded_proto = '') {
        set $http_x_forwarded_proto  $scheme;
    }
    index index.html;
    root /var/www/mirrors.ysicing.me/public;

    # SSL
    ssl_certificate /etc/nginx/ssl/ysicing.me.crt;
    ssl_certificate_key /etc/nginx/ssl/ysicing.me.key;

    # security
    # include security.conf;

    location = / {
	    root /var/www/mirrors.ysicing.me/public;
    }

    location ~ .*\.(html|htm|reponew)$ {
	    root /var/www/mirrors.ysicing.me/public;
    }

    location ~ (docker.sh|func.sh|data.json)$ {
	   root /var/www/mirrors.ysicing.me/public;
    }

    # location ~ ^/$ {
    #     root /var/www/mirrors.ysicing.me/public;
    # }

    location /pypi/ {
	proxy_pass http://127.0.0.1:8081/artifactory/api/pypi/pypi/;
   	include nginxconfig.io/proxy.conf;
    }

    # chunked_transfer_encoding on;
    # client_max_body_size 0;

    # reverse proxy
    location / {

	proxy_buffering    off;
	proxy_buffer_size  128k;
	proxy_buffers 100  128k;
	client_max_body_size 100m;

        proxy_pass http://127.0.0.1:8081/artifactory/;
        include nginxconfig.io/proxy.conf;

        location ~ ^/artifactory/ {
            proxy_pass    http://127.0.0.1:8081;
            include nginxconfig.io/proxy.conf;
        }
    }

    # additional config
    include nginxconfig.io/general.conf;
}
```

类似两个配置拿自**nginxconfig.io**

```
# proxy.conf
proxy_http_version    1.1;
proxy_cache_bypass    $http_upgrade;
proxy_read_timeout  2400s;
proxy_pass_header   Server;
proxy_next_upstream error timeout non_idempotent;
proxy_next_upstream_tries    1;
proxy_set_header Upgrade            $http_upgrade;
proxy_set_header Connection         "upgrade";
proxy_set_header Host                $host;
proxy_set_header X-Real-IP            $remote_addr;
proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto    $scheme;
proxy_set_header X-Forwarded-Host    $host;
proxy_set_header X-Forwarded-Port    $server_port;

# general.conf
# favicon.ico
location = /favicon.ico {
    log_not_found off;
    access_log off;
}

# robots.txt
location = /robots.txt {
    log_not_found off;
    access_log off;
}

# assets, media
location ~* \.(?:css(\.map)?|js(\.map)?|jpe?g|png|gif|ico|cur|heic|webp|tiff?|mp3|m4a|aac|ogg|midi?|wav|mp4|mov|webm|mpe?g|avi|ogv|flv|wmv)$ {
    expires 7d;
    access_log on;
}

# svg, fonts
location ~* \.(?:svgz?|ttf|ttc|otf|eot|woff2?)$ {
    add_header Access-Control-Allow-Origin "*";
    expires 7d;
    access_log off;
}

# gzip
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_types text/plain text/css text/xml application/json application/javascript application/rss+xml application/atom+xml image/svg+xml;
```

到这里软件源配置就基本完成了。

效果图如下:

![](https://gitee.com/godu/blogimage/raw/master/blog/20200930/mirros_done.png)

UI借鉴了网易开源镜像站

#### 踩的pypi坑，小记备忘

![](https://gitee.com/godu/blogimage/raw/master/blog/20200930/pypi.png)

pypi源不同于其他，需要额外配置nginx规则

```
    location /pypi/ {
	proxy_pass http://127.0.0.1:8081/artifactory/api/pypi/pypi/;
   	include nginxconfig.io/proxy.conf;
    }
```

使用

```
~/.pip/pip.conf
[global]
index-url = https://mirrors.ysicing.me/pypi/simple

# 测试
git clone https://gitee.com/ysbot/CTFd.git --depth 1
cd CTFd
pip3 install -r requirements.txt
```

#### Go代理

新版本对Go代理做了优化，使用很流程，创建远程Go，源使用`https://goproxy.cn`

```
go env -w GO111MODULE=on
go env -w GOPROXY=https://mirrors.ysicing.me/go/,direct
```

