"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5408],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71958:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=t(83117),o=t(80102),a=(t(67294),t(3905)),c=["components"],i={title:"Docker\u914d\u7f6e\u9ed8\u8ba4\u7f51\u6865ip\u5730\u5740",date:new Date("2019-09-13T10:24:06.000Z"),description:"\u672c\u6587\u4e3b\u8981\u8bb0\u5f55docker\u914d\u7f6e\u9ed8\u8ba4\u7f51\u7edcip\u6bb5",tags:["docker","cri"]},l=void 0,p={permalink:"/en/posts/docker-default-address-pools",source:"@site/blog/posts/docker-default-address-pools.md",title:"Docker\u914d\u7f6e\u9ed8\u8ba4\u7f51\u6865ip\u5730\u5740",description:"\u672c\u6587\u4e3b\u8981\u8bb0\u5f55docker\u914d\u7f6e\u9ed8\u8ba4\u7f51\u7edcip\u6bb5",date:"2019-09-13T10:24:06.000Z",formattedDate:"September 13, 2019",tags:[{label:"docker",permalink:"/en/tags/docker"},{label:"cri",permalink:"/en/tags/cri"}],readingTime:.23,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Docker\u914d\u7f6e\u9ed8\u8ba4\u7f51\u6865ip\u5730\u5740",date:"2019-09-13T10:24:06.000Z",description:"\u672c\u6587\u4e3b\u8981\u8bb0\u5f55docker\u914d\u7f6e\u9ed8\u8ba4\u7f51\u7edcip\u6bb5",tags:["docker","cri"]},prevItem:{title:"awk \u4e2d\u5173\u4e8e\u591a\u4e2a$\u7684\u7528\u6cd5",permalink:"/en/posts/awk-func"},nextItem:{title:"\u963f\u91cc\u4e91\u8f7b\u91cf\u5e94\u7528\u670d\u52a1\u5668\u5347\u7ea7\u5185\u6838",permalink:"/en/posts/aliyun-debian-upgrade-kernel"}},s={authorsImageUrls:[]},u=[{value:"\u4fee\u6539docker\u9ed8\u8ba4\u6865\u63a5\u7f51\u7edcip\u6bb5",id:"\u4fee\u6539docker\u9ed8\u8ba4\u6865\u63a5\u7f51\u7edcip\u6bb5",level:2}],d={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bb0\u5f55\u4e00\u4e0b")),(0,a.kt)("h2",{id:"\u4fee\u6539docker\u9ed8\u8ba4\u6865\u63a5\u7f51\u7edcip\u6bb5"},"\u4fee\u6539docker\u9ed8\u8ba4\u6865\u63a5\u7f51\u7edcip\u6bb5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cat > /etc/docker/daemon.json <<EOF\n{\n  "registry-mirrors": ["https://dyucrs4l.mirror.aliyuncs.com"],\n  "bip": "169.254.0.1/24",\n  "max-concurrent-downloads": 10,\n  "log-driver": "json-file",\n  "log-level": "warn",\n  "log-opts": {\n    "max-size": "20m",\n    "max-file": "2"\n  },\n  "default-address-pools": [\n    {\n      "base": "100.250.0.0/16",\n      "size": 24\n    }\n  ],\n  "storage-driver": "overlay2"\n}\nEOF\n')),(0,a.kt)("p",null,"\u91cd\u542fdocker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart docker\n")),(0,a.kt)("p",null,"\u53c2\u8003\u6587\u6863 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/dockerd/"},"dockerd")))}f.isMDXComponent=!0}}]);