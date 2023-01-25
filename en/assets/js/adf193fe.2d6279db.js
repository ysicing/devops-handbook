"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7501],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return b}});var i=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=i.createContext({}),o=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=o(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=o(t),b=l,d=m["".concat(s,".").concat(b)]||m[b]||p[b]||r;return t?i.createElement(d,a(a({ref:n},c),{},{components:t})):i.createElement(d,a({ref:n},c))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,a=new Array(r);a[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var o=2;o<r;o++)a[o]=t[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77774:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return p}});var i=t(83117),l=t(80102),r=(t(67294),t(3905)),a=["components"],u={title:"k3s\u4f7f\u7528Cilium\u66ff\u6362\u9ed8\u8ba4Flannel",date:new Date("2021-09-24T10:35:25.000Z"),description:"\u672c\u6587\u4e3b\u8981\u8bb2\u8ff0k3s\u4f7f\u7528cilium\u7f51\u7edc",tags:["k3s","cilium"]},s=void 0,o={permalink:"/en/posts/how-to-use-cilium-to-replace-k3s-flannel",source:"@site/blog/posts/how-to-use-cilium-to-replace-k3s-flannel.md",title:"k3s\u4f7f\u7528Cilium\u66ff\u6362\u9ed8\u8ba4Flannel",description:"\u672c\u6587\u4e3b\u8981\u8bb2\u8ff0k3s\u4f7f\u7528cilium\u7f51\u7edc",date:"2021-09-24T10:35:25.000Z",formattedDate:"September 24, 2021",tags:[{label:"k3s",permalink:"/en/tags/k-3-s"},{label:"cilium",permalink:"/en/tags/cilium"}],readingTime:1.3033333333333332,hasTruncateMarker:!0,authors:[],frontMatter:{title:"k3s\u4f7f\u7528Cilium\u66ff\u6362\u9ed8\u8ba4Flannel",date:"2021-09-24T10:35:25.000Z",description:"\u672c\u6587\u4e3b\u8981\u8bb2\u8ff0k3s\u4f7f\u7528cilium\u7f51\u7edc",tags:["k3s","cilium"]},prevItem:{title:"\u7fa4\u6656\u65b0\u5957\u4ef6\uff1aTailscale\u6781\u901f\u7ec4\u7f51",permalink:"/en/posts/tailscale-working-nas-dsm7"},nextItem:{title:"\u90e8\u7f72\u4e00\u7ad9\u5f0f\u8f7b\u76d1\u63a7\u8f7b\u8fd0\u7ef4\u7cfb\u7edf\u54ea\u5412\u76d1\u63a7\u9b54\u6539\u7248\u91d1\u5412\u76d1\u63a7",permalink:"/en/posts/nezha-ops-monitor"}},c={authorsImageUrls:[]},p=[{value:"\u7cfb\u7edf\u8981\u6c42",id:"\u7cfb\u7edf\u8981\u6c42",level:2},{value:"\u4fee\u6539k3s\u914d\u7f6e",id:"\u4fee\u6539k3s\u914d\u7f6e",level:2},{value:"\u79fb\u9664\u7f51\u7edc\u76f8\u5173\u8bbe\u7f6e",id:"\u79fb\u9664\u7f51\u7edc\u76f8\u5173\u8bbe\u7f6e",level:2},{value:"\u5b89\u88c5cilium",id:"\u5b89\u88c5cilium",level:2},{value:"helm\u5b89\u88c5",id:"helm\u5b89\u88c5",level:3},{value:"cilium\u5b89\u88c5",id:"cilium\u5b89\u88c5",level:3},{value:"\u9a8c\u8bc1cilium",id:"\u9a8c\u8bc1cilium",level:3},{value:"\u8bbf\u95eeHubble\u67e5\u770b\u7f51\u7edc\u8fde\u63a5",id:"\u8bbf\u95eehubble\u67e5\u770b\u7f51\u7edc\u8fde\u63a5",level:3},{value:"\u7ed1\u5b9aingress",id:"\u7ed1\u5b9aingress",level:4},{value:"port-forward\u8f6c\u53d1",id:"port-forward\u8f6c\u53d1",level:4}],m={toc:p};function b(e){var n=e.components,u=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},m,u,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7cfb\u7edf\u8981\u6c42"},"\u7cfb\u7edf\u8981\u6c42"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"k3s >= 1.16,(\u9ed8\u8ba4v1.21.5+k3s1)"),(0,r.kt)("li",{parentName:"ul"},"Debian 11\uff0c(\u9ed8\u8ba45.10)")),(0,r.kt)("h2",{id:"\u4fee\u6539k3s\u914d\u7f6e"},"\u4fee\u6539k3s\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/systemd/system/k3s.service\n\n    --flannel-backend none \\\n")),(0,r.kt)("p",null,"\u5c06\u7f51\u7edc\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"none")),(0,r.kt)("h2",{id:"\u79fb\u9664\u7f51\u7edc\u76f8\u5173\u8bbe\u7f6e"},"\u79fb\u9664\u7f51\u7edc\u76f8\u5173\u8bbe\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u79fb\u9664cni\u547d\u540d\u7a7a\u95f4\nip netns show 2>/dev/null | grep cni- | xargs -r -t -n 1 ip netns delete\n# \u79fb\u9664cnio\u7f51\u5361\nip link show 2>/dev/null | grep 'master cni0' | while read ignore iface ignore; do\n    iface=${iface%%@*}\n    [ -z \"$iface\" ] || ip link delete $iface\ndone\nip link delete cni0\nip link delete flannel.1\nrm -rf /var/lib/cni/\n# \u6e05\u7406iptables\niptables-save | grep -v KUBE- | grep -v CNI- | iptables-restore\n")),(0,r.kt)("h2",{id:"\u5b89\u88c5cilium"},"\u5b89\u88c5cilium"),(0,r.kt)("h3",{id:"helm\u5b89\u88c5"},"helm\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-helm"},"helm repo add cilium https://helm.cilium.io/\nhelm install cilium cilium/cilium --version 1.10.4 \\\n   --namespace kube-system\\\n   --set hubble.relay.enabled=true \\\n   --set hubble.ui.enabled=true\n")),(0,r.kt)("h3",{id:"cilium\u5b89\u88c5"},"cilium\u5b89\u88c5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9ed8\u8ba4 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ysicing/tools"},"ysicig/tools"),"\u5df2\u5185\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u6307\u5b9apod ip\u6bb5\ncilium install --config cluster-pool-ipv4-cidr="10.42.0.0/16"\n# \u5b89\u88c5hubble\u7f51\u7edc\u62d3\u6251\ncilium hubble enable --ui\n')),(0,r.kt)("h3",{id:"\u9a8c\u8bc1cilium"},"\u9a8c\u8bc1cilium"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"root@k3s:~# cilium status\n    /\xaf\xaf\\\n /\xaf\xaf\\__/\xaf\xaf\\    Cilium:         OK\n \\__/\xaf\xaf\\__/    Operator:       OK\n /\xaf\xaf\\__/\xaf\xaf\\    Hubble:         OK\n \\__/\xaf\xaf\\__/    ClusterMesh:    OK\n    \\__/\n\nDeployment        hubble-ui                Desired: 1, Ready: 1/1, Available: 1/1\nDeployment        clustermesh-apiserver    Desired: 1, Ready: 1/1, Available: 1/1\nDaemonSet         cilium                   Desired: 2, Ready: 2/2, Available: 2/2\nDeployment        cilium-operator          Desired: 1, Ready: 1/1, Available: 1/1\nDeployment        hubble-relay             Desired: 1, Ready: 1/1, Available: 1/1\nContainers:       cilium                   Running: 2\n                  cilium-operator          Running: 1\n                  hubble-relay             Running: 1\n                  hubble-ui                Running: 1\n                  clustermesh-apiserver    Running: 1\nCluster Pods:     12/17 managed by Cilium\nImage versions    cilium                   quay.io/cilium/cilium:v1.10.4: 2\n                  cilium-operator          quay.io/cilium/operator-generic:v1.10.4: 1\n                  hubble-relay             quay.io/cilium/hubble-relay:v1.10.4: 1\n                  hubble-ui                quay.io/cilium/hubble-ui:v0.7.9@sha256:e0e461c680ccd083ac24fe4f9e19e675422485f04d8720635ec41f2ba9e5562c: 1\n                  hubble-ui                quay.io/cilium/hubble-ui-backend:v0.7.9@sha256:632c938ef6ff30e3a080c59b734afb1fb7493689275443faa1435f7141aabe76: 1\n                  hubble-ui                docker.io/envoyproxy/envoy:v1.18.2@sha256:e8b37c1d75787dd1e712ff389b0d37337dc8a174a63bed9c34ba73359dc67da7: 1\n                  clustermesh-apiserver    quay.io/coreos/etcd:v3.4.13: 1\n                  clustermesh-apiserver    quay.io/cilium/clustermesh-apiserver:v1.10.4: 1\n")),(0,r.kt)("h3",{id:"\u8bbf\u95eehubble\u67e5\u770b\u7f51\u7edc\u8fde\u63a5"},"\u8bbf\u95eeHubble\u67e5\u770b\u7f51\u7edc\u8fde\u63a5"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(71174).Z,width:"3356",height:"1740"})),(0,r.kt)("h4",{id:"\u7ed1\u5b9aingress"},"\u7ed1\u5b9aingress"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    k8s.ysicing.me: hubble-ui\n  labels:\n    k8s-app: hubble-ui\n  name: hubble-ui\n  namespace: kube-system\nspec:\n  rules:\n  - host: hubble-ui.internal.ysicing.net\n    http:\n      paths:\n      - backend:\n          service:\n            name: hubble-ui\n            port:\n              number: 80\n        path: /\n        pathType: ImplementationSpecific\n  tls:\n  - hosts:\n    - hubble-ui.internal.ysicing.net\n    secretName: tls-ysicing.net\n")),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"https://hubble-ui.internal.ysicing.net")),(0,r.kt)("h4",{id:"port-forward\u8f6c\u53d1"},"port-forward\u8f6c\u53d1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward --namespace kube-system  service/hubble-ui 38888:80\n")),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:38888")))}b.isMDXComponent=!0},71174:function(e,n,t){n.Z=t.p+"assets/images/hubble-ui-247e1a4afeb5ec48af4f9ae8f0f9a78b.png"}}]);