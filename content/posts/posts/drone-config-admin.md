---
title: "Drone配置管理员账号"
date: 2021-11-11T23:17:02+08:00
description: 本文主要记录一下drone调整管理员

tags:
- drone
- devops
---

<!-- truncate -->

默认已经将drone数据持久化出来了

```yaml
    spec:
      containers:
      - envFrom:
        - configMapRef:
            name: drone
        image: registry.cn-beijing.aliyuncs.com/k7scn/drone:2
        imagePullPolicy: Always
        name: drone
        volumeMounts:
        - mountPath: /data
          name: data
      restartPolicy: Always
      volumes:
      - hostPath:
          path: /data/drone
          type: DirectoryOrCreate
        name: data
```

## debian安装sqlite3

```bash
apt update
apt install sqlite3 -y
```

## 修改数据

```bash
sqlite3 database.sqlite
.header on #开启头部显示。
.mode column # 列输出
.tables
select * from users;
update users set user_admin = 1;
```

## 验证

```bash
drone user info ysicing
User: ysicing
Email: i@ysicing.me
Admin: true
Active: true
Machine: false
```
