## 在线重装Debian

### 背景

- 一条命令快速重装干净的Linux环境
- 目前仅支持Debian(不会不打算支持其他系统)
- 基于萌咖大佬的二次魔改

### 默认做了

- 默认root密码 vagrant(安装完成建议修改，禁止密码登录)
- 默认配置源为`mirrors.tuna.tsinghua.edu.cn`,默认添加了`security`,`backports`
- 默认时区为`Asia/Shanghai`
- 默认安装了`curl wget openssh-server sudo sed apt-transport-https net-tools`等常用工具
- 同时默认支持自定义密码

### 安装

```bash
curl -sSL https://ysicing.me/hack/reinstall/install.sh | bash
# 指定参数
bash <(wget --no-check-certificate -qO- 'https://ysicing.me/hack/reinstall/install.sh') -p thah6oob7KieChie
```

### 自定义硬盘

> 存在多个硬盘时，需要下载 [`https://ysicing.me/hack/reinstall/installhk.sh`](https://ysicing.me/hack/reinstall/installhk.sh)文件，编辑如下部分即可

```bash
d-i partman-auto/disk string /dev/sdb
```

### 参考附录

[[ Linux VPS ] Debian/Ubuntu/CentOS 网络安装/重装系统/纯净安装 一键脚本](https://moeclub.org/2018/04/03/603/?spm=55.3)