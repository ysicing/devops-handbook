"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6985],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=l(t),m=s,f=g["".concat(c,".").concat(m)]||g[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},60714:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=t(83117),s=t(80102),a=(t(67294),t(3905)),i=["components"],o={title:"nginx ingress \u914d\u7f6e\u57df\u540d\u8bc1\u4e66",date:new Date("2020-05-18T14:55:18.000Z"),description:"nginx ingress \u914d\u7f6e\u57df\u540d\u8bc1\u4e66",tags:["ingress","kubernetes"]},c=void 0,l={permalink:"/en/posts/k8s-ingress-tls-config",source:"@site/blog/posts/k8s-ingress-tls-config.md",title:"nginx ingress \u914d\u7f6e\u57df\u540d\u8bc1\u4e66",description:"nginx ingress \u914d\u7f6e\u57df\u540d\u8bc1\u4e66",date:"2020-05-18T14:55:18.000Z",formattedDate:"May 18, 2020",tags:[{label:"ingress",permalink:"/en/tags/ingress"},{label:"kubernetes",permalink:"/en/tags/kubernetes"}],readingTime:.6466666666666666,hasTruncateMarker:!0,authors:[],frontMatter:{title:"nginx ingress \u914d\u7f6e\u57df\u540d\u8bc1\u4e66",date:"2020-05-18T14:55:18.000Z",description:"nginx ingress \u914d\u7f6e\u57df\u540d\u8bc1\u4e66",tags:["ingress","kubernetes"]},prevItem:{title:"\u5f00\u542f\u96c6\u7fa4feature\u5f00\u542f\u96c6\u7fa4feature",permalink:"/en/posts/k8s-feature"},nextItem:{title:"k8s\u5b9e\u8df5\u4e4b\u57fa\u7840\u6982\u5ff5",permalink:"/en/posts/k8s-intro-base"}},p={authorsImageUrls:[]},u=[{value:"\xa0\u521b\u5efa\u8bc1\u4e66",id:"\u521b\u5efa\u8bc1\u4e66",level:2},{value:"\u521b\u5efa secret",id:"\u521b\u5efa-secret",level:2},{value:"\u914d\u7f6eingress",id:"\u914d\u7f6eingress",level:2}],g={toc:u};function m(e){var n=e.components,t=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"nginx ingress \u914d\u7f6e\u57df\u540d\u8bc1\u4e66(\u9ed8\u8ba4\u4ee5ingress-nginx\u4e3a\u4f8b)")),(0,a.kt)("h2",{id:"\u521b\u5efa\u8bc1\u4e66"},"\xa0\u521b\u5efa\u8bc1\u4e66"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u5df2\u7ecf\u7b7e\u53d1\u8bc1\u4e66"),(0,a.kt)("h2",{id:"\u521b\u5efa-secret"},"\u521b\u5efa secret"),(0,a.kt)("p",null,"\u521b\u5efa\u597d\u8bc1\u4e66\u4ee5\u540e\uff0c\u9700\u8981\u5c06\u8bc1\u4e66\u5185\u5bb9\u653e\u5230 secret \u4e2d\uff0csecret \u4e2d\u5168\u90e8\u5185\u5bb9\u9700\u8981 base64 \u7f16\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# ingress-secret.yml\napiVersion: v1\nkind: Secret\nmetadata:\n  name: ingress-secret-prom\n  namespace: monitoring\ntype: kubernetes.io/tls\ndata:\n  tls.crt: <base64 encoded cert>\n  tls.key: <base64 encoded key>\n")),(0,a.kt)("p",null,"\u5b8c\u6210\u521b\u5efa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"~# kubectl apply -f ingress-secret.yml -n monitoring\nsecret/ingress-secret created\n~# kubectl apply -f ingress-secret.yml -n kube-system\nsecret/ingress-secret created\n")),(0,a.kt)("p",null,"\u6216\u8005\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret tls ingress-secret --key tls.key.pem --cert tls.pem\n")),(0,a.kt)("h2",{id:"\u914d\u7f6eingress"},"\u914d\u7f6eingress"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: nginx\n  name: prom\n  namespace: monitoring\nspec:\n  tls:\n  - hosts:\n    - prom.k7s.xyz\n    - grafana.k7s.xyz\n    - alter.k7s.xyz\n    secretName: ingress-secret\n  rules:\n  - host: prom.k7s.xyz\n    http:\n      paths:\n      - backend:\n          serviceName: prometheus-k8s\n          servicePort: 9090\n  - host: grafana.k7s.xyz\n    http:\n      paths:\n      - backend:\n          serviceName: grafana\n          servicePort: 3000\n  - host: alter.k7s.xyz\n    http:\n      paths:\n      - backend:\n          serviceName: alertmanager-main\n          servicePort: 9093\n")))}m.isMDXComponent=!0}}]);