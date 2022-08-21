---
title: "Debian11配置Locales"
date: 2021-09-01T10:24:49+08:00
description: 升级Debian11后又遇到locales报错
tags:
- debian
---

<!-- truncate -->

前几天升级Debian11后, 使用iTerm登录机器提示:

```
perl: warning: Setting locale failed.
perl: warning: Please check that your locale settings:
	LANGUAGE = "en_US.utf8",
	LC_ALL = "en_US.UTF-8",
	LC_TERMINAL = "iTerm2",
	LANG = "en_US.utf8"
    are supported and installed on your system.
perl: warning: Falling back to the standard locale ("C").
locale: Cannot set LC_CTYPE to default locale: No such file or directory
locale: Cannot set LC_MESSAGES to default locale: No such file or directory
locale: Cannot set LC_ALL to default locale: No such file or directory
/usr/bin/locale: Cannot set LC_CTYPE to default locale: No such file or directory
/usr/bin/locale: Cannot set LC_MESSAGES to default locale: No such file or directory
/usr/bin/locale: Cannot set LC_ALL to default locale: No such file or directory
```

这不能忍，一梭子`dpkg-reconfigure`解决

```
dpkg-reconfigure locales
# 勾选上
en_US.UTF-8
zh_CN.UTF-8
# ok, 选择默认
en_US.UTF-8
# 最终结果
Generating locales (this might take a while)...
  en_HK.UTF-8... done
  en_US.UTF-8... done
  zh_CN.UTF-8... done
Generation complete.
```

注意:
- 需要使用root用户
