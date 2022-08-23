"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6619],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?t.createElement(g,s(s({ref:n},u),{},{components:r})):t.createElement(g,s({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82438:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var t=r(83117),o=r(80102),a=(r(67294),r(3905)),s=["components"],i={title:"helm\u90e8\u7f72docker registry",date:new Date("2020-05-18T14:55:18.000Z"),description:"helm\u90e8\u7f72docker registry",tags:["helm"]},l=void 0,c={permalink:"/en/posts/helm-docker-registry",source:"@site/blog/posts/helm-docker-registry.md",title:"helm\u90e8\u7f72docker registry",description:"helm\u90e8\u7f72docker registry",date:"2020-05-18T14:55:18.000Z",formattedDate:"May 18, 2020",tags:[{label:"helm",permalink:"/en/tags/helm"}],readingTime:.7,hasTruncateMarker:!0,authors:[],frontMatter:{title:"helm\u90e8\u7f72docker registry",date:"2020-05-18T14:55:18.000Z",description:"helm\u90e8\u7f72docker registry",tags:["helm"]},prevItem:{title:"Go\u57fa\u7840",permalink:"/en/posts/go-study-ch1"},nextItem:{title:"helm\u90e8\u7f72drone",permalink:"/en/posts/helm-drone"}},u={authorsImageUrls:[]},p=[{value:"\u90e8\u7f72docker registry",id:"\u90e8\u7f72docker-registry",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:3}],d={toc:p};function m(e){var n=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u90e8\u7f72docker-registry"},"\u90e8\u7f72docker registry"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6700\u8fd1\u5927\u9646push\u955c\u50cf\u8001\u662f\u8d85\u65f6\uff0c\u4e8e\u662f\u60f3\u81ea\u5efa\u4e00\u4e2a\uff0c\u4f7f\u7528helm\u65b9\u5f0f, \u548cdrone\u5b89\u88c5\u65b9\u5f0f\u7c7b\u4f3c")),(0,a.kt)("h3",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm pull stable/docker-registry\ntar xf docker-registry-1.9.1.tgz && cd docker-registry/\n# \u7f16\u8f91values.yaml,\u81ea\u5b9a\u4e49\u914d\u7f6e\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u6ce8\u91ca\u90e8\u5206\u4e3a\u8c03\u6574\nreplicaCount: 1\nupdateStrategy:\npodAnnotations: {}\npodLabels: {}\nimage:\n  repository: registry\n  tag: 2.7.1\n  pullPolicy: IfNotPresent\nservice:\n  name: registry\n  type: ClusterIP\n  port: 5000\n  annotations: {}\ningress:\n  enabled: true # \u542f\u7528ingress\n  path: /\n  hosts:\n    - hub.local.godu.dev # \u57df\u540d\n  annotations:\n    nginx.ingress.kubernetes.io/proxy-body-size: "0" # k8s ingress 413\n    nginx.org/client-max-body-size: "0" # nginxnc ingress 413\n  labels: {}\n  tls:\n    - secretName: godu.dev # \u8bc1\u4e66\n      hosts:\n        - hub.local.godu.dev # \u57df\u540d\nresources: {}\npersistence:\n  accessMode: \'ReadWriteOnce\'\n  enabled: true\n  size: 5Gi\n  existingClaim: registry # \u540cdrone\nstorage: filesystem\nsecrets:\n  haSharedSecret: ""\n  htpasswd: ""\nconfigData:\n  version: 0.1\n  log:\n    fields:\n      service: registry\n  storage:\n    cache:\n      blobdescriptor: inmemory\n  http:\n    addr: :5000\n    headers:\n      X-Content-Type-Options: [nosniff]\n  health:\n    storagedriver:\n      enabled: true\n      interval: 10s\n      threshold: 3\nsecurityContext:\n  enabled: true\n  runAsUser: 1000\n  fsGroup: 1000\npriorityClassName: ""\npodDisruptionBudget: {}\nnodeSelector: {}\ntolerations: []\nextraVolumeMounts: []\nextraVolumes: []\n')),(0,a.kt)("p",null,"deploy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm install registry -f values.yaml stable/docker-registry\n")))}m.isMDXComponent=!0}}]);