"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9541],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},15116:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var r=n(83117),i=n(80102),l=(n(67294),n(3905)),o=["components"],a={title:"\u5b89\u88c5",tag:["cilium","\u5b89\u88c5"]},c=void 0,u={unversionedId:"cni/cilium/install",id:"cni/cilium/install",title:"\u5b89\u88c5",description:"\u76ee\u524d\u6700\u65b0\u7248\u672c\u5b89\u88c5",source:"@site/docs/cni/cilium/install.md",sourceDirName:"cni/cilium",slug:"/cni/cilium/install",permalink:"/docs/cni/cilium/install",draft:!1,tags:[],version:"current",lastUpdatedBy:"ysicing",lastUpdatedAt:1662292166,formattedLastUpdatedAt:"2022\u5e749\u67084\u65e5",frontMatter:{title:"\u5b89\u88c5",tag:["cilium","\u5b89\u88c5"]},sidebar:"tutorialSidebar",previous:{title:"debian\u5347\u7ea7\u5185\u6838",permalink:"/docs/system/upgrade"},next:{title:"\u5378\u8f7d",permalink:"/docs/cni/cilium/uninstall"}},p={},s=[{value:"\u76ee\u524d\u6700\u65b0\u7248\u672c\u5b89\u88c5",id:"\u76ee\u524d\u6700\u65b0\u7248\u672c\u5b89\u88c5",level:2},{value:"0.12.x\u4e4b\u524d\u7248\u672c\u5b89\u88c5",id:"012x\u4e4b\u524d\u7248\u672c\u5b89\u88c5",level:2}],f={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u76ee\u524d\u6700\u65b0\u7248\u672c\u5b89\u88c5"},"\u76ee\u524d\u6700\u65b0\u7248\u672c\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cilium install --helm-set rollOutCiliumPods=true,ipam.operator.clusterPoolIPv4PodCIDR="10.80.0.0/16"\ncilium hubble enable --ui\n')),(0,l.kt)("h2",{id:"012x\u4e4b\u524d\u7248\u672c\u5b89\u88c5"},"0.12.x\u4e4b\u524d\u7248\u672c\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cilium install --config cluster-pool-ipv4-cidr=10.80.0.0/16\ncilium hubble enable --ui\n")))}m.isMDXComponent=!0}}]);