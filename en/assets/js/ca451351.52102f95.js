"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5355],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||b[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79976:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"debian\u5347\u7ea7\u5185\u6838",description:"\u672c\u6587\u4e3b\u8981\u8bb0\u5f55\u672c\u4eba\u5347\u7ea7Debian\u5185\u6838",date:new Date("2023-02-01T08:55:18.000Z"),tags:["debian"]},l=void 0,u={permalink:"/en/posts/debian-upgrade",source:"@site/blog/posts/debian-upgrade.md",title:"debian\u5347\u7ea7\u5185\u6838",description:"\u672c\u6587\u4e3b\u8981\u8bb0\u5f55\u672c\u4eba\u5347\u7ea7Debian\u5185\u6838",date:"2023-02-01T08:55:18.000Z",formattedDate:"February 1, 2023",tags:[{label:"debian",permalink:"/en/tags/debian"}],readingTime:.23666666666666666,hasTruncateMarker:!0,authors:[],frontMatter:{title:"debian\u5347\u7ea7\u5185\u6838",description:"\u672c\u6587\u4e3b\u8981\u8bb0\u5f55\u672c\u4eba\u5347\u7ea7Debian\u5185\u6838",date:"2023-02-01T08:55:18.000Z",tags:["debian"]},prevItem:{title:"debian\u624b\u5de5\u6dfb\u52a0Swap\u5206\u533a",permalink:"/en/posts/debian-swap"},nextItem:{title:"\u8f7b\u91cf\u4e91debian\u6302\u8f7d\u6570\u636e\u76d8",permalink:"/en/posts/qcloud-disk-mount"}},p={authorsImageUrls:[]},s=[{value:"\u914d\u7f6e\u5e76\u66f4\u65b0\u8f6f\u4ef6\u6e90",id:"\u914d\u7f6e\u5e76\u66f4\u65b0\u8f6f\u4ef6\u6e90",level:2},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",level:2},{value:"\u66f4\u65b0\u5f15\u5bfc\u5e76\u91cd\u542f",id:"\u66f4\u65b0\u5f15\u5bfc\u5e76\u91cd\u542f",level:2}],b={toc:s},d="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u914d\u7f6e\u5e76\u66f4\u65b0\u8f6f\u4ef6\u6e90"},"\u914d\u7f6e\u5e76\u66f4\u65b0\u8f6f\u4ef6\u6e90"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat > /etc/apt/sources.list <<EOF\ndeb http://mirrors.tencent.com/debian/ bullseye main contrib non-free\ndeb http://mirrors.tencent.com/debian/ bullseye-updates main contrib non-free\ndeb http://mirrors.tencent.com/debian/ bullseye-backports main contrib non-free\ndeb http://mirrors.tencent.com/debian-security bullseye-security main contrib non-free\nEOF\napt update\n")),(0,o.kt)("h2",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt dist-upgrade -y\napt install -t bullseye-backports linux-image-amd64 -y\n")),(0,o.kt)("h2",{id:"\u66f4\u65b0\u5f15\u5bfc\u5e76\u91cd\u542f"},"\u66f4\u65b0\u5f15\u5bfc\u5e76\u91cd\u542f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"update-grub\nreboot\n")))}m.isMDXComponent=!0}}]);