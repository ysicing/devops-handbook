"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8222],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return g}});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},k=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),k=i,g=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return n?t.createElement(g,o(o({ref:r},c),{},{components:n})):t.createElement(g,o({ref:r},c))}));function g(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=k;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<l;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},30051:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var t=n(87462),i=n(63366),l=(n(67294),n(3905)),o=["components"],a={title:"k8s\u5b9e\u8df5\u4e4b\u5b89\u88c5linkerdv2",date:new Date("2020-05-18T14:55:18.000Z"),description:"k8s\u5b9e\u8df5\u4e4b\u5b89\u88c5linkerdv2",tags:["linkerd"]},s=void 0,p={permalink:"/en/posts/k8s-linkerd-install",source:"@site/blog/posts/k8s-linkerd-install.md",title:"k8s\u5b9e\u8df5\u4e4b\u5b89\u88c5linkerdv2",description:"k8s\u5b9e\u8df5\u4e4b\u5b89\u88c5linkerdv2",date:"2020-05-18T14:55:18.000Z",formattedDate:"May 18, 2020",tags:[{label:"linkerd",permalink:"/en/tags/linkerd"}],readingTime:1.0633333333333332,hasTruncateMarker:!0,authors:[],frontMatter:{title:"k8s\u5b9e\u8df5\u4e4b\u5b89\u88c5linkerdv2",date:"2020-05-18T14:55:18.000Z",description:"k8s\u5b9e\u8df5\u4e4b\u5b89\u88c5linkerdv2",tags:["linkerd"]},prevItem:{title:"k8s\u6807\u7b7e\u548c\u9009\u62e9\u5668",permalink:"/en/posts/k8s-labels"},nextItem:{title:"minikube\u5b89\u88c5k8s",permalink:"/en/posts/k8s-minikube-install"}},c={authorsImageUrls:[]},u=[{value:"\u5b89\u88c5linkerd v2",id:"\u5b89\u88c5linkerd-v2",level:2},{value:"\u5b89\u88c5\u4e8c\u8fdb\u5236",id:"\u5b89\u88c5\u4e8c\u8fdb\u5236",level:4},{value:"\u83b7\u53d6\u76f8\u5173\u955c\u50cf",id:"\u83b7\u53d6\u76f8\u5173\u955c\u50cf",level:4},{value:"\u540c\u6b65\u5230\u5185\u7f51\u73af\u5883",id:"\u540c\u6b65\u5230\u5185\u7f51\u73af\u5883",level:4},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:4},{value:"\u542f\u7528",id:"\u542f\u7528",level:4}],d={toc:u},k="wrapper";function g(e){var r=e.components,n=(0,i.Z)(e,o);return(0,l.kt)(k,(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5b89\u88c5linkerd-v2"},"\u5b89\u88c5linkerd v2"),(0,l.kt)("h4",{id:"\u5b89\u88c5\u4e8c\u8fdb\u5236"},"\u5b89\u88c5\u4e8c\u8fdb\u5236"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker run --rm -v /usr/local/bin:/sysdir ysicing/tools tar zxf /pkg.tgz -C /sysdir\n")),(0,l.kt)("h4",{id:"\u83b7\u53d6\u76f8\u5173\u955c\u50cf"},"\u83b7\u53d6\u76f8\u5173\u955c\u50cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"linkerd install --ignore-cluster | grep image: | sed -e 's/^ *//' | sort | uniq | awk '{print $2}' | xargs -I {} docker pull {}\nlinkerd install --ignore-cluster | grep image: | sed -e 's/^ *//' | sort | uniq | awk '{print $2}' | grep \"gcr.io/linkerd-io\" | awk -F/ '{print $NF}' | xargs -I {} docker tag gcr.io/linkerd-io/{} ysicing/linkerd-io-{}\nlinkerd install --ignore-cluster | grep image: | sed -e 's/^ *//' | sort | uniq | awk '{print $2}' | grep \"gcr.io/linkerd-io\" | awk -F/ '{print $NF}' | xargs -I {} docker push ysicing/linkerd-io-{}\n")),(0,l.kt)("h4",{id:"\u540c\u6b65\u5230\u5185\u7f51\u73af\u5883"},"\u540c\u6b65\u5230\u5185\u7f51\u73af\u5883"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"linkerd install --ignore-cluster | grep image: | sed -e 's/^ *//' | sort | uniq | awk '{print $2}' | grep \"gcr.io/linkerd-io\" | awk -F/ '{print $NF}' | xargs -I {} docker pull ysicing/linkerd-io-{}\nlinkerd install --ignore-cluster | grep image: | sed -e 's/^ *//' | sort | uniq | awk '{print $2}' | grep \"gcr.io/linkerd-io\" | awk -F/ '{print $NF}' | xargs -I {} docker tag ysicing/linkerd-io-{} hub.godu.dev/linkerd/{}\nlinkerd install --ignore-cluster | grep image: | sed -e 's/^ *//' | sort | uniq | awk '{print $2}' | grep \"gcr.io/linkerd-io\" | awk -F/ '{print $NF}' | xargs -I {} docker push hub.godu.dev/linkerd/{}\n")),(0,l.kt)("h4",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"linkerd check --pre\nlinkerd install --registry hub.godu.dev/linkerd | kubectl apply -f -\nlinkerd check\n")),(0,l.kt)("h4",{id:"\u542f\u7528"},"\u542f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# \u5df2\u6709\u5e94\u7528\nkubectl get -n emojivoto deploy/web -o yaml | linkerd inject - | kubectl apply -f -\n# go \u521b\u5efa\u5e94\u7528\nfunc (app *TalkController) CustomAnnotations() map[string]string {\n    return map[string]string{\n        "linkerd.io/inject": "enabled",\n        //"prometheus.io/port": "12306",\n        //"prometheus.io/scrape": "true",\n    }\n}\n# deploy\n  template:\n    metadata:\n      annotations:\n        linkerd.io/inject: enabled\n        prometheus.io/port: "80"\n        prometheus.io/scrape: "true"\n')))}g.isMDXComponent=!0}}]);