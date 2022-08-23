"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4201],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return k}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||o;return r?t.createElement(m,c(c({ref:n},s),{},{components:r})):t.createElement(m,c({ref:n},s))}));function k(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},34197:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var t=r(83117),a=r(80102),o=(r(67294),r(3905)),c=["components"],i={title:"\u5728k8s\u4e2d\u4f7f\u7528docker in docker",date:new Date("2020-05-29T08:55:18.000Z"),description:"\u4f7f\u7528docker in docker",tags:["docker","kubernetes"]},l=void 0,p={permalink:"/posts/docker-in-k8s",source:"@site/blog/posts/docker-in-k8s.md",title:"\u5728k8s\u4e2d\u4f7f\u7528docker in docker",description:"\u4f7f\u7528docker in docker",date:"2020-05-29T08:55:18.000Z",formattedDate:"2020\u5e745\u670829\u65e5",tags:[{label:"docker",permalink:"/tags/docker"},{label:"kubernetes",permalink:"/tags/kubernetes"}],readingTime:.5266666666666666,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u5728k8s\u4e2d\u4f7f\u7528docker in docker",date:"2020-05-29T08:55:18.000Z",description:"\u4f7f\u7528docker in docker",tags:["docker","kubernetes"]},prevItem:{title:"Etcd\u4f7f\u7528\u5165\u95e8",permalink:"/posts/etcd-op"},nextItem:{title:"Prometheus Operator \u521d\u4f53\u9a8c",permalink:"/posts/prometheus-install"}},s={authorsImageUrls:[]},d=[{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"go api\u64cd\u4f5c",id:"go-api\u64cd\u4f5c",level:2}],u={toc:d};function k(e){var n=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# docker.yaml\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: docker-api\n  namespace: gaea-op\n  annotations:\n    k8s.gaea.me/workload: app\n  labels:\n    k8s.gaea.me/name: docker-api\nspec:\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        k8s.gaea.me/name: docker-api\n    spec:\n      containers:\n        - name: dockerd\n          image: \'docker:18.09.9-dind\'\n          securityContext:\n            privileged: true\n        - name: docker-cli\n          image: \'docker:18.09.9\'\n          env:\n            - name: DOCKER_HOST\n              value: tcp://127.0.0.1:2375\n          command: ["/bin/sh"]\n          args: ["-c", "docker info >/dev/null 2>&1; while [ $? -ne 0 ] ; do sleep 3; docker info >/dev/null 2>&1; done; docker pull library/busybox:latest; docker save -o busybox-latest.tar library/busybox:latest; docker rmi library/busybox:latest; while true; do sleep 86400; done"]\n  selector:\n    matchLabels:\n      k8s.gaea.me/name: docker-api\n  serviceName: docker-api\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: docker-api\n  namespace: gaea-op\nspec:\n  ports:\n    - name: tcp-2375\n      port: 2375\n  clusterIP: None\n  selector:\n    k8s.gaea.me/name: docker-api\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f docker.yaml\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# docker api\u5730\u5740: docker-api-0.docker-api.gaea-op.svc.cluster.local\nkubectl exec -it pods/docker-api-0   -n gaea-op -c docker-cli -- ash\n/ # docker info\n")),(0,o.kt)("h2",{id:"go-api\u64cd\u4f5c"},"go api\u64cd\u4f5c"))}k.isMDXComponent=!0}}]);