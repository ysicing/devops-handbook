"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8750],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(t),m=i,d=f["".concat(a,".").concat(m)]||f[m]||s[m]||o;return t?r.createElement(d,c(c({ref:n},p),{},{components:t})):r.createElement(d,c({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81488:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=t(83117),i=t(80102),o=(t(67294),t(3905)),c=["components"],l={title:"\u5378\u8f7d"},a=void 0,u={unversionedId:"cni/cilium/uninstall",id:"cni/cilium/uninstall",title:"\u5378\u8f7d",description:"\u5378\u8f7d",source:"@site/docs/cni/cilium/uninstall.md",sourceDirName:"cni/cilium",slug:"/cni/cilium/uninstall",permalink:"/en/docs/cni/cilium/uninstall",draft:!1,tags:[],version:"current",lastUpdatedBy:"ysicing",lastUpdatedAt:1662292166,formattedLastUpdatedAt:"Sep 4, 2022",frontMatter:{title:"\u5378\u8f7d"},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/en/docs/cni/cilium/install"},next:{title:"\u5347\u7ea7",permalink:"/en/docs/cni/cilium/upgrade"}},p={},s=[{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:2}],f={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  cilium uninstall\n  ifconfig cilium_vxlan down\n  ifconfig cilium_net down\n  ifconfig cilium_host down\n  ip link delete cilium_vxlan\n  ip link delete cilium_net\n")))}m.isMDXComponent=!0}}]);