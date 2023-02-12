"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2144],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57325:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],c={title:"k8s\u6807\u7b7e\u548c\u9009\u62e9\u5668",date:new Date("2020-05-18T14:55:18.000Z"),description:"k8s\u6807\u7b7e\u548c\u9009\u62e9\u5668",tags:["kubernetes"]},i=void 0,s={permalink:"/posts/k8s-labels",source:"@site/blog/posts/k8s-labels.md",title:"k8s\u6807\u7b7e\u548c\u9009\u62e9\u5668",description:"k8s\u6807\u7b7e\u548c\u9009\u62e9\u5668",date:"2020-05-18T14:55:18.000Z",formattedDate:"2020\u5e745\u670818\u65e5",tags:[{label:"kubernetes",permalink:"/tags/kubernetes"}],readingTime:.38,hasTruncateMarker:!0,authors:[],frontMatter:{title:"k8s\u6807\u7b7e\u548c\u9009\u62e9\u5668",date:"2020-05-18T14:55:18.000Z",description:"k8s\u6807\u7b7e\u548c\u9009\u62e9\u5668",tags:["kubernetes"]},prevItem:{title:"kubectl plugin\u63d2\u4ef6\u673a\u5236\u521d\u4f53\u9a8c\u4e4bkrew",permalink:"/posts/k8s-kubectl-plugins"},nextItem:{title:"k8s\u5b9e\u8df5\u4e4b\u5b89\u88c5linkerdv2",permalink:"/posts/k8s-linkerd-install"}},u={authorsImageUrls:[]},p=[{value:"\u8282\u70b9\u8c03\u5ea6nodeSelector",id:"\u8282\u70b9\u8c03\u5ea6nodeselector",level:3}],f={toc:p},m="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u683c\u5f0f\u8981\u6c42\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u6709\u6548\u6807\u7b7e\u503c\u5fc5\u987b\u4e3a 63 \u4e2a\u5b57\u7b26\u6216\u66f4\u5c11\uff0c\u5e76\u4e14\u5fc5\u987b\u4e3a\u7a7a\u6216\u4ee5\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26\uff08[a-z0-9A-Z]\uff09\u5f00\u5934\u548c\u7ed3\u5c3e\uff0c\u4e2d\u95f4\u53ef\u4ee5\u5305\u542b\u7834\u6298\u53f7\uff08-\uff09\u3001\u4e0b\u5212\u7ebf\uff08_\uff09\u3001\u70b9\uff08.\uff09\u548c\u5b57\u6bcd\u6216\u6570\u5b57\n")),(0,a.kt)("h3",{id:"\u8282\u70b9\u8c03\u5ea6nodeselector"},"\u8282\u70b9\u8c03\u5ea6nodeSelector"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6253label\nkubectl label nodes <node-name> <label-key>=<label-value>\n# \u663e\u793alabel\nkubectl get node --show-labels\n")),(0,a.kt)("p",null,"pod\u8c03\u5ea6\u5230\u8282\u70b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    env: test\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n  nodeSelector:\n    disktype: ssd\n")))}d.isMDXComponent=!0}}]);