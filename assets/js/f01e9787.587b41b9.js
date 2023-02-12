"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2099],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(n),f=i,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||c;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,o=new Array(c);o[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[s]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<c;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3282:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(87462),i=n(63366),c=(n(67294),n(3905)),o=["components"],a={title:"\u5347\u7ea7",tags:["cilium"]},u=void 0,l={unversionedId:"cni/cilium/upgrade",id:"cni/cilium/upgrade",title:"\u5347\u7ea7",description:"\u5347\u7ea7cilium",source:"@site/docs/cni/cilium/upgrade.md",sourceDirName:"cni/cilium",slug:"/cni/cilium/upgrade",permalink:"/docs/cni/cilium/upgrade",draft:!1,tags:[{label:"cilium",permalink:"/docs/tags/cilium"}],version:"current",lastUpdatedBy:"ysicing",lastUpdatedAt:1676205570,formattedLastUpdatedAt:"2023\u5e742\u670812\u65e5",frontMatter:{title:"\u5347\u7ea7",tags:["cilium"]},sidebar:"tutorialSidebar",previous:{title:"\u5378\u8f7d",permalink:"/docs/cni/cilium/uninstall"},next:{title:"\u57fa\u4e8egitea\u5b89\u88c5flux",permalink:"/docs/gitops/flux/gitea-flux-install"}},p={},s=[{value:"\u5347\u7ea7cilium",id:"\u5347\u7ea7cilium",level:2}],m={toc:s},f="wrapper";function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,c.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\u5347\u7ea7cilium"},"\u5347\u7ea7cilium"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-console"},"cilium upgrade \\\n  --agent-image ccr.ccs.tencentyun.com/k7scn/cilium \\\n  --hubble-relay-image ccr.ccs.tencentyun.com/k7scn/hubble-relay \\\n  --operator-image ccr.ccs.tencentyun.com/k7scn/operator-generic\n")))}d.isMDXComponent=!0}}]);