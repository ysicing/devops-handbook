---
title: "初始化Debian"
date: 2020-05-18T22:55:18+08:00
description: "初始化Debian"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- debian
- 安装
series:
-
categories: 
- debian
image:
---

## 初始化Debian

> 基础环境配置和安装docker配置

```
all.yaml: 系统+docker
docker.yaml: 安装docker
init.yaml: 系统
```

### 命令行工具

> 仅使用debian系统

```
ergo init debian -h
```

### 宿主机初始化

```
git clone https://github.com/ysicing/play-ansible.git
cd play-ansible
# 安装ansible,如果已安装可跳过
./install.sh
# 配置初始化机器
cp inventory.ini.example inventory.ini
# 执行初始化
ansible-playbook init.yml
```

### 容器化方式初始化

```bash
docker pull ysicing/ansible
docker run -it --rm ysicing/ansible bash
cp inventory.ini.example inventory.ini
# 初始化系统
ansible-playbook init.yml
exit
```