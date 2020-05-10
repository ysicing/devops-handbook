## 安装linkerd v2

#### 安装二进制

```
docker run --rm -v /usr/local/bin:/sysdir ysicing/tools tar zxf /pkg.tgz -C /sysdir
```

#### 获取相关镜像

```bash
linkerd install --ignore-cluster | grep image: | sed -e 's/^ *//' | sort | uniq | awk '{print $2}' | xargs -I {} docker pull {}
linkerd install --ignore-cluster | grep image: | sed -e 's/^ *//' | sort | uniq | awk '{print $2}' | grep "gcr.io/linkerd-io" | awk -F/ '{print $NF}' | xargs -I {} docker tag gcr.io/linkerd-io/{} ysicing/linkerd-io-{}
linkerd install --ignore-cluster | grep image: | sed -e 's/^ *//' | sort | uniq | awk '{print $2}' | grep "gcr.io/linkerd-io" | awk -F/ '{print $NF}' | xargs -I {} docker push ysicing/linkerd-io-{}
```

#### 同步到内网环境

```bash
linkerd install --ignore-cluster | grep image: | sed -e 's/^ *//' | sort | uniq | awk '{print $2}' | grep "gcr.io/linkerd-io" | awk -F/ '{print $NF}' | xargs -I {} docker pull ysicing/linkerd-io-{}
linkerd install --ignore-cluster | grep image: | sed -e 's/^ *//' | sort | uniq | awk '{print $2}' | grep "gcr.io/linkerd-io" | awk -F/ '{print $NF}' | xargs -I {} docker tag ysicing/linkerd-io-{} hub.godu.dev/linkerd/{}
linkerd install --ignore-cluster | grep image: | sed -e 's/^ *//' | sort | uniq | awk '{print $2}' | grep "gcr.io/linkerd-io" | awk -F/ '{print $NF}' | xargs -I {} docker push hub.godu.dev/linkerd/{}
```

#### 安装

```bash
linkerd check --pre
linkerd install --registry hub.godu.dev/linkerd | kubectl apply -f -
linkerd check
```

#### 启用

```
# 已有应用
kubectl get -n emojivoto deploy/web -o yaml | linkerd inject - | kubectl apply -f -
# go 创建应用
func (app *TalkController) CustomAnnotations() map[string]string {
	return map[string]string{
		"linkerd.io/inject": "enabled",
		//"prometheus.io/port": "12306",
		//"prometheus.io/scrape": "true",
	}
}
# deploy
  template:
    metadata:
      annotations:
        linkerd.io/inject: enabled
        prometheus.io/port: "80"
        prometheus.io/scrape: "true"
```