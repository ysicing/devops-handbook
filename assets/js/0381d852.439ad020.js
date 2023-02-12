"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2691],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88343:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"\u90e8\u7f72\u4e00\u7ad9\u5f0f\u8f7b\u76d1\u63a7\u8f7b\u8fd0\u7ef4\u7cfb\u7edf\u54ea\u5412\u76d1\u63a7\u9b54\u6539\u7248\u91d1\u5412\u76d1\u63a7",date:new Date("2021-09-22T05:09:03.000Z"),description:"\u672c\u6587\u4e3b\u8981\u8bb2\u8ff0\u90e8\u7f72\u91d1\u5412\u76d1\u63a7",tags:["tools"]},c=void 0,p={permalink:"/posts/nezha-ops-monitor",source:"@site/blog/posts/nezha-ops-monitor.md",title:"\u90e8\u7f72\u4e00\u7ad9\u5f0f\u8f7b\u76d1\u63a7\u8f7b\u8fd0\u7ef4\u7cfb\u7edf\u54ea\u5412\u76d1\u63a7\u9b54\u6539\u7248\u91d1\u5412\u76d1\u63a7",description:"\u672c\u6587\u4e3b\u8981\u8bb2\u8ff0\u90e8\u7f72\u91d1\u5412\u76d1\u63a7",date:"2021-09-22T05:09:03.000Z",formattedDate:"2021\u5e749\u670822\u65e5",tags:[{label:"tools",permalink:"/tags/tools"}],readingTime:.8066666666666666,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u90e8\u7f72\u4e00\u7ad9\u5f0f\u8f7b\u76d1\u63a7\u8f7b\u8fd0\u7ef4\u7cfb\u7edf\u54ea\u5412\u76d1\u63a7\u9b54\u6539\u7248\u91d1\u5412\u76d1\u63a7",date:"2021-09-22T05:09:03.000Z",description:"\u672c\u6587\u4e3b\u8981\u8bb2\u8ff0\u90e8\u7f72\u91d1\u5412\u76d1\u63a7",tags:["tools"]},prevItem:{title:"k3s\u4f7f\u7528Cilium\u66ff\u6362\u9ed8\u8ba4Flannel",permalink:"/posts/how-to-use-cilium-to-replace-k3s-flannel"},nextItem:{title:"Containerd \u4f7f\u7528\u6559\u7a0b",permalink:"/posts/getting-started-with-containerd"}},u={authorsImageUrls:[]},s=[{value:"\u5e8f",id:"\u5e8f",level:2},{value:"\u9b54\u6539\u529f\u80fd",id:"\u9b54\u6539\u529f\u80fd",level:3},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:3},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:2},{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",level:2}],m={toc:s},d="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5e8f"},"\u5e8f"),(0,o.kt)("p",null,"\u9b54\u6539\u7248\u672c, \u4ec5\u652f\u6301\u8d44\u6e90\u5c55\u793a\u3002\u5982\u679c\u9700\u8981\u5b9a\u65f6\u4efb\u52a1\u6216\u8005\u76d1\u63a7\u62a5\u8b66\uff0c\u8bf7\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/naiba/nezha"},"\u54ea\u5412\u76d1\u63a7")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u9b54\u6539\u76ee\u524d\u4ec5\u4f53\u73b0\u8d44\u6e90\u76f8\u5173\u4fe1\u606f")),(0,o.kt)("h3",{id:"\u9b54\u6539\u529f\u80fd"},"\u9b54\u6539\u529f\u80fd"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u88ab\u52a8\u6ce8\u518c\u548c\u4e3b\u52a8\u6ce8\u518c"),(0,o.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528\u5bb9\u5668\u5316\u90e8\u7f72")),(0,o.kt)("h2",{id:"\u670d\u52a1\u7aef"},"\u670d\u52a1\u7aef"),(0,o.kt)("h3",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'debug: true\nhttpport: 80\ngrpcport: 5555\nadmin: # \u672c\u5730\u7ba1\u7406\u5458\u8d26\u53f7\n  user: ysicing\n  pass: 12345678\noauth2:\n  type: "github" #gitee/github\n  admin: "ysicing" #\u7ba1\u7406\u5458\u5217\u8868\uff0c\u534a\u89d2\u9017\u53f7\u9694\u5f00\n  clientid: "" # \u5728 https://github.com/settings/developers \u521b\u5efa\uff0c\u65e0\u9700\u5ba1\u6838 Callback \u586b http(s)://\u57df\u540d\u6216IP/oauth2/callback\n  clientsecret: ""\nsite:\n  brand: "\u91d1\u5412\u76d1\u63a7"\n  cookiename: "nezha-dashboard" #\u6d4f\u89c8\u5668 Cookie \u5b57\u6bb5\u540d\uff0c\u53ef\u4e0d\u6539\n  theme: "default"\ndb:\n  type: sqlite\n  dsn: "nezha.sqlite"\n#  type: mysql\n#  dsn: root:rootpass@tcp(db.k8s.ysicing.local:3306)/bjdb?charset=utf8mb4&parseTime=True&loc=Local\n  debug: true\n  metrics:\n    name: nezha-api\n    enable: true\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://sh.ysicing.me/k8s/nezha/dash.yml\n")),(0,o.kt)("h2",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),(0,o.kt)("p",null,"\u4e3b\u52a8\u6ce8\u518c\u9700\u8981\u6301\u4e45\u5316",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/nezha")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'2\'\nservices:\n  nezha-agent:\n    image: ghcr.io/ysicing/nezha-agent:edge\n    container_name: nezha-agent\n    network_mode: "host"\n    pid: "host"\n    privileged: true\n    volumes:\n      - ./agentdata:/var/lib/nezha\n    # command:\n    # - "--p=cdxxxxxxx" # \u88ab\u52a8\u6ce8\u518c\n')),(0,o.kt)("h2",{id:"\u6f14\u793a"},"\u6f14\u793a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nezha.external.ysicing.net/"},"\u91d1\u5412\u76d1\u63a7")),(0,o.kt)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/naiba/nezha"},"naiba/nezha")))}h.isMDXComponent=!0}}]);