"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5760],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58391:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"awk \u4e2d\u5173\u4e8e\u591a\u4e2a$\u7684\u7528\u6cd5",date:new Date("2019-12-18T14:55:18.000Z"),description:"awk \u4e2d\u5173\u4e8e\u591a\u4e2a$\u7684\u7528\u6cd5",tags:["shell"]},l=void 0,p={permalink:"/en/posts/awk-func",source:"@site/blog/posts/awk-func.md",title:"awk \u4e2d\u5173\u4e8e\u591a\u4e2a$\u7684\u7528\u6cd5",description:"awk \u4e2d\u5173\u4e8e\u591a\u4e2a$\u7684\u7528\u6cd5",date:"2019-12-18T14:55:18.000Z",formattedDate:"December 18, 2019",tags:[{label:"shell",permalink:"/en/tags/shell"}],readingTime:.5333333333333333,hasTruncateMarker:!0,authors:[],frontMatter:{title:"awk \u4e2d\u5173\u4e8e\u591a\u4e2a$\u7684\u7528\u6cd5",date:"2019-12-18T14:55:18.000Z",description:"awk \u4e2d\u5173\u4e8e\u591a\u4e2a$\u7684\u7528\u6cd5",tags:["shell"]},prevItem:{title:"\u5185\u7f51\u7a7f\u900f\u4e4bwireguard",permalink:"/en/posts/wireguard-install"},nextItem:{title:"Docker\u914d\u7f6e\u9ed8\u8ba4\u7f51\u6865ip\u5730\u5740",permalink:"/en/posts/docker-default-address-pools"}},u={authorsImageUrls:[]},s=[],f={toc:s},d="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0a\u5468\u6709\u9047\u5230\u8fc7\u8fd9\u4e2a\u95ee\u9898 ",(0,a.kt)("inlineCode",{parentName:"p"},"awk '{print $$1}'")," \u8fd9\u4e2a$$\u662f\u4ec0\u4e48\u7528\u6cd5\u5462")),(0,a.kt)("p",null,"\u95f4\u63a5\u5b57\u6bb5\u5bfb\u5740,\u5176\u7c7b\u4f3c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"awk '{print $$1}' ===> awk '{print $($1)}' ===> awk '{Nr=$1; print $Nr}'\n")),(0,a.kt)("p",null,"\u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ echo -e "1 b c d\\n2 b c d\\n3 b c d\\n4 b c d" \n1 b c d\n2 b c d\n3 b c d\n4 b c d\n\n$ echo -e "1 b c d\\n2 b c d\\n3 b c d\\n4 b c d" | awk \'{print $$1}\'\n1  # since filed #1=1 result print first field\nb  # since filed #1=2 result print secondfield\nc  # since filed #1=3 result print third field\nd  # since filed #1=4 result print fourth field\n')),(0,a.kt)("p",null,"\u7c7b\u4f3c$\u53ef\u4ee5\u6839\u636e\u9700\u8981\u6dfb\u52a0\u66f4\u591a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"awk '{print $$$1}' ===>  awk '{print $$($1)}' ===> awk '{print $($($1))}'\n")))}m.isMDXComponent=!0}}]);