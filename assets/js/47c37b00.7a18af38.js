"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3858],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(k,s(s({ref:n},p),{},{components:t})):r.createElement(k,s({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35302:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),s=["components"],o={title:"debian10\u5b89\u88c5k3s",date:new Date("2020-05-18T14:55:18.000Z"),description:"debian10\u5b89\u88c5k3s",tags:["kubernetes","k3s"]},l=void 0,c={permalink:"/posts/k3s-install",source:"@site/blog/posts/k3s-install.md",title:"debian10\u5b89\u88c5k3s",description:"debian10\u5b89\u88c5k3s",date:"2020-05-18T14:55:18.000Z",formattedDate:"2020\u5e745\u670818\u65e5",tags:[{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"k3s",permalink:"/tags/k-3-s"}],readingTime:1.01,hasTruncateMarker:!0,authors:[],frontMatter:{title:"debian10\u5b89\u88c5k3s",date:"2020-05-18T14:55:18.000Z",description:"debian10\u5b89\u88c5k3s",tags:["kubernetes","k3s"]},prevItem:{title:"helm\u90e8\u7f72drone",permalink:"/posts/helm-drone"},nextItem:{title:"k8s\u5e38\u7528\u6269\u5c55\u7ec4\u4ef6",permalink:"/posts/k8s-addons"}},p={authorsImageUrls:[]},u=[{value:"\u5347\u7ea7\u5185\u6838\u7248\u672c",id:"\u5347\u7ea7\u5185\u6838\u7248\u672c",level:2},{value:"\u5b89\u88c5 wireguard",id:"\u5b89\u88c5-wireguard",level:2},{value:"\u90e8\u7f72\u63a7\u5236\u5e73\u9762master\u8282\u70b9",id:"\u90e8\u7f72\u63a7\u5236\u5e73\u9762master\u8282\u70b9",level:2},{value:"\u90e8\u7f72\u8ba1\u7b97worker\u8282\u70b9",id:"\u90e8\u7f72\u8ba1\u7b97worker\u8282\u70b9",level:2}],d={toc:u},m="wrapper";function k(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"k3s \u662fRancher\u63a8\u51fa\u7684\u8f7b\u91cf\u7ea7 k8s."),(0,i.kt)("h2",{id:"\u5347\u7ea7\u5185\u6838\u7248\u672c"},"\u5347\u7ea7\u5185\u6838\u7248\u672c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apt update\napt dist-upgrade\napt install -t buster-backports linux-image-amd64 -y\nupdate-grub\nreboot\n# \u5185\u6838\nLinux cn2 5.6.0-0.bpo.2-amd64 #1 SMP Debian 5.6.14-2~bpo10+1 (2020-06-09) x86_64 GNU/Linux\n")),(0,i.kt)("p",null,"\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/posts/debian-op/"},"Debian\u4e2a\u4eba\u5e38\u7528\u64cd\u4f5c\u6307\u5357")," \u5347\u7ea7\u5185\u6838\u90e8\u5206\u3002"),(0,i.kt)("h2",{id:"\u5b89\u88c5-wireguard"},"\u5b89\u88c5 wireguard"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#  \u6240\u6709\u8282\u70b9\u9700\u5b89\u88c5\napt install wireguard -y\n")),(0,i.kt)("h2",{id:"\u90e8\u7f72\u63a7\u5236\u5e73\u9762master\u8282\u70b9"},"\u90e8\u7f72\u63a7\u5236\u5e73\u9762master\u8282\u70b9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cat > /etc/systemd/system/k3s.service <<EOF\n[Unit]\nDescription=Lightweight Kubernetes\nDocumentation=https://k3s.io\nWants=network-online.target\n\n[Install]\nWantedBy=multi-user.target\n\n[Service]\nType=notify\nEnvironmentFile=-/etc/systemd/system/k3s.service.env\nKillMode=process\nDelegate=yes\n# Having non-zero Limit*s causes performance problems due to accounting overhead\n# in the kernel. We recommend using cgroups to do container-local accounting.\nLimitNOFILE=1048576\nLimitNPROC=infinity\nLimitCORE=infinity\nTasksMax=infinity\nTimeoutStartSec=0\nRestart=always\nRestartSec=5s\nExecStartPre=-/sbin/modprobe br_netfilter\nExecStartPre=-/sbin/modprobe overlay\nExecStart=/usr/local/bin/k3s \\\n    server \\\n    --tls-san 10.147.20.42 \\\n    --node-ip 10.147.20.42 \\\n    --node-external-ip 10.147.20.42 \\\n    --docker \\\n    --pause-image registry.cn-beijing.aliyuncs.com/k7scn/pause:3.2 \\\n    --flannel-backend wireguard \\\n    --kube-proxy-arg "proxy-mode=ipvs" "masquerade-all=true" \\\n    --kube-proxy-arg "metrics-bind-address=0.0.0.0"\nEOF\n')),(0,i.kt)("p",null,"\u5f00\u673a\u542f\u52a8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable k3s --now\n")),(0,i.kt)("p",null,"\u67e5\u770b\u7ec4\u4ef6\u72b6\u6001"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"k3s kubectl get cs\nNAME                 STATUS    MESSAGE   ERROR\ncontroller-manager   Healthy   ok\nscheduler            Healthy   ok\n")),(0,i.kt)("h2",{id:"\u90e8\u7f72\u8ba1\u7b97worker\u8282\u70b9"},"\u90e8\u7f72\u8ba1\u7b97worker\u8282\u70b9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cat > /etc/systemd/system/k3s-agent.service <<EOF\n[Unit]\nDescription=Lightweight Kubernetes\nDocumentation=https://k3s.io\nWants=network-online.target\n\n[Install]\nWantedBy=multi-user.target\n\n[Service]\nType=exec\nEnvironmentFile=-/etc/systemd/system/k3s-agent.service.env\nKillMode=process\nDelegate=yes\nLimitNOFILE=infinity\nLimitNPROC=infinity\nLimitCORE=infinity\nTasksMax=infinity\nTimeoutStartSec=0\nRestart=always\nRestartSec=5s\nExecStartPre=-/sbin/modprobe br_netfilter\nExecStartPre=-/sbin/modprobe overlay\nExecStart=/usr/local/bin/k3s agent \\\n    --node-external-ip 10.147.20.43 \\\n    --node-ip 10.147.20.43 \\\n    --docker \\\n    --pause-image registry.cn-beijing.aliyuncs.com/k7scn/pause:3.2 \\\n    --kube-proxy-arg "proxy-mode=ipvs" "masquerade-all=true" \\\n    --kube-proxy-arg "metrics-bind-address=0.0.0.0"\nEOF\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"K3S_TOKEN : \u52a0\u5165\u96c6\u7fa4\u6240\u9700\u7684token\uff0c\u53ef\u4ee5\u5728\u63a7\u5236\u8282\u70b9\u4e0a\u67e5\u770b",(0,i.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/node-token")," \u6587\u4ef6")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat > /etc/systemd/system/k3s-agent.service.env <<EOF\nK3S_URL=https://10.147.20.42:6443\nK3S_TOKEN=K102f2c1f6c878f693700c24b741d309d2ff4038ade912f0a44248781c04376e878::server:bc39d44d89042011b985f267eebe2b2f\nEOF\n")),(0,i.kt)("p",null,"\u5f00\u673a\u542f\u52a8 "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"systemctl enable k3s-agent --now\n")))}k.isMDXComponent=!0}}]);