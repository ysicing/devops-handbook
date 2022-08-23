"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1970],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),k=a,b=d["".concat(i,".").concat(k)]||d[k]||p[k]||l;return t?r.createElement(b,s(s({ref:n},u),{},{components:t})):r.createElement(b,s({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15167:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=t(83117),a=t(80102),l=(t(67294),t(3905)),s=["components"],o={title:"Debian 11\u5b89\u88c5k3s",date:new Date("2021-08-15T14:55:18.000Z"),description:"Debian11 (Bullseye)\u5b89\u88c5k3s",tags:["kubernetes","k3s","debian"]},i=void 0,c={permalink:"/posts/k3s-install-bullseye",source:"@site/blog/posts/k3s-install-bullseye.md",title:"Debian 11\u5b89\u88c5k3s",description:"Debian11 (Bullseye)\u5b89\u88c5k3s",date:"2021-08-15T14:55:18.000Z",formattedDate:"2021\u5e748\u670815\u65e5",tags:[{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"k3s",permalink:"/tags/k-3-s"},{label:"debian",permalink:"/tags/debian"}],readingTime:1.2866666666666666,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Debian 11\u5b89\u88c5k3s",date:"2021-08-15T14:55:18.000Z",description:"Debian11 (Bullseye)\u5b89\u88c5k3s",tags:["kubernetes","k3s","debian"]},prevItem:{title:"Caddy2\u63d2\u4ef6Geocn",permalink:"/posts/caddy2-plugin-geocn"},nextItem:{title:"\u57fa\u4e8eALIDNS\u4f7f\u7528cert-manager\u81ea\u52a8\u7b7e\u53d1TLS\u8bc1\u4e66",permalink:"/posts/cert-manager-install"}},u={authorsImageUrls:[]},p=[{value:"\u5347\u7ea7debian10(buster)\u5185\u6838\u7248\u672c",id:"\u5347\u7ea7debian10buster\u5185\u6838\u7248\u672c",level:2},{value:"\u5b89\u88c5 wireguard",id:"\u5b89\u88c5-wireguard",level:2},{value:"\u5b89\u88c5docker",id:"\u5b89\u88c5docker",level:2},{value:"\u90e8\u7f72\u63a7\u5236\u5e73\u9762master\u8282\u70b9",id:"\u90e8\u7f72\u63a7\u5236\u5e73\u9762master\u8282\u70b9",level:2},{value:"\u90e8\u7f72\u8ba1\u7b97worker\u8282\u70b9",id:"\u90e8\u7f72\u8ba1\u7b97worker\u8282\u70b9",level:2},{value:"\u67e5\u770b\u8282\u70b9\u72b6\u6001",id:"\u67e5\u770b\u8282\u70b9\u72b6\u6001",level:2}],d={toc:p};function k(e){var n=e.components,t=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"k3s \u662fRancher\u63a8\u51fa\u7684\u8f7b\u91cf\u7ea7 k8s.")),(0,l.kt)("h2",{id:"\u5347\u7ea7debian10buster\u5185\u6838\u7248\u672c"},"\u5347\u7ea7debian10(buster)\u5185\u6838\u7248\u672c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i 's/buster\\/updates/bullseye-security/g;s/buster/bullseye/g' /etc/apt/sources.list\n\napt update\napt dist-upgrade -y\n# apt install -t bullseye-backports linux-image-amd64 -y\n# update-grub\n# reboot\n# \u5185\u6838\nLinux bj01 5.10.0-0.bpo.8-amd64 #1 SMP Debian 5.10.46-2~bpo10+1 (2021-07-22) x86_64 GNU/Linux\n")),(0,l.kt)("p",null,"\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/posts/debian-op/"},"Debian\u4e2a\u4eba\u5e38\u7528\u64cd\u4f5c\u6307\u5357")," \u5347\u7ea7\u5185\u6838\u90e8\u5206\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5-wireguard"},"\u5b89\u88c5 wireguard"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#  \u6240\u6709\u8282\u70b9\u9700\u5b89\u88c5\napt install wireguard -y\n")),(0,l.kt)("h2",{id:"\u5b89\u88c5docker"},"\u5b89\u88c5docker"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -\necho "deb [arch=amd64] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/debian bullseye stable" | tee /etc/apt/sources.list.d/docker.list\napt update\napt install -y docker-ce\n# \u817e\u8baf\u4e91\u4f7f\u7528bip\u6709\u95ee\u9898 169.254.123.1/24, \u8bf7\u4f7f\u7528172.30.42.1/16\ncat > /etc/docker/daemon.json <<EOF\n{\n  "registry-mirrors": ["https://dyucrs4l.mirror.aliyuncs.com"],\n  "bip": "169.254.123.1/24",\n  "max-concurrent-downloads": 10,\n  "log-driver": "json-file",\n  "log-level": "warn",\n  "log-opts": {\n    "max-size": "30m",\n    "max-file": "3"\n  },\n  "storage-driver": "overlay2"\n}\nEOF\nsystemctl enable docker\nsystemctl daemon-reload\nsystemctl restart docker\ndocker info -f "{{json .ServerVersion }}"\ndocker pull registry.cn-beijing.aliyuncs.com/k7scn/tools\ndocker run --rm -v /usr/local/bin:/sysdir registry.cn-beijing.aliyuncs.com/k7scn/tools tar zxf /pkg.tgz -C /sysdir\n\n')),(0,l.kt)("h2",{id:"\u90e8\u7f72\u63a7\u5236\u5e73\u9762master\u8282\u70b9"},"\u90e8\u7f72\u63a7\u5236\u5e73\u9762master\u8282\u70b9"),(0,l.kt)("p",null,"\u4e0a\u9762\u5b89\u88c5docker/tools\u65f6, \u9ed8\u8ba4\u5185\u7f6e\u4e86k3s,\u7248\u672c",(0,l.kt)("inlineCode",{parentName:"p"},"v1.18.19"),", \u4e5f\u53ef\u4ee5\u81ea\u884c\u4e0b\u8f7d\u5176\u4ed6\u7248\u672c\u7684k3s\u66ff\u6362"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"k3s --version\nk3s version v1.18.19+k3s1 (a260c3c6)\n\n# \u6267\u884c\u5b89\u88c5, \u9ed8\u8ba4\u5f00\u673a\u542f\u52a8\nk3s.master.install\n")),(0,l.kt)("p",null,"\u9ed8\u8ba4k3s.master.install\u914d\u7f6e\u53c2\u6570\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'ExecStart=/usr/local/bin/k3s \\\n    server \\\n    --docker \\\n    --flannel-backend wireguard \\\n    --no-deploy traefik,servicelb \\\n    --kube-proxy-arg "proxy-mode=ipvs" "masquerade-all=true" \\\n    --kube-proxy-arg "metrics-bind-address=0.0.0.0"\n')),(0,l.kt)("p",null,"\u67e5\u770b\u7ec4\u4ef6\u72b6\u6001"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"k3s kubectl get cs\nNAME                 STATUS    MESSAGE   ERROR\ncontroller-manager   Healthy   ok\nscheduler            Healthy   ok\n")),(0,l.kt)("h2",{id:"\u90e8\u7f72\u8ba1\u7b97worker\u8282\u70b9"},"\u90e8\u7f72\u8ba1\u7b97worker\u8282\u70b9"),(0,l.kt)("p",null,"\u4ecemaster\u8282\u70b9\u83b7\u53d6token"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"K3S_TOKEN : \u52a0\u5165\u96c6\u7fa4\u6240\u9700\u7684token\uff0c\u53ef\u4ee5\u5728\u63a7\u5236\u8282\u70b9\u4e0a\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/node-token")," \u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"K3S_URL: master\u8282\u70b9\u5730\u5740")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"export K3S_URL=https://10.147.20.42:6443\nexport K3S_TOKEN=K102f2c1f6c878f693700c24b741d309d2ff4038ade912f0a44248781c04376e878::server:bc39d44d89042011b985f267eebe2b2f\n\nk3s.worker.install\n")),(0,l.kt)("h2",{id:"\u67e5\u770b\u8282\u70b9\u72b6\u6001"},"\u67e5\u770b\u8282\u70b9\u72b6\u6001"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"~# kubectl get nodes\nNAME    STATUS   ROLES    AGE   VERSION\nk3s02   Ready    <none>   53m   v1.18.19+k3s1\nk3s03   Ready    <none>   52m   v1.18.19+k3s1\nk3s01   Ready    master   54m   v1.18.19+k3s1\n")))}k.isMDXComponent=!0}}]);