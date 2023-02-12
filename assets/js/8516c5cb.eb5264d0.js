"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3393],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),o=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=o(r),y=a,m=p["".concat(i,".").concat(y)]||p[y]||u[y]||l;return r?n.createElement(m,d(d({ref:t},s),{},{components:r})):n.createElement(m,d({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,d=new Array(l);d[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,d[1]=c;for(var o=2;o<l;o++)d[o]=r[o];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},64196:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return p}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),d=["components"],c={title:"\u57fa\u4e8e Caddy2 \u90e8\u7f72\u79c1\u6709 DERP \u4e2d\u7ee7\u670d\u52a1\u5668",tags:["headscale","tailscale","derper","caddy"]},i=void 0,o={unversionedId:"system/tailscale/caddy-derper-proxy",id:"system/tailscale/caddy-derper-proxy",title:"\u57fa\u4e8e Caddy2 \u90e8\u7f72\u79c1\u6709 DERP \u4e2d\u7ee7\u670d\u52a1\u5668",description:"\u6839\u636e\u6211\u4e2a\u4eba\u6700\u8fd1\u7684\u5b9e\u8df5caddy + derper \u8c8c\u4f3c\u4e0d\u53ef\u7528.",source:"@site/docs/system/tailscale/caddy-derper-proxy.md",sourceDirName:"system/tailscale",slug:"/system/tailscale/caddy-derper-proxy",permalink:"/docs/system/tailscale/caddy-derper-proxy",draft:!1,tags:[{label:"headscale",permalink:"/docs/tags/headscale"},{label:"tailscale",permalink:"/docs/tags/tailscale"},{label:"derper",permalink:"/docs/tags/derper"},{label:"caddy",permalink:"/docs/tags/caddy"}],version:"current",lastUpdatedBy:"ysicing",lastUpdatedAt:1676205570,formattedLastUpdatedAt:"2023\u5e742\u670812\u65e5",frontMatter:{title:"\u57fa\u4e8e Caddy2 \u90e8\u7f72\u79c1\u6709 DERP \u4e2d\u7ee7\u670d\u52a1\u5668",tags:["headscale","tailscale","derper","caddy"]},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/docs/intro"},next:{title:"Headscale \u90e8\u7f72\u79c1\u6709 DERP \u4e2d\u7ee7\u670d\u52a1\u5668",permalink:"/docs/system/tailscale/derper"}},s={},p=[{value:"\u573a\u666f",id:"\u573a\u666f",level:2},{value:"Caddy",id:"caddy",level:2},{value:"\u5982\u4f55\u9a8c\u8bc1\u662f\u5426\u5305\u542btailscale\u63d2\u4ef6",id:"\u5982\u4f55\u9a8c\u8bc1\u662f\u5426\u5305\u542btailscale\u63d2\u4ef6",level:3},{value:"Caddyfile",id:"caddyfile",level:3},{value:"derper",id:"derper",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2}],u={toc:p},y="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,d);return(0,l.kt)(y,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"\u6839\u636e\u6211\u4e2a\u4eba\u6700\u8fd1\u7684\u5b9e\u8df5caddy + derper \u8c8c\u4f3c\u4e0d\u53ef\u7528.")),(0,l.kt)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),(0,l.kt)("p",null,"\u901a\u5e38derper\u8282\u70b9\u4e0a\u4e5f\u9700\u8981\u8dd1\u4e00\u4e9bweb\u670d\u52a1\uff0c\u9700\u8981\u590d\u7528443\u7aef\u53e3"),(0,l.kt)("h2",{id:"caddy"},"Caddy"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"caddy2 \u5728 v2.5.0 \u7248\u672c\u4e4b\u540e\u96c6\u6210tailscale\u63d2\u4ef6"),(0,l.kt)("p",{parentName:"admonition"},"\u540e\u7eed\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"derper.domain.com"),"\u793a\u4f8b")),(0,l.kt)("h3",{id:"\u5982\u4f55\u9a8c\u8bc1\u662f\u5426\u5305\u542btailscale\u63d2\u4ef6"},"\u5982\u4f55\u9a8c\u8bc1\u662f\u5426\u5305\u542btailscale\u63d2\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'din caddy2 ash\n# \u8fdb\u5bb9\u5668\u67e5\u770bmodules\uff0c\u6709\u6ca1\u6709\u9700\u8981"tls.get_certificate.tailscale"\ncaddy list-modules\n')),(0,l.kt)("h3",{id:"caddyfile"},"Caddyfile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Caddyfile\nderper.domain.com {\n        tls {\n                get_certificate tailscale\n        }\n        reverse_proxy / 10.0.4.11:77 {\n        }\n}\n")),(0,l.kt)("h3",{id:"derper"},"derper"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5386\u53f2\u539f\u56e0\u61d2\u5f97\u8c03\u6574,\u53ef\u4ee5\u6539\u6210\u5bb9\u5668\u90e8\u7f72\u54c8")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# /etc/systemd/system/derper.service\n[Unit]\nDescription=derper\n\n[Service]\nStartLimitInterval=5\nStartLimitBurst=10\nExecStart=/usr/local/bin/derper -hostname derper.domain.com -a ":77" -verify-clients\nRestart=always\nRestartSec=15\n\n[Install]\nWantedBy=multi-user.target\n')),(0,l.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# docker-compose.yml\nversion: "3"\n\nservices:\n  caddy2:\n    image: caddy\n    container_name: caddy2\n    ports:\n      - "2019:2019"\n      - "80:80"\n      - "443:443"\n    restart: always\n    volumes:\n      - $PWD/Caddyfile:/etc/caddy/Caddyfile\n      - caddy_data:/data\n      - caddy_config:/config\n    networks:\n      - service\n\nnetworks:\n  service:\n    external: false\n\nvolumes:\n  caddy_data:\n    driver: local\n  caddy_config:\n    driver: local\n')),(0,l.kt)("p",null,"\u8fd0\u884c\u542f\u52a8\u5c31ok\u4e86"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose -f docker-compose.yml up -d\n")))}m.isMDXComponent=!0}}]);