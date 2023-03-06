"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9821],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,k=s["".concat(c,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24262:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={title:"tke\u96c6\u7fa4\u7981\u6b62\u8c03\u5ea6\u6ce8\u610f\u4e8b\u9879",date:new Date("2022-05-25T14:55:18.000Z"),description:"tke\u96c6\u7fa4\u7981\u6b62\u8c03\u5ea6\u6ce8\u610f\u4e8b\u9879",tags:["k8s","tke"]},c=void 0,u={permalink:"/en/posts/tke-cordon-node",source:"@site/blog/posts/tke-cordon-node.md",title:"tke\u96c6\u7fa4\u7981\u6b62\u8c03\u5ea6\u6ce8\u610f\u4e8b\u9879",description:"tke\u96c6\u7fa4\u7981\u6b62\u8c03\u5ea6\u6ce8\u610f\u4e8b\u9879",date:"2022-05-25T14:55:18.000Z",formattedDate:"May 25, 2022",tags:[{label:"k8s",permalink:"/en/tags/k-8-s"},{label:"tke",permalink:"/en/tags/tke"}],readingTime:.44333333333333336,hasTruncateMarker:!0,authors:[],frontMatter:{title:"tke\u96c6\u7fa4\u7981\u6b62\u8c03\u5ea6\u6ce8\u610f\u4e8b\u9879",date:"2022-05-25T14:55:18.000Z",description:"tke\u96c6\u7fa4\u7981\u6b62\u8c03\u5ea6\u6ce8\u610f\u4e8b\u9879",tags:["k8s","tke"]},prevItem:{title:"Headscale \u7684\u90e8\u7f72\u65b9\u6cd5\u548c\u4f7f\u7528\u6559\u7a0b",permalink:"/en/posts/headscale-intro"},nextItem:{title:"\u5927\u732b\u4e8c\u72d7\u5f00\u53d1\u8005\u8ba1\u5212",permalink:"/en/posts/bigcat-ergo"}},p={authorsImageUrls:[]},s=[{value:"tke\u96c6\u7fa4\u7981\u6b62\u8c03\u5ea6\u6ce8\u610f\u4e8b\u9879",id:"tke\u96c6\u7fa4\u7981\u6b62\u8c03\u5ea6\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:2}],f={toc:s},m="wrapper";function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tke\u96c6\u7fa4\u7981\u6b62\u8c03\u5ea6\u6ce8\u610f\u4e8b\u9879"},"tke\u96c6\u7fa4\u7981\u6b62\u8c03\u5ea6\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("p",null,"\u8282\u70b9\u7981\u6b62\u8c03\u5ea6\u524d\uff0c\u9700\u8981\u786e\u5b9a\u6709\u6ca1\u6709svc\u662flb\u6a21\u5f0f\u4e14",(0,a.kt)("inlineCode",{parentName:"p"},"ExternalTrafficPolicy"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Local"),"\u7684\u8282\u70b9\uff0c\u5982\u679c\u6709\uff0c\u9700\u8981\u5148\u5c06\u5176\u8c03\u6574\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Cluster"),"\u6a21\u5f0f\u3002"),(0,a.kt)("p",null,"\u539f\u56e0:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"TKE Service Controller \u9ed8\u8ba4\u4e0d\u4f1a\u5c06\u4ee5\u4e0b\u8282\u70b9\u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u540e\u7aef\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Master \u8282\u70b9\uff08\u4e0d\u5141\u8bb8 Master \u8282\u70b9\u53c2\u4e0e\u7f51\u7edc\u63a5\u5165\u5c42\u7684\u8d1f\u8f7d\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9\u72b6\u6001\u4e3a NotReady \u6216\u8282\u70b9\u88ab\u8bbe\u7f6e\u4e3a Unschedulable\uff08\u8282\u70b9\u4e0d\u5065\u5eb7\u6216\u4e0d\u53ef\u8c03\u5ea6\uff09\u3002")),(0,a.kt)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/document/product/457/45492"},"\u817e\u8baf\u4e91Service\u540e\u7aef\u9009\u62e9"))))}k.isMDXComponent=!0}}]);