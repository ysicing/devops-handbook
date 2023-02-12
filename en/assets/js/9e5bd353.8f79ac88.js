"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8750],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=i,d=s["".concat(a,".").concat(m)]||s[m]||f[m]||c;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var c=t.length,o=new Array(c);o[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<c;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81488:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=t(87462),i=t(63366),c=(t(67294),t(3905)),o=["components"],l={title:"\u5378\u8f7d",tags:["cilium"]},a=void 0,u={unversionedId:"cni/cilium/uninstall",id:"cni/cilium/uninstall",title:"\u5378\u8f7d",description:"\u5378\u8f7d",source:"@site/docs/cni/cilium/uninstall.md",sourceDirName:"cni/cilium",slug:"/cni/cilium/uninstall",permalink:"/en/docs/cni/cilium/uninstall",draft:!1,tags:[{label:"cilium",permalink:"/en/docs/tags/cilium"}],version:"current",lastUpdatedBy:"ysicing",lastUpdatedAt:1676205570,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{title:"\u5378\u8f7d",tags:["cilium"]},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/en/docs/cni/cilium/install"},next:{title:"\u5347\u7ea7",permalink:"/en/docs/cni/cilium/upgrade"}},p={},s=[{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:2}],f={toc:s},m="wrapper";function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,c.kt)(m,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"  cilium uninstall\n  ifconfig cilium_vxlan down\n  ifconfig cilium_net down\n  ifconfig cilium_host down\n  ip link delete cilium_vxlan\n  ip link delete cilium_net\n")))}d.isMDXComponent=!0}}]);