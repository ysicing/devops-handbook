"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9547],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},14021:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=t(83117),a=t(80102),s=(t(67294),t(3905)),i=["components"],o={title:"\u5b89\u88c5k3s\u96c6\u7fa4",tags:["k3s"]},l=void 0,c={unversionedId:"k3s/install",id:"k3s/install",title:"\u5b89\u88c5k3s\u96c6\u7fa4",description:"\u4e0b\u8f7d\u4e8c\u8fdb\u5236",source:"@site/docs/k3s/install.md",sourceDirName:"k3s",slug:"/k3s/install",permalink:"/docs/k3s/install",draft:!1,tags:[{label:"k3s",permalink:"/docs/tags/k-3-s"}],version:"current",lastUpdatedBy:"ysicing",lastUpdatedAt:1672487896,formattedLastUpdatedAt:"2022\u5e7412\u670831\u65e5",frontMatter:{title:"\u5b89\u88c5k3s\u96c6\u7fa4",tags:["k3s"]},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6eExternal DNS\u9644\u52a0\u7ec4\u4ef6\u652f\u6301DNSPod",permalink:"/docs/k8s/dnspod-external-dns"}},u={},p=[{value:"\u4e0b\u8f7d\u4e8c\u8fdb\u5236",id:"\u4e0b\u8f7d\u4e8c\u8fdb\u5236",level:2},{value:"\u90e8\u7f72\u63a7\u5236\u5e73\u9762",id:"\u90e8\u7f72\u63a7\u5236\u5e73\u9762",level:2},{value:"\u542f\u52a8\u63a7\u5236\u5e73\u9762",id:"\u542f\u52a8\u63a7\u5236\u5e73\u9762",level:3},{value:"\u6dfb\u52a0\u8ba1\u7b97\u8282\u70b9",id:"\u6dfb\u52a0\u8ba1\u7b97\u8282\u70b9",level:2},{value:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6",id:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u751f\u6210\u8ba1\u7b97\u8282\u70b9\u914d\u7f6e\u5e76\u542f\u52a8",id:"\u751f\u6210\u8ba1\u7b97\u8282\u70b9\u914d\u7f6e\u5e76\u542f\u52a8",level:3},{value:"\u5b89\u88c5\u7f51\u7edc\u7ec4\u4ef6",id:"\u5b89\u88c5\u7f51\u7edc\u7ec4\u4ef6",level:2},{value:"\u5b89\u88c5ingress\u7ec4\u4ef6",id:"\u5b89\u88c5ingress\u7ec4\u4ef6",level:2},{value:"ingress\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"ingress\u81ea\u5b9a\u4e49\u914d\u7f6e",level:3}],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u4e0b\u8f7d\u4e8c\u8fdb\u5236"},"\u4e0b\u8f7d\u4e8c\u8fdb\u5236"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://ghproxy.com/https://github.com/k3s-io/k3s/releases/download/v1.24.4%2Bk3s1/k3s\nchmod +x k3s\nmv k3s /usr/local/bin/k3s\n")),(0,s.kt)("h2",{id:"\u90e8\u7f72\u63a7\u5236\u5e73\u9762"},"\u90e8\u7f72\u63a7\u5236\u5e73\u9762"),(0,s.kt)("p",null,"\u624b\u52a8\u90e8\u7f72,\u65b9\u4fbf\u6539\u53c2\u6570"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# /etc/systemd/system/k3s.service\n[Unit]\nDescription=Lightweight Kubernetes\nDocumentation=https://k3s.io\nWants=network-online.target\n\n[Install]\nWantedBy=multi-user.target\n\n[Service]\nType=notify\nEnvironmentFile=-/etc/systemd/system/k3s.service.env\nKillMode=process\nDelegate=yes\n# Having non-zero Limit*s causes performance problems due to accounting overhead\n# in the kernel. We recommend using cgroups to do container-local accounting.\nLimitNOFILE=1048576\nLimitNPROC=infinity\nLimitCORE=infinity\nTasksMax=infinity\nTimeoutStartSec=0\nRestart=always\nRestartSec=5s\nExecStartPre=-/sbin/modprobe br_netfilter\nExecStartPre=-/sbin/modprobe overlay\nExecStart=/usr/local/bin/k3s server --tls-san kubeapi.ysicing.local --cluster-cidr 10.80.0.0/16 --service-cidr 10.90.0.0/16 --service-node-port-range 30000-60000 --cluster-dns 10.90.0.10 --cluster-domain ysicing.local --flannel-backend none --disable-network-policy --disable-helm-controller --disable servicelb,traefik   --kube-proxy-arg "proxy-mode=ipvs" "masquerade-all=true"  --kube-proxy-arg "metrics-bind-address=0.0.0.0"\n')),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"--tls-san")," \u8fd9\u91cc\u5199\u81ea\u5df1\u7684\u57df\u540d, kubeconfig\u5230\u65f6\u5019\u6709\u7528"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"--flannel-backend")," \u6211\u9700\u8981\u90e8\u7f72cilium,\u8fd9\u91cc\u9ed8\u8ba4\u5c31\u4e3anone"),(0,s.kt)("li",{parentName:"ul"},"kube-proxy \u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"ipvs")," \u6a21\u5f0f"),(0,s.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u9ed8\u8ba4\u6570\u636e\u5b58\u50a8\u662f ",(0,s.kt)("inlineCode",{parentName:"li"},"Sqlite"),", \u8282\u7701\u8d44\u6e90"))),(0,s.kt)("h3",{id:"\u542f\u52a8\u63a7\u5236\u5e73\u9762"},"\u542f\u52a8\u63a7\u5236\u5e73\u9762"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable k3s --now\n")),(0,s.kt)("h2",{id:"\u6dfb\u52a0\u8ba1\u7b97\u8282\u70b9"},"\u6dfb\u52a0\u8ba1\u7b97\u8282\u70b9"),(0,s.kt)("p",null,"\u548c\u7ba1\u7406\u8282\u70b9\u7c7b\u4f3c"),(0,s.kt)("h3",{id:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6"},"\u751f\u6210\u914d\u7f6e\u6587\u4ef6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cat > /etc/systemd/system/k3s-agent.service.env <<EOF\nK3S_URL=https://<master_ip\u6216\u8005tls-san\u81ea\u5b9a\u4e49\u57df\u540d>:6443\nK3S_TOKEN=xxxxxxxx\nEOF\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"K3S_TOKEN"),"\u52a0\u5165\u96c6\u7fa4\u6240\u9700\u7684token\uff0c\u53ef\u4ee5\u5728\u7ba1\u7406\u8282\u70b9\u4e0a\u67e5\u770b ",(0,s.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/node-token")," \u6587\u4ef6"))),(0,s.kt)("h3",{id:"\u751f\u6210\u8ba1\u7b97\u8282\u70b9\u914d\u7f6e\u5e76\u542f\u52a8"},"\u751f\u6210\u8ba1\u7b97\u8282\u70b9\u914d\u7f6e\u5e76\u542f\u52a8"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# cat /etc/systemd/system/k3s.service\n[Unit]\nDescription=Lightweight Kubernetes\nDocumentation=https://k3s.io\nWants=network-online.target\n\n[Install]\nWantedBy=multi-user.target\n\n[Service]\nType=exec\nEnvironmentFile=/etc/systemd/system/k3s-agent.service.env\nKillMode=process\nDelegate=yes\nLimitNOFILE=infinity\nLimitNPROC=infinity\nLimitCORE=infinity\nTasksMax=infinity\nTimeoutStartSec=0\nRestart=always\nRestartSec=5s\nExecStartPre=-/sbin/modprobe br_netfilter\nExecStartPre=-/sbin/modprobe overlay\nExecStart=/usr/local/bin/k3s agent --kube-proxy-arg "proxy-mode=ipvs" "masquerade-all=true"     --kube-proxy-arg "metrics-bind-address=0.0.0.0"\n')),(0,s.kt)("p",null,"\u542f\u52a8\u8ba1\u7b97\u8282\u70b9"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable k3s --now\n")),(0,s.kt)("h2",{id:"\u5b89\u88c5\u7f51\u7edc\u7ec4\u4ef6"},"\u5b89\u88c5\u7f51\u7edc\u7ec4\u4ef6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'cilium install --helm-set rollOutCiliumPods=true,ipam.operator.clusterPoolIPv4PodCIDR="10.80.0.0/16"\ncilium hubble enable --ui\n')),(0,s.kt)("h2",{id:"\u5b89\u88c5ingress\u7ec4\u4ef6"},"\u5b89\u88c5ingress\u7ec4\u4ef6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://ghproxy.com/https://raw.githubusercontent.com/ysicing/default-backend/master/deploy.yaml\nhelm upgrade -i nginx-ingress-controller bitnami/nginx-ingress-controller -n kube-system -f ./nginx-ingress-controller.yaml --version 9.2.19\n")),(0,s.kt)("h3",{id:"ingress\u81ea\u5b9a\u4e49\u914d\u7f6e"},"ingress\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# nginx-ingress-controller.yaml\nclusterDomain: ysicing.local\nconfig:\n  access-log-path: /var/log/nginxweb/nginx_access.log\n  compute-full-forwarded-for: "true"\n  custom-http-errors: 403,503\n  error-log-path: /var/log/nginxweb/nginx_error.log\n  forwarded-for-header: X-Forwarded-For\n  generate-request-id: "true"\n  keep-alive-requests: "10000"\n  log-format-escape-json: "true"\n  log-format-upstream: \'{ "timestamp": "$time_iso8601", "network": { "x-forward-for":\n    "$proxy_add_x_forwarded_for", "remote_addr": "$remote_addr"}, "user": { "id":\n    "$remote_user"},"user-agent": {"original": "$http_user_agent"},"namespace": "$namespace","http":\n    { "version": "$server_protocol", "request": {"body": {"bytes":$body_bytes_sent},\n    "bytes":$request_length, "method": "$request_method", "referrer": "$http_referer",\n    "request_id": "$request_id"}, "response": {"body": {"bytes":$body_bytes_sent},\n    "bytes":$bytes_sent, "status_code": "$status", "time":$request_time}, "upstream":\n    {"name": "$proxy_upstream_name", "bytes": $upstream_response_length, "status_code":"$upstream_status",\n    "time":$upstream_response_time, "address": "$upstream_addr"}, "url": {"domain":\n    "$host","path": "$uri", "query": "$args", "original": "$request_uri"}}}\'\n  max-worker-connections: "65536"\n  proxy-body-size: 50m\n  upstream-keepalive-connections: "200"\n  use-forwarded-headers: "true"\n  gzip-level: "9"\n  use-gzip: "true"\ndefaultBackendService: "kube-system/custom-default-backend"\nreportNodeInternalIp: true\nwatchIngressWithoutClass: true\ningressClassResource:\n  name: nginx\n  enabled: true\n  default: true\nextraArgs:\n  default-ssl-certificate: "cce-system/tls-ysicing-net"\nhostNetwork: true\ndnsPolicy: ClusterFirstWithHostNet\nnodeSelector:\n  kubernetes.io/hostname: "knj03.ysicing.cloud"\n  # node-role.kubernetes.io/lb: "true"\nextraVolumes:\n  - emptyDir: {}\n    name: log-volume\nextraVolumeMounts:\n  - mountPath: /var/log/nginxweb\n    name: log-volume\ndefaultBackend:\n  enabled: false\nmetrics:\n  enabled: true\n  serviceMonitor:\n    enabled: true\n')),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"\u4e3a\u5565nginx-ingress-controller\u9009\u62e9\u8fd9\u4e2a\u7248\u672c",(0,s.kt)("inlineCode",{parentName:"p"},"9.2.19"),", \u56e0\u4e3a\u8fd9\u4e2a\u7248\u672c\u4e4b\u540e\uff0c\u5728debian 11(5.18)\u7684\u5185\u6838\u4e0a\u8fd0\u884c\u4f1acrash, \u7b80\u5355\u6392\u67e5\u540e\u6ca1\u6709\u89e3\u51b3\u9014\u5f84, \u56de\u6eda\u5230\u8fd9\u4e2a\u7248\u672c")))}m.isMDXComponent=!0}}]);