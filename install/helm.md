## helm 安装

> 安装docker时默认已经安装了helm,如果不是最新版本请`upgrade-tools`

```bash
docker pull ysicing/tools
docker run --rm -v /usr/local/bin:/sysdir ysicing/tools tar zxf /pkg.tgz -C /sysdir
# 版本
helm version
version.BuildInfo{Version:"v3.1.2", GitCommit:"d878d4d45863e42fd5cff6743294a11d28a9abce", GitTreeState:"clean", GoVersion:"go1.13.8"}
```

### 配置国内helm镜像库

```bash
# 自动
helminit

# 手动
helm repo add stable http://mirror.azure.cn/kubernetes/charts/
helm repo add incubator http://mirror.azure.cn/kubernetes/charts-incubator/
```