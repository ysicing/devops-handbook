---
title: 搭建开源的 Telegram 人形自走机器人 PagerMaid
date: 2023-04-08T20:00:00+08:00
description: 搭建开源的 Telegram 人形自走机器人 PagerMaid
tags:
- telegram
- tg
- bot
keywords:
- telegram
- tg
- bot
- PagerMaid
url: /451/telegram-userbot-pagermaid
---

> 提高TG的使用体验，主要是屏蔽恶意私聊

<!-- truncate -->

## 什么是 PagerMaid

PagerMaid 是一个开源的 Telegram 人形自走Bot解决方案，基于Python开发，它可以帮助你管理群组，提供一系列有趣的功能，以及一些实用的工具。

:::tips

本教程基于 Debian 11 系统，搭建 Pagermaid-Pyro
开源地址：<https://github.com/TeamPGM/PagerMaid-Pyro>
官方网站：<https://xtaolabs.com/>

:::

:::note 免责声明

- 本教程仅供学习交流使用，造成其他等等后果自行承担(无法承诺 Userbot 行为不会被 Telegram 官方滥权，也无法承诺所有功能能在自建项目上成功运行)。
- 上述部署不适用于中国大陆

:::

## 手动安装

可以参考[官方文档](https://xtaolabs.com/#/install_dependencies?id=debian-ubuntu)手动安装

### 安装系统常用包

```bash
apt install python3-pip git -y
```

### 配置用户

不需要`root`一梭子

### 安装

```bash
git clone https://github.com/TeamPGM/PagerMaid-Pyro.git pagermaid
cd pagermaid
pip3 install -r requirements.txt
cp config.gen.yml config.yml
```

### 修改配置文件

在 [Telegram 开发者面板](https://my.telegram.org) 生成 API 信息，将 App `api_id` 和  `api_hash` 分别填入 api_key 和 api_hash

:::danger 需注意一下

- 申请 API 属于高危操作，特别是新注册的 Telegram 账号和使用 VoIP 语音号码注册的账号会加大封号概率，如被封号，请尽快向客服申诉申请解封,同时请勿将 API 泄露给他人。

- 涉及账号登录的需要加国际区号，如`+86`

:::

```yml title="调整的地方如下, 开启web方便装插件(可通过其他途径安装哈，可选的)"
api_id: "你的"
api_hash: "你的"
web_interface:
  enable: "True"
  secret_key: "你的密码"
  host: "你的ip(内网穿透ip)"
  port: "你的端口"
# 记录日志，咱不需要也看不懂😂
log: "False"
```

### 前台运行测试一下

```bash title="安装提示一步一步操作就可以了"
python3 -m pagermaid
```

私信自己(Saved Message)，输入`,help`，如果出现帮助信息，说明安装成功

:::danger 请勿分享您的session文件

请注意保护好您已登录的 pagermaid.session (该文件在 Pagermaid 运行目录下) 。此文件可以登录账号，请不要分享给他人使用。

:::

### Systemd运行

```bash title="/etc/systemd/system/pagermaid.service"
[Unit]
Description=PagerMaid-Pyro Telegram Utility Daemon
After=network.target

[Install]
WantedBy=multi-user.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/root/code/pagermaid
ExecStart=/usr/bin/python3 -m pagermaid
Restart=always
```

开机自启动

```bash
systemctl enable pagermaid --now
```

## 插件

安装只是第一步，重点是插件的使用(请勿安装来历不明的插件，避免造成损失)

官方插件仓库：<https://github.com/TeamPGM/PagerMaid_Plugins_Pyro>

:::tip 安装插件

- 通过ui安装
- 通过聊天方式安装, 发送`,apt install 插件名`即可

:::

## 推荐插件

- `pmcaptcha`: 验证码插件，防止恶意私聊(重点这个叭, +86是重灾区)
- `autodel`: 自动删除消息插件(全局1天清理消息`,autodel 1 days global`)
