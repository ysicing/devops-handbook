"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2099],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(n),f=c,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:c,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3282:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(83117),c=n(80102),i=(n(67294),n(3905)),o=["components"],a={title:"\u5347\u7ea7",tag:["cilium","\u5347\u7ea7"]},u=void 0,l={unversionedId:"cni/cilium/upgrade",id:"cni/cilium/upgrade",title:"\u5347\u7ea7",description:"\u5347\u7ea7cilium",source:"@site/docs/cni/cilium/upgrade.md",sourceDirName:"cni/cilium",slug:"/cni/cilium/upgrade",permalink:"/en/docs/cni/cilium/upgrade",draft:!1,tags:[],version:"current",lastUpdatedBy:"ysicing",lastUpdatedAt:1662212434,formattedLastUpdatedAt:"Sep 3, 2022",frontMatter:{title:"\u5347\u7ea7",tag:["cilium","\u5347\u7ea7"]},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/en/docs/cni/cilium/install"},next:{title:"tke\u96c6\u7fa4\u7981\u6b62\u8c03\u5ea6\u6ce8\u610f\u4e8b\u9879",permalink:"/en/docs/qcloud/tke/tke-cordon-node"}},p={},s=[{value:"\u5347\u7ea7cilium",id:"\u5347\u7ea7cilium",level:2}],m={toc:s};function f(e){var t=e.components,n=(0,c.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5347\u7ea7cilium"},"\u5347\u7ea7cilium"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"cilium upgrade \\\n  --agent-image ccr.ccs.tencentyun.com/k7scn/cilium \\\n  --hubble-relay-image ccr.ccs.tencentyun.com/k7scn/hubble-relay \\\n  --operator-image ccr.ccs.tencentyun.com/k7scn/operator-generic\n")))}f.isMDXComponent=!0}}]);