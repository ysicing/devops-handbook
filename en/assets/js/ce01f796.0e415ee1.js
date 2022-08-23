"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7455],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=c(n),k=i,b=m["".concat(s,".").concat(k)]||m[k]||p[k]||a;return n?r.createElement(b,o(o({ref:t},l),{},{components:n})):r.createElement(b,o({ref:t},l))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55679:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],u={title:"minikube\u5b89\u88c5k8s",date:new Date("2020-05-18T14:55:18.000Z"),description:"minikube\u5b89\u88c5k8s",tags:["kubernetes","minikube"]},s=void 0,c={permalink:"/en/posts/k8s-minikube-install",source:"@site/blog/posts/k8s-minikube-install.md",title:"minikube\u5b89\u88c5k8s",description:"minikube\u5b89\u88c5k8s",date:"2020-05-18T14:55:18.000Z",formattedDate:"May 18, 2020",tags:[{label:"kubernetes",permalink:"/en/tags/kubernetes"},{label:"minikube",permalink:"/en/tags/minikube"}],readingTime:.16666666666666666,hasTruncateMarker:!0,authors:[],frontMatter:{title:"minikube\u5b89\u88c5k8s",date:"2020-05-18T14:55:18.000Z",description:"minikube\u5b89\u88c5k8s",tags:["kubernetes","minikube"]},prevItem:{title:"k8s\u5b9e\u8df5\u4e4b\u5b89\u88c5linkerdv2",permalink:"/en/posts/k8s-linkerd-install"},nextItem:{title:"k8s\u5b9e\u8df5\u4e4b\u8d44\u6e90\u7ba1\u7406\u7684\u6743\u9650\u63a7\u5236",permalink:"/en/posts/k8s-sa"}},l={authorsImageUrls:[]},p=[{value:"minikube\u5b89\u88c5k8s",id:"minikube\u5b89\u88c5k8s",level:2},{value:"MacOS\u5b89\u88c5",id:"macos\u5b89\u88c5",level:3}],m={toc:p};function k(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"minikube\u5b89\u88c5k8s"},"minikube\u5b89\u88c5k8s"),(0,a.kt)("h3",{id:"macos\u5b89\u88c5"},"MacOS\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install minikube\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# PROXY\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u9700\u8981\u8bbe\u7f6e\uff0c\u53ef\u4e0d\u8bbe\u7f6e\nminikube start --cpus=2 --memory 4g --disk-size=40g --driver=virtualbox --image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers --nodes=2 --docker-env HTTP_PROXY=http://192.168.99.1:7890 --docker-env HTTPS_PROXY=http://192.168.99.1:7890  --docker-env NO_PROXY=127.0.0.1/32,192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,localhost\n")))}k.isMDXComponent=!0}}]);