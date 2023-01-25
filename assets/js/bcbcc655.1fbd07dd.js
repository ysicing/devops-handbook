"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2476],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(i,".").concat(u)]||m[u]||d[u]||l;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36597:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),s=["components"],o={title:"Headscale \u90e8\u7f72\u79c1\u6709 DERP \u4e2d\u7ee7\u670d\u52a1\u5668",tags:["headscale","tailscale","derper"]},i=void 0,p={unversionedId:"system/tailscale/derper",id:"system/tailscale/derper",title:"Headscale \u90e8\u7f72\u79c1\u6709 DERP \u4e2d\u7ee7\u670d\u52a1\u5668",description:"\u672c\u6587\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u8ba9 Headscale  \u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 DERP Servers",source:"@site/docs/system/tailscale/derper.md",sourceDirName:"system/tailscale",slug:"/system/tailscale/derper",permalink:"/docs/system/tailscale/derper",draft:!1,tags:[{label:"headscale",permalink:"/docs/tags/headscale"},{label:"tailscale",permalink:"/docs/tags/tailscale"},{label:"derper",permalink:"/docs/tags/derper"}],version:"current",lastUpdatedBy:"ysicing",lastUpdatedAt:1672487896,formattedLastUpdatedAt:"2022\u5e7412\u670831\u65e5",frontMatter:{title:"Headscale \u90e8\u7f72\u79c1\u6709 DERP \u4e2d\u7ee7\u670d\u52a1\u5668",tags:["headscale","tailscale","derper"]},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u4e8e Caddy2 \u90e8\u7f72\u79c1\u6709 DERP \u4e2d\u7ee7\u670d\u52a1\u5668",permalink:"/docs/system/tailscale/caddy-derper-proxy"},next:{title:"\u7fa4\u6656\u4e0a\u57fa\u4e8eHeadscale\u5185\u7f51\u7a7f\u900f",permalink:"/docs/system/tailscale/headscale-dsm7"}},c={},d=[{value:"Derper \u662f\u4ec0\u4e48\uff1f",id:"derper-\u662f\u4ec0\u4e48",level:2},{value:"\u5b9e\u64cd",id:"\u5b9e\u64cd",level:2},{value:"\u6784\u5efaderper",id:"\u6784\u5efaderper",level:3},{value:"\u542f\u52a8derper",id:"\u542f\u52a8derper",level:3},{value:"\u914d\u7f6eHeadscale",id:"\u914d\u7f6eheadscale",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u8ba9 Headscale  \u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 DERP Servers")),(0,l.kt)("h2",{id:"derper-\u662f\u4ec0\u4e48"},"Derper \u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"\u53ef\u4ee5\u9605\u8bfb ",(0,l.kt)("a",{parentName:"p",href:"https://icloudnative.io/posts/custom-derp-servers/#%E4%B8%AD%E7%BB%A7%E5%8D%8F%E8%AE%AE%E7%AE%80%E4%BB%8B"},"\u7c73\u5f00\u6717\u57fa\u6768 - \u4e2d\u7ee7\u534f\u8bae\u7b80\u4ecb")),(0,l.kt)("h2",{id:"\u5b9e\u64cd"},"\u5b9e\u64cd"),(0,l.kt)("h3",{id:"\u6784\u5efaderper"},"\u6784\u5efaderper"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u6700\u65b0\u7248\u672c\u9700\u8981go1.19\u7248\u672c"),(0,l.kt)("p",{parentName:"admonition"},"go\u73af\u5883:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://golang.google.cn/dl/go1.19.linux-amd64.tar.gz\ntar -C /usr/local -xzf go1.19.linux-amd64.tar.gz\nexport PATH=$PATH:/usr/local/go/bin\ngo env -w GOPROXY=https://goproxy.cn,direct\ngo install tailscale.com/cmd/derper@latest\n# \u9ed8\u8ba4derper\u4e8c\u8fdb\u5236\u5728 /root/go/bin/derper\n"))),(0,l.kt)("h3",{id:"\u542f\u52a8derper"},"\u542f\u52a8derper"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# /etc/systemd/system/derper.service\n[Unit]\nDescription=derper\n\n[Service]\nStartLimitInterval=5\nStartLimitBurst=10\nExecStart=/root/go/bin/derper -hostname <\u4f60\u7684\u57df\u540d> -a ":443" -certdir /root/.cache/tailscale/derper-certs -verify-clients\nRestart=always\nRestartSec=15\n\n[Install]\nWantedBy=multi-user.target\n')),(0,l.kt)("p",null,"\u542f\u52a8derper"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable derper.service --now\n")),(0,l.kt)("p",null,"\u521b\u5efa\u5b9a\u65f6\u91cd\u542fderper"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# /etc/systemd/system/derper.timer\n[Unit]\nDescription=derper timer\n\n[Timer]\n# \u6bcf\u5c0f\u65f6\u6267\u884c\u4e00\u6b21\nOnActiveSec=1h\n# \u9519\u8fc7\u6267\u884c, \u7acb\u523b\u6267\u884c\nPersistent=true\n\n[Install]\nWantedBy=timers.target\n")),(0,l.kt)("p",null,"\u542f\u52a8derper.timer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679cwantedby\u4e3atimers.target, \u4e0d\u9700\u8981\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8, \u9ed8\u8ba4\u5c31\u662f\u5f00\u673a\u542f\u52a8\nsystemctl start derper.timer\n# \u5176\u4ed6\u60c5\u51b5\nsystemctl enable derper.timer --now\n")),(0,l.kt)("p",null,"\u67e5\u770b\u751f\u6548"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl list-timers --no-pager\nNEXT                        LEFT          LAST                        PASSED        UNIT                         ACTIVATES\nMon 2022-09-05 23:21:29 CST 59min left    Mon 2022-09-05 22:15:12 CST 6min ago      derper.timer                 derper.service\n")),(0,l.kt)("h3",{id:"\u914d\u7f6eheadscale"},"\u914d\u7f6eHeadscale"),(0,l.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# https://github.com/juanfont/headscale/blob/main/derp-example.yaml\n# If you plan to somehow use headscale, please deploy your own DERP infra: https://tailscale.com/kb/1118/custom-derp-servers/\nregions:\n  900:\n    regionid: 900\n    regioncode: custom\n    regionname: My Region\n    nodes:\n      - name: 900a\n        regionid: 900\n        hostname: myderp.mydomain.no\n        ipv4: 123.123.123.123\n        ipv6: "2604:a880:400:d1::828:b001"\n        stunport: 0\n        stunonly: false\n        derpport: 0\n')),(0,l.kt)("p",null,"\u6211\u7684\u53c2\u8003\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# /etc/headscale/derp.yaml\nregions:\n  900:\n    regionid: 900\n    regioncode: dev\n    regionname: china\n    nodes:\n      - name: 900a\n        regionid: 900\n        hostname: <\u81ea\u5b9a\u4e49\u57df\u540d>\n        stunport: 0\n        stunonly: false\n        derpport: 0\n")),(0,l.kt)("p",null,"\u4fee\u6539\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# /etc/headscale/config.yaml \u53d8\u66f4\u5982\u4e0b\n  paths:\n    - /etc/headscale/derp.yaml\n  # paths: []\n")),(0,l.kt)("p",null,"\u91cd\u542f\u670d\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart headscale\n")),(0,l.kt)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tailscale netcheck\n\n    * Nearest DERP: bj\n    * DERP latency:\n        -  bj: 32.9ms  (bj)\n")),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"\u8bf7\u52ff\u5347\u7ea7\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"0.17.0-alpha2"),", \u5426\u5219\u53ef\u80fd\u5bfc\u81f4\u670d\u52a1\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8")))}u.isMDXComponent=!0}}]);