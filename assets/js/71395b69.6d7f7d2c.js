"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4833],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,d=p["".concat(a,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[p]="string"==typeof e?e:i,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],c={title:"\u5378\u8f7d",tags:["cilium"]},a=void 0,u={unversionedId:"k8s/cilium/uninstall",id:"k8s/cilium/uninstall",title:"\u5378\u8f7d",description:"\u5378\u8f7d",source:"@site/docs/k8s/cilium/uninstall.md",sourceDirName:"k8s/cilium",slug:"/k8s/cilium/uninstall",permalink:"/docs/k8s/cilium/uninstall",draft:!1,tags:[{label:"cilium",permalink:"/docs/tags/cilium"}],version:"current",lastUpdatedBy:"ysicing",lastUpdatedAt:1676381200,formattedLastUpdatedAt:"2023\u5e742\u670814\u65e5",frontMatter:{title:"\u5378\u8f7d",tags:["cilium"]},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/docs/k8s/cilium/install"},next:{title:"\u5347\u7ea7",permalink:"/docs/k8s/cilium/upgrade"}},s={},p=[{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:2}],f={toc:p},m="wrapper";function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  cilium uninstall\n  ifconfig cilium_vxlan down\n  ifconfig cilium_net down\n  ifconfig cilium_host down\n  ip link delete cilium_vxlan\n  ip link delete cilium_net\n")))}d.isMDXComponent=!0}}]);