---
title: "Memos自定义代码片段"
date: 2023-03-18T18:59:59+08:00
description: "本文主要介绍Memos如何自定义代码片段"
tags:
- memos
keywords:
- memos
---

<!-- truncate -->

继续折腾哈，已经部署好了Memos如何进行一些美化呢.

:::tip 测试版本
当前memos版本为v0.11.2
:::

## 自定义字体 霞鹜文楷

起初是看到博主[QiLeq](https://qileq.com/about/site/#%E8%AE%BE%E7%BD%AE%E5%AD%97%E4%BD%93)的博客, 感觉好好看哦, 决定使用这个字体[霞鹜文楷](https://github.com/lxgw/LxgwWenKai)哈。

<details>
<summary>系统-自定义样式</summary>

```css title="自定义样式"
body{font-family: "LXGW WenKai Screen", sans-serif !important;}
```

</details>

<details>
<summary>系统-自定义脚本</summary>

```js title="自定义脚本"
function changeFont() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.7.0/lxgwwenkaiscreen.css";
  document.head.append(link);
};
changeFont()
```

</details>

## 支持私有统计Umami

<details>
<summary>系统-自定义脚本</summary>

```js title="自定义脚本"
function loadUmami() {
const script = document.createElement('script');
script.async = true;
script.defer = true;
script.setAttribute("data-website-id","example-website-id");
script.src = "https://umami.example.domain/umami.js";
document.body.append(script);
};
loadUmami()
```

</details>

## 自定义背景

参考: [自定义样式分享：调用 Bing 每日背景](https://github.com/usememos/memos/discussions/976)

<details>
<summary>系统-自定义样式</summary>

```css title="Bing每日背景"
#root>div:nth-child(1) {
    background-image: url('https://bing.immmmm.com/img/bing?region=zh-CN&type=image');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
#root>div>div.justify-center {
    background-color: rgba(244 244 245 / 30%) !important;
}
#root main,
#root header,
#root aside {
    background-color: rgba(244 244 245 / 60%) !important;
}
.dark #root>div>div.justify-center {
    background-color: rgba(39 39 42 / 30%) !important;
}
.dark #root main,
.dark #root header,
.dark #root aside {
    background-color: rgba(39 39 42 / 60%) !important;
}
.dark .memo-content-wrapper>.expand-btn-container>div.absolute {
    background-color: rgba(39 39 42 / 30%) !important;
}
#root main>div:nth-child(1)>div:nth-child(1)>div:nth-child(2) {
    background-color: transparent !important;
}
#root>div:nth-child(1)>div:nth-child(2)>div:nth-child(1) {
    z-index: 20;
}
#root header {
    min-height: 100vh;
}
#root main>div {
    justify-content: space-between;
}
```

</details>

## 配置对象存储Minio

目前好像不太行, 期待社区优化吧 [usememos/memos#1344](https://github.com/usememos/memos/issues/1344)

### Minio配置

1. 创建新用户`memos`;
2. 创建新bucket`memos`, 类型为公开;
3. 创建Policy, 规则如下;

<details>
<summary>Policy</summary>

```json title="memos policy"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:*"
            ],
            "Resource": [
                "arn:aws:s3:::memos"
            ]
        }
    ]
}
```

</details>

4. 创建Access key(也可以用memos用户的密码)
5. minio客户端验证

<details>
<summary>验证脚本</summary>

```bash title="验证"
mc alias set memos https://memos.ysicing.local memos zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG   --api "s3v4"
 mc ls memos/
```

</details>

## 附录参考

[Memos 自定义代码片段](https://immmmm.com/memos-diy-style/)

