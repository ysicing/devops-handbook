## Debian Linux,你值得拥有

> 快速启动一个Debian buster环境

### Debian 10.3

```
vagrant init ysicing/debian
vagrant up
```

### Debian 9.11 不在维护了

```
vagrant init ysicing/debian --box-version 9.11.0
vagrant up
```

### 源码

构建box源码 [debian-vagrant](https://github.com/ysicing/debian-vagrant)