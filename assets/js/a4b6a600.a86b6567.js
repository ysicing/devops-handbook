"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8679],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,b=p["".concat(u,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(b,c(c({ref:t},l),{},{components:r})):n.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93158:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],s={title:"k8s\u914d\u7f6e\u9ed8\u8ba4\u5b58\u50a8",date:new Date("2020-05-18T14:55:18.000Z"),description:"k8s\u914d\u7f6e\u9ed8\u8ba4\u5b58\u50a8",tags:["csi","kubernetes"]},u=void 0,i={permalink:"/posts/k8s-default-sc",source:"@site/blog/posts/k8s-default-sc.md",title:"k8s\u914d\u7f6e\u9ed8\u8ba4\u5b58\u50a8",description:"k8s\u914d\u7f6e\u9ed8\u8ba4\u5b58\u50a8",date:"2020-05-18T14:55:18.000Z",formattedDate:"2020\u5e745\u670818\u65e5",tags:[{label:"csi",permalink:"/tags/csi"},{label:"kubernetes",permalink:"/tags/kubernetes"}],readingTime:.16,hasTruncateMarker:!0,authors:[],frontMatter:{title:"k8s\u914d\u7f6e\u9ed8\u8ba4\u5b58\u50a8",date:"2020-05-18T14:55:18.000Z",description:"k8s\u914d\u7f6e\u9ed8\u8ba4\u5b58\u50a8",tags:["csi","kubernetes"]},prevItem:{title:"k8s\u5b9e\u8df5\u4e4bcalico mtu",permalink:"/posts/k8s-calico-mtu"},nextItem:{title:"\u5f00\u542f\u96c6\u7fa4feature\u5f00\u542f\u96c6\u7fa4feature",permalink:"/posts/k8s-feature"}},l={authorsImageUrls:[]},p=[],f={toc:p},m="wrapper";function b(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e\u9ed8\u8ba4\u5b58\u50a8")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# \u96c6\u7fa4\u5df2\u6709\u5b58\u50a8\u7c7b\u578b\uff08StorageClass\uff09\uff0c\u6267\u884c kubectl get sc\u770b\u4e0b\u5f53\u524d\u662f\u5426\u8bbe\u7f6e\u4e86\u9ed8\u8ba4\u7684 storageclass\nkubectl get sc\n\nkubectl patch storageclass nfs-data -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n')))}b.isMDXComponent=!0}}]);