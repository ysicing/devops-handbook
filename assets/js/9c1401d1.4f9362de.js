"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3782],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15362:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={title:"helm\u5c0f\u8bb0",date:new Date("2020-05-23T18:55:18.000Z"),description:"\u8bb0\u5f55helm\u76f8\u5173\u4f7f\u7528",tags:["helm"]},c=void 0,u={permalink:"/posts/helm",source:"@site/blog/posts/helm.md",title:"helm\u5c0f\u8bb0",description:"\u8bb0\u5f55helm\u76f8\u5173\u4f7f\u7528",date:"2020-05-23T18:55:18.000Z",formattedDate:"2020\u5e745\u670823\u65e5",tags:[{label:"helm",permalink:"/tags/helm"}],readingTime:.22,hasTruncateMarker:!0,authors:[],frontMatter:{title:"helm\u5c0f\u8bb0",date:"2020-05-23T18:55:18.000Z",description:"\u8bb0\u5f55helm\u76f8\u5173\u4f7f\u7528",tags:["helm"]},prevItem:{title:"Prometheus Operator \u521d\u4f53\u9a8c",permalink:"/posts/prometheus-install"},nextItem:{title:"ergo\u5b89\u88c5ingress\u5b89\u88c5",permalink:"/posts/ingress-install"}},p={authorsImageUrls:[]},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6ehelm\u955c\u50cf\u5e93",id:"\u914d\u7f6ehelm\u955c\u50cf\u5e93",level:2}],m={toc:s},f="wrapper";function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b89\u88c5docker\u65f6\u9ed8\u8ba4\u5df2\u7ecf\u5b89\u88c5\u4e86helm,\u5982\u679c\u4e0d\u662f\u6700\u65b0\u7248\u672c\u8bf7",(0,a.kt)("inlineCode",{parentName:"p"},"upgrade-tools"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'upgrade-tools\n# \u7248\u672c\nhelm version\nversion.BuildInfo{Version:"v3.2.1", GitCommit:"fe51cd1e31e6a202cba7dead9552a6d418ded79a", GitTreeState:"clean", GoVersion:"go1.13.10"}\n')),(0,a.kt)("h2",{id:"\u914d\u7f6ehelm\u955c\u50cf\u5e93"},"\u914d\u7f6ehelm\u955c\u50cf\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u81ea\u52a8\nhelminit\n\n# \u624b\u52a8\nhelm repo add stable http://mirror.azure.cn/kubernetes/charts/\nhelm repo add incubator http://mirror.azure.cn/kubernetes/charts-incubator/\n")))}d.isMDXComponent=!0}}]);