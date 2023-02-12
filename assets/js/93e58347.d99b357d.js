"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8135],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},14490:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={title:"debian\u5347\u7ea7\u5185\u6838",tags:["debian","\u5347\u7ea7"]},l=void 0,s={unversionedId:"system/debian/upgrade",id:"system/debian/upgrade",title:"debian\u5347\u7ea7\u5185\u6838",description:"\u914d\u7f6e\u5e76\u66f4\u65b0\u8f6f\u4ef6\u6e90",source:"@site/docs/system/debian/upgrade.md",sourceDirName:"system/debian",slug:"/system/debian/upgrade",permalink:"/docs/system/debian/upgrade",draft:!1,tags:[{label:"debian",permalink:"/docs/tags/debian"},{label:"\u5347\u7ea7",permalink:"/docs/tags/\u5347\u7ea7"}],version:"current",lastUpdatedBy:"ysicing",lastUpdatedAt:1676205570,formattedLastUpdatedAt:"2023\u5e742\u670812\u65e5",frontMatter:{title:"debian\u5347\u7ea7\u5185\u6838",tags:["debian","\u5347\u7ea7"]},sidebar:"tutorialSidebar",previous:{title:"\u8f7b\u91cf\u4e91debian\u6302\u8f7d\u6570\u636e\u76d8",permalink:"/docs/system/debian/disk-mount"},next:{title:"\u5b89\u88c5",permalink:"/docs/cni/cilium/install"}},u={},p=[{value:"\u914d\u7f6e\u5e76\u66f4\u65b0\u8f6f\u4ef6\u6e90",id:"\u914d\u7f6e\u5e76\u66f4\u65b0\u8f6f\u4ef6\u6e90",level:2},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",level:2},{value:"\u66f4\u65b0\u5f15\u5bfc\u5e76\u91cd\u542f",id:"\u66f4\u65b0\u5f15\u5bfc\u5e76\u91cd\u542f",level:2}],d={toc:p},b="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(b,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u914d\u7f6e\u5e76\u66f4\u65b0\u8f6f\u4ef6\u6e90"},"\u914d\u7f6e\u5e76\u66f4\u65b0\u8f6f\u4ef6\u6e90"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat > /etc/apt/sources.list <<EOF\ndeb http://mirrors.tencent.com/debian/ bullseye main contrib non-free\ndeb http://mirrors.tencent.com/debian/ bullseye-updates main contrib non-free\ndeb http://mirrors.tencent.com/debian/ bullseye-backports main contrib non-free\ndeb http://mirrors.tencent.com/debian-security bullseye-security main contrib non-free\nEOF\napt update\n")),(0,i.kt)("h2",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt dist-upgrade -y\napt install -t bullseye-backports linux-image-amd64 -y\n")),(0,i.kt)("h2",{id:"\u66f4\u65b0\u5f15\u5bfc\u5e76\u91cd\u542f"},"\u66f4\u65b0\u5f15\u5bfc\u5e76\u91cd\u542f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"update-grub\nreboot\n")))}m.isMDXComponent=!0}}]);