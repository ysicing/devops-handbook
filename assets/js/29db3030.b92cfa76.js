"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9743],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42565:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],l={title:"Brew Cask\u65e5\u5e38\u4f7f\u7528",date:new Date("2021-10-19T01:57:40.000Z"),description:"\u8bb0\u5f55brew cask\u4f7f\u7528\u5c0f\u6280\u5de7",tags:["macOS","tools"]},i=void 0,u={permalink:"/posts/brew-cask-usage",source:"@site/blog/posts/brew-cask-usage.md",title:"Brew Cask\u65e5\u5e38\u4f7f\u7528",description:"\u8bb0\u5f55brew cask\u4f7f\u7528\u5c0f\u6280\u5de7",date:"2021-10-19T01:57:40.000Z",formattedDate:"2021\u5e7410\u670819\u65e5",tags:[{label:"macOS",permalink:"/tags/mac-os"},{label:"tools",permalink:"/tags/tools"}],readingTime:.12666666666666668,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Brew Cask\u65e5\u5e38\u4f7f\u7528",date:"2021-10-19T01:57:40.000Z",description:"\u8bb0\u5f55brew cask\u4f7f\u7528\u5c0f\u6280\u5de7",tags:["macOS","tools"]},prevItem:{title:"Drone\u914d\u7f6e\u7ba1\u7406\u5458\u8d26\u53f7",permalink:"/posts/drone-config-admin"},nextItem:{title:"Containerd \u4f7f\u7528\u6559\u7a0b\u4e4bnerdctl",permalink:"/posts/containerd-nerdctl"}},s={authorsImageUrls:[]},p=[{value:"\u5b89\u88c5cu",id:"\u5b89\u88c5cu",level:2},{value:"\u81ea\u52a8\u5347\u7ea7",id:"\u81ea\u52a8\u5347\u7ea7",level:2}],f={toc:p},m="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8bb0\u5f55\u4e00\u4e0b, \u5982\u4f55\u5347\u7ea7brew cask\u5b89\u88c5\u7684\u8f6f\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5cu"},"\u5b89\u88c5cu"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap buo/cask-upgrade\n")),(0,o.kt)("h2",{id:"\u81ea\u52a8\u5347\u7ea7"},"\u81ea\u52a8\u5347\u7ea7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\nbrew cu -a\n")))}d.isMDXComponent=!0}}]);