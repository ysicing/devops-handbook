"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9596],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),b=a,f=s["".concat(u,".").concat(b)]||s[b]||d[b]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58948:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],c={title:"debian\u5347\u7ea7\u5185\u6838",tag:["debian","\u5347\u7ea7"]},u=void 0,l={unversionedId:"debian/upgrade",id:"debian/upgrade",title:"debian\u5347\u7ea7\u5185\u6838",description:"\u914d\u7f6e\u5e76\u66f4\u65b0\u8f6f\u4ef6\u6e90",source:"@site/docs/debian/upgrade.md",sourceDirName:"debian",slug:"/debian/upgrade",permalink:"/en/docs/debian/upgrade",draft:!1,tags:[],version:"current",lastUpdatedBy:"ysicing",lastUpdatedAt:1661865414,formattedLastUpdatedAt:"Aug 30, 2022",frontMatter:{title:"debian\u5347\u7ea7\u5185\u6838",tag:["debian","\u5347\u7ea7"]},sidebar:"tutorialSidebar",previous:{title:"tke\u96c6\u7fa4\u7981\u6b62\u8c03\u5ea6\u6ce8\u610f\u4e8b\u9879",permalink:"/en/docs/qcloud/tke/tke-cordon-node"},next:{title:"cilium\u5347\u7ea7",permalink:"/en/docs/k3s/cilium/upgrade"}},p={},d=[{value:"\u914d\u7f6e\u5e76\u66f4\u65b0\u8f6f\u4ef6\u6e90",id:"\u914d\u7f6e\u5e76\u66f4\u65b0\u8f6f\u4ef6\u6e90",level:2},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",level:2},{value:"\u66f4\u65b0\u5f15\u5bfc\u5e76\u91cd\u542f",id:"\u66f4\u65b0\u5f15\u5bfc\u5e76\u91cd\u542f",level:2}],s={toc:d};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u914d\u7f6e\u5e76\u66f4\u65b0\u8f6f\u4ef6\u6e90"},"\u914d\u7f6e\u5e76\u66f4\u65b0\u8f6f\u4ef6\u6e90"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat > /etc/apt/sources.list <<EOF\ndeb http://mirrors.tencent.com/debian/ bullseye main contrib non-free\ndeb http://mirrors.tencent.com/debian/ bullseye-updates main contrib non-free\ndeb http://mirrors.tencent.com/debian/ bullseye-backports main contrib non-free\ndeb http://mirrors.tencent.com/debian-security bullseye-security main contrib non-free\nEOF\napt update\n")),(0,o.kt)("h2",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt dist-upgrade -y\napt install -t bullseye-backports linux-image-amd64 -y\n")),(0,o.kt)("h2",{id:"\u66f4\u65b0\u5f15\u5bfc\u5e76\u91cd\u542f"},"\u66f4\u65b0\u5f15\u5bfc\u5e76\u91cd\u542f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"update-grub\nreboot\n")))}b.isMDXComponent=!0}}]);