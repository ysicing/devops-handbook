---
title: "Systemd 定时器教程"
date: 2020-05-18T22:55:18+08:00
description: "Systemd 定时器教程"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- 冷知识
series:
-
categories: 
- 
image:
---

## 定时任务，如每65分钟执行一次

[crontab 定时任务 65 分钟执行一次，怎么写？](https://www.v2ex.com/t/631917#reply40)

这个时候，用系统自带的crontab就不好实现了,这时候就是systemd该上场了


参考[Systemd 定时器教程](http://www.ruanyifeng.com/blog/2018/03/systemd-timer.html)

```
cat /etc/systemd/system/example.timer
[Unit]
Description=example timer

[Timer]
OnUnitActiveSec=1h
Unit=example.service

[Install]
WantedBy=multi-user.target

cat /etc/systemd/system/example.service
[Unit]
Description=example

[Service]
ExecStart=<相关命令>
[Install]
WantedBy=multi-user.target
```

定制定时器

```
OnActiveSec：定时器生效后，多少时间开始执行任务
OnBootSec：系统启动后，多少时间开始执行任务
OnStartupSec：Systemd 进程启动后，多少时间开始执行任务
OnUnitActiveSec：该单元上次执行后，等多少时间再次执行
OnUnitInactiveSec： 定时器上次关闭后多少时间，再次执行
OnCalendar：基于绝对时间，而不是相对时间执行
AccuracySec：如果因为各种原因，任务必须推迟执行，推迟的最大秒数，默认是60秒
Unit：真正要执行的任务，默认是同名的带有.service后缀的单元
Persistent：如果设置了该字段，即使定时器到时没有启动，也会自动执行相应的单元
WakeSystem：如果系统休眠，是否自动唤醒系统
```

Timer和Service大体用法一致