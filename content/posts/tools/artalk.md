---
title: "Docusaurus配置评论系统artalk"
date: 2023-03-19T18:59:59+08:00
description: "本文主要介绍如何在Docusaurus开启评论系统artalk"
tags:
- self-hosted
- bark
- docusaurus
- artalk
keywords:
- self-hosted
- bark
- docusaurus
- artalk
---





Artalk 是一款简洁的自托管评论系统.

<!-- truncate -->

## Artalk的应用场景

丰富博客的社会化功能

功能亮点:

- 轻量设计
- 麻雀虽小，五脏俱全
  - Markdown语法 + 代码高亮
  - 通知中心支持站内：侧边栏 + 红点标记
  - 表情包支持 OwO 格式 + 动态加载
  - 等等

## 部署服务端

自主可控选择自己安装服务端哈。支持多种安装方式. 这里我们以k8s为例, 其实服务比较简单, 在k8s跑起来也比较简单.

<details>
<summary>k8s yaml</summary>

```yaml title="artalk.yaml"
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  labels:
    k8s.ysicing.me/name: artalk
  name: artalk
spec:
  # storageClassName: tkecfs
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 1Gi
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    k8s.ysicing.me/name: artalk
  name: artalk
spec:
  replicas: 1
  selector:
    matchLabels:
      k8s.ysicing.me/name: artalk
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 0%
    type: RollingUpdate
  template:
    metadata:
      labels:
        k8s.ysicing.me/name: artalk
    spec:
      containers:
      - image: artalk/artalk-go
        imagePullPolicy: Always
        name: artalk
        resources:
          limits:
            cpu: 150m
            memory: 256Mi
          requests:
            cpu: 50m
            memory: 128Mi
        volumeMounts:
        - mountPath: /data
          name: artalk
      restartPolicy: Always
      volumes:
      - name: artalk
        persistentVolumeClaim:
          claimName: artalk
---
apiVersion: v1
kind: Service
metadata:
  labels:
    k8s.ysicing.me/name: artalk
  name: artalk
spec:
  ports:
  - name: http
    port: 23366
    protocol: TCP
    targetPort: 23366
  selector:
    k8s.ysicing.me/name: artalk
  type: ClusterIP
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  labels:
    k8s.ysicing.me/name: artalk
  name: artalk
spec:
  rules:
  - host: artalk.ysicing.cloud
    http:
      paths:
      - backend:
          service:
            name: artalk
            port:
              name: http
        path: /
        pathType: ImplementationSpecific

```

</details>

将上述文件保存为artalk.yaml并apply到集群

```bash
kubectl apply -f artalk.yaml
```

### 配置管理员

进入容器创建管理员:

```bash
kubectl exec -it pods/artalk-6bcf66b5cf-77569  -- bash
# 交换完成信息添加
artalk admin
# 登录后台访问添加站点
```

### 修改配置文件

直接修改配置文件, 按需修改配置文件, 细节可以参考 [artalk官方指南](https://artalk.js.org/guide/frontend/sidebar.html)

:::tips 注意事项
需要禁用版本检查，不然前端会报错

```yaml title="需要检查这个参数是否为false"
versionCheck: false`
```

:::

## Docusaurus集成

```bash
yarn add artalk
```

### 评论支持

由于我的博客主题从[愧怍](https://kuizuo.cn/)那抄过来的，只需要将`giscus`换成`artalk`即可

<Tabs
  defaultValue="artalk"
  values={[
    {label: 'artalk', value: 'artalk'},
    {label: 'giscus', value: 'giscus'},
  ]}>
  <TabItem value="artalk" label="artalk">
    <details>
<summary>artalk代码</summary>

```ts
import React, { useEffect }  from 'react'
import 'artalk/dist/Artalk.css'
import BrowserOnly from '@docusaurus/BrowserOnly';
export default function Comment(): JSX.Element {
  return (
    <BrowserOnly fallback={<div>Loading Comments...</div>}>
      {() => {
        const Artalk = require('artalk').default;
        useEffect(() => {
          Artalk.init({
            el: '#comment',
            pageKey: `${window.location.pathname}`,
            pageTitle: `${window.document.title}`,
            server: 'https://artalk.ysicing.cloud/',
            site: '缘生笔记',
          });
        });
        return <div id="comment" className="artalk-comments" />;
      }}
    </BrowserOnly>
  );
}
```

</details>

  </TabItem>
  <TabItem value="giscus" label="giscus">
        <details>
<summary>giscus代码</summary>

```ts
import React from 'react'
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { ThemeConfig } from '@docusaurus/preset-classic'
import BrowserOnly from '@docusaurus/BrowserOnly'
import Giscus, { GiscusProps } from '@giscus/react'

interface CustomThemeConfig extends ThemeConfig {
  giscus: GiscusProps & { darkTheme: string }
}

const defaultConfig: Partial<GiscusProps> & { darkTheme: string } = {
  id: 'comments',
  mapping: 'title',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  lang: 'zh-CN',
  theme: 'light',
  darkTheme: 'dark',
}

export default function Comment(): JSX.Element {
  const themeConfig = useThemeConfig() as CustomThemeConfig
  const { i18n } = useDocusaurusContext()

  // merge default config
  const giscus = { ...defaultConfig, ...themeConfig.giscus }

  if (!giscus.repo || !giscus.repoId || !giscus.categoryId) {
    throw new Error(
      'You must provide `repo`, `repoId`, and `categoryId` to `themeConfig.giscus`.',
    )
  }

  giscus.theme =
    useColorMode().colorMode === 'dark' ? giscus.darkTheme : giscus.theme
  giscus.lang = i18n.currentLocale

  return (
    <BrowserOnly fallback={<div>Loading Comments...</div>}>
      {() => <Giscus {...giscus} />}
    </BrowserOnly>
  )
}
```

</details>

  </TabItem>
</Tabs>

### 问题

:::note
评论框需要刷新页面才能看到
:::

## 最后

欢迎大家评论测试哈哈哈
