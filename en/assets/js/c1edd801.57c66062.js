"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2086],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),i=s(n),h=a,d=i["".concat(l,".").concat(h)]||i[h]||p[h]||o;return n?r.createElement(d,c(c({ref:t},m),{},{components:n})):r.createElement(d,c({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=h;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[i]="string"==typeof e?e:a,c[1]=u;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87559:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return i}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],u={title:"\u4f7f\u7528 chartmuseum \u7ba1\u7406 Helm Chart",date:new Date("2022-04-21T01:23:55.000Z"),description:"\u8bb0\u5f55\u4e00\u4e0b\u90e8\u7f72chartmuseum\u53ca\u7b80\u5355\u4f7f\u7528",tags:["helm","chartmuseum"]},l=void 0,s={permalink:"/en/posts/chartmuseum-deploy",source:"@site/blog/posts/chartmuseum-deploy.md",title:"\u4f7f\u7528 chartmuseum \u7ba1\u7406 Helm Chart",description:"\u8bb0\u5f55\u4e00\u4e0b\u90e8\u7f72chartmuseum\u53ca\u7b80\u5355\u4f7f\u7528",date:"2022-04-21T01:23:55.000Z",formattedDate:"April 21, 2022",tags:[{label:"helm",permalink:"/en/tags/helm"},{label:"chartmuseum",permalink:"/en/tags/chartmuseum"}],readingTime:.6333333333333333,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u4f7f\u7528 chartmuseum \u7ba1\u7406 Helm Chart",date:"2022-04-21T01:23:55.000Z",description:"\u8bb0\u5f55\u4e00\u4e0b\u90e8\u7f72chartmuseum\u53ca\u7b80\u5355\u4f7f\u7528",tags:["helm","chartmuseum"]},prevItem:{title:"\u5927\u732b\u4e8c\u72d7\u5f00\u53d1\u8005\u8ba1\u5212",permalink:"/en/posts/bigcat-ergo"},nextItem:{title:"minipc\u6298\u817e\u5b89\u88c5pve",permalink:"/en/posts/minipc-pve"}},m={authorsImageUrls:[]},i=[{value:"\u4ec0\u4e48\u662fchartmuseum",id:"\u4ec0\u4e48\u662fchartmuseum",level:2},{value:"\u90e8\u7f72chartmuseum",id:"\u90e8\u7f72chartmuseum",level:2},{value:"\u7b80\u5355\u4f7f\u7528",id:"\u7b80\u5355\u4f7f\u7528",level:2},{value:"cm-push\u4f7f\u7528",id:"cm-push\u4f7f\u7528",level:3},{value:"Drone CI\u4f7f\u7528",id:"drone-ci\u4f7f\u7528",level:3}],p={toc:i},h="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5f88\u65e9\u4e4b\u524d\u5c31\u5199\u4e86\u54c8")),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u662fchartmuseum"},"\u4ec0\u4e48\u662fchartmuseum"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"chartmuseum")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684 Helm Chart Repository\uff0c\u652f\u6301\u591a\u79cd\u540e\u7aef\u5b58\u50a8(s3\u7b49). ")),(0,o.kt)("p",null,"chartmuseum \u63d0\u4f9b\u82e5\u5e72 API \u4ee5\u5b9e\u73b0 Helm Chart Repository \u7684\u80fd\u529b\u3002"),(0,o.kt)("h2",{id:"\u90e8\u7f72chartmuseum"},"\u90e8\u7f72chartmuseum"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# .ergo/data/charts.yaml\nversion: \'2.1\'\nservices:\n  charts-pass:\n    image: ccr.ccs.tencentyun.com/k7scn/chartmuseum:v0.14.0\n    container_name: charts-pass\n    restart: always\n    volumes:\n      - ./chartspass:/charts\n    ports:\n      - "9080:9080"\n    environment:\n      - PORT=9080\n      - DEBUG=1\n      - STORAGE=local\n      - STORAGE_LOCAL_ROOTDIR=/charts\n      - AUTH_ANONYMOUS_GET=true\n      - BASIC_AUTH_PASS=aituZie3eex5fiDongoShairiangae6o\n      - BASIC_AUTH_USER=ysicing\n  charts-noauth:\n    image: ccr.ccs.tencentyun.com/k7scn/chartmuseum:v0.14.0\n    container_name: charts-noauth\n    restart: always\n    volumes:\n      - ./chartsnoauth:/charts\n    ports:\n      - "9081:9081"\n    environment:\n      - PORT=9081\n      - DEBUG=1\n      - STORAGE=local\n      - STORAGE_LOCAL_ROOTDIR=/charts\n      - AUTH_ANONYMOUS_GET=true\n')),(0,o.kt)("p",null,"\u542f\u52a8chartmuseum"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ergo repo init\nergo addons install ysicing/compose\nergo compose -f .ergo/data/charts.yaml up -d\n")),(0,o.kt)("p",null,"\u6d4b\u8bd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# linux ergo addons install ysicing/helm\nhelm repo add d1 http://127.0.0.1:9080\nhelm repo add d2 http://127.0.0.1:9081\n")),(0,o.kt)("h2",{id:"\u7b80\u5355\u4f7f\u7528"},"\u7b80\u5355\u4f7f\u7528"),(0,o.kt)("h3",{id:"cm-push\u4f7f\u7528"},"cm-push\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5927\u9646\u5b89\u88c5\nhelm plugin install https://gitee.com/ysbot/helm-push\nhelm cm-push -h\n")),(0,o.kt)("h3",{id:"drone-ci\u4f7f\u7528"},"Drone CI\u4f7f\u7528"),(0,o.kt)("p",null,"\u5728CI\u4e2d\u63a8\u9001charts\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drone-stack/drone-plugin-helm-release"},"drone-stack/drone-plugin-helm-release")))}d.isMDXComponent=!0}}]);