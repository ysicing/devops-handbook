"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1803],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,k=m["".concat(d,".").concat(u)]||m[u]||i[u]||l;return t?o.createElement(k,a(a({ref:n},c),{},{components:t})):o.createElement(k,a({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=m;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<l;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42109:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return i}});var o=t(83117),r=t(80102),l=(t(67294),t(3905)),a=["components"],p={title:"k8s\u5b9e\u8df5\u4e4b\u90e8\u7f72\u7b2c\u4e00\u4e2a\u5e94\u7528",date:new Date("2020-05-18T14:55:18.000Z"),description:"k8s\u5b9e\u8df5\u4e4b\u90e8\u7f72\u7b2c\u4e00\u4e2a\u5e94\u7528",tags:["kubernetes"]},d=void 0,s={permalink:"/en/posts/k8s-intro-deploy",source:"@site/blog/posts/k8s-intro-deploy.md",title:"k8s\u5b9e\u8df5\u4e4b\u90e8\u7f72\u7b2c\u4e00\u4e2a\u5e94\u7528",description:"k8s\u5b9e\u8df5\u4e4b\u90e8\u7f72\u7b2c\u4e00\u4e2a\u5e94\u7528",date:"2020-05-18T14:55:18.000Z",formattedDate:"May 18, 2020",tags:[{label:"kubernetes",permalink:"/en/tags/kubernetes"}],readingTime:5.463333333333333,hasTruncateMarker:!0,authors:[],frontMatter:{title:"k8s\u5b9e\u8df5\u4e4b\u90e8\u7f72\u7b2c\u4e00\u4e2a\u5e94\u7528",date:"2020-05-18T14:55:18.000Z",description:"k8s\u5b9e\u8df5\u4e4b\u90e8\u7f72\u7b2c\u4e00\u4e2a\u5e94\u7528",tags:["kubernetes"]},prevItem:{title:"k8s\u5b9e\u8df5\u4e4b\u57fa\u7840\u6982\u5ff5",permalink:"/en/posts/k8s-intro-base"},nextItem:{title:"kubectl plugin\u63d2\u4ef6\u673a\u5236\u521d\u4f53\u9a8c\u4e4bkrew",permalink:"/en/posts/k8s-kubectl-plugins"}},c={authorsImageUrls:[]},i=[{value:"\u90e8\u7f72\u7b2c\u4e00\u4e2a\u5e94\u7528",id:"\u90e8\u7f72\u7b2c\u4e00\u4e2a\u5e94\u7528",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"\u8bbf\u95ee\u90e8\u7f72\u7684\u5e94\u7528",id:"\u8bbf\u95ee\u90e8\u7f72\u7684\u5e94\u7528",level:2},{value:"\u4f38\u7f29\u5e94\u7528",id:"\u4f38\u7f29\u5e94\u7528",level:3},{value:"\u6700\u540e",id:"\u6700\u540e",level:3}],m={toc:i};function u(e){var n=e.components,p=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,o.Z)({},m,p,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u90e8\u7f72\u7b2c\u4e00\u4e2a\u5e94\u7528"},"\u90e8\u7f72\u7b2c\u4e00\u4e2a\u5e94\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# https://sh.ysicing.me/k8s/demo/deploy.yaml\napiVersion: apps/v1    #\u4e0ek8s\u96c6\u7fa4\u7248\u672c\u6709\u5173\uff0c\u4f7f\u7528 kubectl api-versions \u5373\u53ef\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u652f\u6301\u7684\u7248\u672c\nkind: Deployment    #\u8be5\u914d\u7f6e\u7684\u7c7b\u578b\uff0c\u6211\u4eec\u4f7f\u7528\u7684\u662f Deployment\nmetadata:            #\u8bd1\u540d\u4e3a\u5143\u6570\u636e\uff0c\u5373 Deployment \u7684\u4e00\u4e9b\u57fa\u672c\u5c5e\u6027\u548c\u4fe1\u606f\n  namespace: default # \u547d\u540d\u7a7a\u95f4\n  name: demo-deployment    #Deployment \u7684\u540d\u79f0\n  labels:        #\u6807\u7b7e\uff0c\u53ef\u4ee5\u7075\u6d3b\u5b9a\u4f4d\u4e00\u4e2a\u6216\u591a\u4e2a\u8d44\u6e90\uff0c\u5176\u4e2dkey\u548cvalue\u5747\u53ef\u81ea\u5b9a\u4e49\uff0c\u53ef\u4ee5\u5b9a\u4e49\u591a\u7ec4\uff0c\u76ee\u524d\u4e0d\u9700\u8981\u7406\u89e3\n    app: demo    #\u4e3a\u8be5Deployment\u8bbe\u7f6ekey\u4e3aapp\uff0cvalue\u4e3ademo\u7684\u6807\u7b7e\nspec:            #\u8fd9\u662f\u5173\u4e8e\u8be5Deployment\u7684\u63cf\u8ff0\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u4f60\u671f\u5f85\u8be5Deployment\u5728k8s\u4e2d\u5982\u4f55\u4f7f\u7528\n  replicas: 1    #\u4f7f\u7528\u8be5Deployment\u521b\u5efa\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u5b9e\u4f8b\n  #strategy: #\u6eda\u52a8\u7b56\u7565 \u6700\u591a\u65b0\u589e\u4e00\u4e2a\uff0c\u6700\u5c0f\u4e0b\u7ebf\u4e00\u4e2a\n  #  rollingUpdate:\n  #    maxSurge: 1\n  #    maxUnavailable: 1\n  #  type: RollingUpdate\n  selector:        #\u6807\u7b7e\u9009\u62e9\u5668\uff0c\u4e0e\u4e0a\u9762\u7684\u6807\u7b7e\u5171\u540c\u4f5c\u7528\uff0c\u76ee\u524d\u4e0d\u9700\u8981\u7406\u89e3\n    matchLabels: #\u9009\u62e9\u5305\u542b\u6807\u7b7eapp:demo\u7684\u8d44\u6e90\n      app: demo\n  template:        #\u8fd9\u662f\u9009\u62e9\u6216\u521b\u5efa\u7684Pod\u7684\u6a21\u677f\n    metadata:    #Pod\u7684\u5143\u6570\u636e\n      labels:    #Pod\u7684\u6807\u7b7e\uff0c\u4e0a\u9762\u7684selector\u5373\u9009\u62e9\u5305\u542b\u6807\u7b7eapp:demo\u7684Pod\n        app: demo\n    spec:        #\u671f\u671bPod\u5b9e\u73b0\u7684\u529f\u80fd\uff08\u5373\u5728pod\u4e2d\u90e8\u7f72\uff09\n      containers:    #\u751f\u6210container\uff0c\u4e0edocker\u4e2d\u7684container\u662f\u540c\u4e00\u79cd\n      - name: godemo    #container\u7684\u540d\u79f0\n        image: ysicing/godemo    #\u4f7f\u7528\u955c\u50cfgodemo\u521b\u5efacontainer\uff0c\u8be5container\u9ed8\u8ba480\u7aef\u53e3\u53ef\u8bbf\u95ee\n")),(0,l.kt)("p",null,"\u90e8\u7f72\u5e94\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl apply -f https://sh.ysicing.me/k8s/demo/deploy.yaml\ndeployment.apps/demo-deployment created\n")),(0,l.kt)("p",null,"\u67e5\u770b\u90e8\u7f72\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u9ed8\u8ba4ns\u5c31\u662fdefault\u53ef\u7701\u5374\nkubectl get deployments -n default\nNAME              READY   UP-TO-DATE   AVAILABLE   AGE\ndemo-deployment   1/1     1            1           2m54s\n\nkubectl get pods\nNAME                               READY   STATUS    RESTARTS   AGE\ndemo-deployment-59cd96d4d5-cjjwr   1/1     Running   0          3m17s\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Deployment"),"\u662fpod\u63a7\u5236\u5668"),(0,l.kt)("p",null,"\u5e38\u89c1pod\u63a7\u5236\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u5b88\u62a4\u578b:\n    \u65e0\u72b6\u6001\u975e\u7cfb\u7edf\u7ea7\u5e94\u7528: Deployment (\u5982nginx)\n    \u65e0\u72b6\u6001\u7cfb\u7edf\u7ea7\u5e94\u7528: DaemonSet (\u5982\u65e5\u5fd7\u76d1\u63a7\u6536\u96c6\u7aef\uff0c\u6bcf\u4e2anode\u8282\u70b9\u4ec5\u4e14\u9700\u8981\u8dd1\u4e00\u4e2apod)\n    \u6709\u72b6\u6001\u5e94\u7528: StatefulSet (\u6570\u636e\u5e93\u7c7b\u5e94\u7528\u5982mysql\u7b49)\n\u975e\u5b88\u62a4\u578b:\n    \u4e00\u6b21\u6027\u4efb\u52a1: Job\n    \u5b9a\u65f6\u4efb\u52a1: CronJob\n")),(0,l.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u83b7\u53d6\u8d44\u6599\nkubectl explain \u7c7b\u578b(\u5982pods)\n\n# \u83b7\u53d6\u8d44\u6e90\u4fe1\u606f\nkubectl get \u8d44\u6e90\u7c7b\u578b\n\nkubectl get pods \u83b7\u53d6default\u79df\u6237\u7684\u6240\u6709pods\u8d44\u6e90\u5217\u8868\nkubectl get nodes \u83b7\u53d6\u8282\u70b9\u8d44\u6e90\u5217\u8868\nkubectl get deploy \u83b7\u53d6default\u79df\u6237\u7c7b\u578b\u4e3adeployment\u7684\u8d44\u6e90\u5217\u8868\n\n# \u663e\u793a\u8d44\u6e90\u7684\u8be6\u7ec6\u4fe1\u606f\nkubectl describe \u8d44\u6e90\u7c7b\u578b \u8d44\u6e90\u540d\u79f0\n\nkubectl describe deploy demo-deployment \u83b7\u53d6default\u79df\u6237deployment\u7c7b\u578b\u4e14\u540d\u4e3ademo-deployment\u7684\u8be6\u7ec6\u4fe1\u606f\n\n# \u770bpod\u65e5\u5fd7\uff0c\u7c7b\u4f3cdocker logs\nkubectl logs Pod\u540d\u79f0 \nkubectl logs demo-deployment-59cd96d4d5-cjjwr \u67e5\u770bdefault\u79df\u6237\u4e0bpod\u540d\u4e3ademo-deployment-59cd96d4d5-cjjwr\u7684\u65e5\u5fd7\n\n# \u8fdb\u5165\u5bb9\u5668\uff0c\u7c7b\u578bdocker exec\nkubectl exec -it Pod\u540d\u79f0 \u64cd\u4f5c\u547d\u4ee4\n\nkubectl exec -it demo-deployment-59cd96d4d5-cjjwr ash\n/ #\n")),(0,l.kt)("h2",{id:"\u8bbf\u95ee\u90e8\u7f72\u7684\u5e94\u7528"},"\u8bbf\u95ee\u90e8\u7f72\u7684\u5e94\u7528"),(0,l.kt)("p",null,"\u90a3\u4e48\uff0c\u90e8\u7f72\u5b8c\u7b2c\u4e00\u4e2a\u5e94\u7528\u53c8\u8be5\u5982\u4f55\u8bbf\u95ee?"),(0,l.kt)("p",null,"Kubernetes \u4e2d\u7684 Service\uff08\u670d\u52a1\uff09 \u63d0\u4f9b\u4e86\u8fd9\u6837\u7684\u4e00\u4e2a\u62bd\u8c61\u5c42\uff0c\u5b83\u9009\u62e9\u5177\u5907\u67d0\u4e9b\u7279\u5f81\u7684 Pod\uff08\u5bb9\u5668\u7ec4\uff09\u5e76\u4e3a\u5b83\u4eec\u5b9a\u4e49\u4e00\u4e2a\u8bbf\u95ee\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,"\u5728\u521b\u5efaService\u7684\u65f6\u5019\uff0c\u901a\u8fc7\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 spec.type \u5b57\u6bb5\u7684\u503c\uff0c\u53ef\u4ee5\u4ee5\u4e0d\u540c\u65b9\u5f0f\u5411\u5916\u90e8\u66b4\u9732\u5e94\u7528\u7a0b\u5e8f\uff0c\u8fd9\u91cc\u4ecb\u7ecd\u5e38\u7528\u76843\u79cd\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ClusterIP(\u9ed8\u8ba4): \u96c6\u7fa4\u5185\u90e8\u53ef\u8bbf\u95ee\nNodePort: NAT\u65b9\u5f0f,\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee\u96c6\u7fa4\u4e2d\u4efb\u610f\u8282\u70b9+\u7aef\u53e3\u53f7\u7684\u65b9\u5f0f\u8bbf\u95ee\u670d\u52a1 <NodeIP>:<NodePort>,\u6b64\u65f6ClusterIP\u7684\u8bbf\u95ee\u65b9\u5f0f\u4ecd\u7136\u53ef\u7528\u3002\nLoadBalancer: \u8d1f\u8f7d\u5747\u8861(\u4f9d\u8d56\u4e91\u8bbf\u95ee)\u3002\u6b64\u65f6 ClusterIP \u548c NodePort \u7684\u8bbf\u95ee\u65b9\u5f0f\u4ecd\u7136\u53ef\u7528\u3002\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ClusterIP\u65b9\u5f0f",src:t(68749).Z,width:"2132",height:"1162"}),"\n",(0,l.kt)("img",{alt:"NodePort\u65b9\u5f0f",src:t(74683).Z,width:"2072",height:"1498"}),"\n",(0,l.kt)("img",{alt:"LoadBalancer\u65b9\u5f0f",src:t(24214).Z,width:"2114",height:"1526"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl explain svc\n\n# https://sh.ysicing.me/k8s/demo/svc.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: demo-service    #Service \u7684\u540d\u79f0\n  labels:       #Service \u81ea\u5df1\u7684\u6807\u7b7e\n    app: demo   #\u4e3a\u8be5 Service \u8bbe\u7f6e key \u4e3a app\uff0cvalue \u4e3a demo \u7684\u6807\u7b7e\nspec:       #\u8fd9\u662f\u5173\u4e8e\u8be5 Service \u7684\u5b9a\u4e49\uff0c\u63cf\u8ff0\u4e86 Service \u5982\u4f55\u9009\u62e9 Pod\uff0c\u5982\u4f55\u88ab\u8bbf\u95ee\n  selector:     #\u6807\u7b7e\u9009\u62e9\u5668\n    app: demo   #\u9009\u62e9\u5305\u542b\u6807\u7b7e app:demo \u7684 Pod\n  ports:\n  - name: demo-port #\u7aef\u53e3\u7684\u540d\u5b57\n    protocol: TCP       #\u534f\u8bae\u7c7b\u578b TCP/UDP\n    port: 80            #\u96c6\u7fa4\u5185\u7684\u5176\u4ed6\u5bb9\u5668\u7ec4\u53ef\u901a\u8fc7 80 \u7aef\u53e3\u8bbf\u95ee Service\n    nodePort: 32600   #\u901a\u8fc7\u4efb\u610f\u8282\u70b9\u7684 32600 \u7aef\u53e3\u8bbf\u95ee Service\n    targetPort: 80  #\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u5339\u914d Pod \u7684 80 \u7aef\u53e3\n  type: NodePort    #Serive\u7684\u7c7b\u578b\uff0cClusterIP/NodePort/LoaderBalancer\n")),(0,l.kt)("p",null,"\u751f\u6548"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl apply -f https://sh.ysicing.me/k8s/demo/svc.yaml\nservice/demo-service created\n")),(0,l.kt)("p",null,"\u67e5\u770bservice\uff0c\u901a\u8fc7\u4e4b\u524d\u7684\u6587\u6863"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'kubectl get svc -l app=demo\nNAME           TYPE       CLUSTER-IP    EXTERNAL-IP   PORT(S)        AGE\ndemo-service   NodePort   10.96.37.87   <none>        80:32600/TCP   55s\n\n---\n\nkubectl describe svc/demo-service\n\nName:                     demo-service\nNamespace:                default\nLabels:                   app=demo\nAnnotations:              kubectl.kubernetes.io/last-applied-configuration:\n                            {"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"app":"demo"},"name":"demo-service","namespace":"default"},"spe...\nSelector:                 app=demo\nType:                     NodePort\nIP:                       10.96.37.87\nPort:                     demo-port  80/TCP\nTargetPort:               80/TCP\nNodePort:                 demo-port  32600/TCP\nEndpoints:                172.16.219.5:80\nSession Affinity:         None\nExternal Traffic Policy:  Cluster\nEvents:                   <none>\n')),(0,l.kt)("p",null,"\u6d4b\u8bd5\u670d\u52a1\u8bbf\u95ee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# \u5728\u96c6\u7fa4\u8282\u70b9\nroot@k8s1:~# curl 10.96.37.87\n{"hostname":"demo-deployment-59cd96d4d5-cjjwr","ip":{"eth0":"172.16.219.5/32","lo":"127.0.0.1/8"}}\nroot@k8s1:~# curl 172.16.219.5\n{"hostname":"demo-deployment-59cd96d4d5-cjjwr","ip":{"eth0":"172.16.219.5/32","lo":"127.0.0.1/8"}}\nroot@k8s1:~# curl 192.168.100.101:32600\n{"hostname":"demo-deployment-59cd96d4d5-cjjwr","ip":{"eth0":"172.16.219.5/32","lo":"127.0.0.1/8"}}\nroot@k8s1:~# curl 192.168.100.102:32600\n{"hostname":"demo-deployment-59cd96d4d5-cjjwr","ip":{"eth0":"172.16.219.5/32","lo":"127.0.0.1/8"}}\n')),(0,l.kt)("p",null,"\u90a3\u4e48\u95ee\u9898\u6765\u4e86\uff0c\u5982\u679c\u60f3\u901a\u8fc7clusterip\u65b9\u5f0f\u63d0\u4f9b\u5bf9\u5916\u670d\u52a1\uff0c\u8be5\u600e\u4e48\u505a\uff1f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# https://sh.ysicing.me/k8s/demo/ing.yaml\napiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  labels:\n    app: demo\n  name: demo-ingress # ingress\u540d\n  namespace: default\nspec:\n  rules:\n    - host: godemo.slb.k7s.xyz # \u57df\u540d\n      http:\n        paths:\n          - backend:\n              serviceName: demo-service # godemo\u7684 service\u540d\n              servicePort: demo-port # godemo\u7684service\u5b9a\u4e49\u7684port\n            path: / #\u8def\u5f84\n")),(0,l.kt)("p",null,"\u751f\u6548"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl apply -f https://sh.ysicing.me/k8s/demo/ing.yaml\ningress.networking.k8s.io/demo-ingress created\n\nkubectl get ing\nNAME           HOSTS                ADDRESS   PORTS   AGE\ndemo-ingress   godemo.slb.k7s.xyz             80      91s\n")),(0,l.kt)("p",null,"\u9a8c\u8bc1ingress"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl godemo.slb.k7s.xyz      \n{"hostname":"demo-deployment-59cd96d4d5-cjjwr","ip":{"eth0":"172.16.219.5/32","lo":"127.0.0.1/8"}}\n')),(0,l.kt)("p",null,"\u8fd9\u65f6\u5019\u6d41\u91cf\u589e\u52a0\uff0c\u600e\u4e48\u5feb\u901f\u4f38\u7f29\u5e94\u7528\u3002"),(0,l.kt)("h3",{id:"\u4f38\u7f29\u5e94\u7528"},"\u4f38\u7f29\u5e94\u7528"),(0,l.kt)("p",null,"\u4f38\u7f29 \u7684\u5b9e\u73b0\u53ef\u4ee5\u901a\u8fc7\u66f4\u6539 deploy.yaml \u6587\u4ef6\u4e2d\u90e8\u7f72\u7684 replicas\uff08\u526f\u672c\u6570\uff09\u6765\u5b8c\u6210"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# replicas: 1 ---\x3e replicas: 4\n# \u6539\u5b8c\u751f\u6548\nkubectl apply -f https://sh.ysicing.me/k8s/demo/deploy2.yaml\ndeployment.apps/demo-deployment configured\n\n# \u67e5\u770bpod\nkubectl get pods -l app=demo\nNAME                               READY   STATUS    RESTARTS   AGE\ndemo-deployment-59cd96d4d5-78v28   1/1     Running   0          16s\ndemo-deployment-59cd96d4d5-cjjwr   1/1     Running   0          15m\ndemo-deployment-59cd96d4d5-mn7r8   1/1     Running   0          16s\ndemo-deployment-59cd96d4d5-mvxk2   1/1     Running   0          16s\n\n# \u4fee\u6539\u4e86 Deployment \u7684 replicas \u4e3a 4 \u540e\uff0cKubernetes \u53c8\u4e3a\u8be5 Deployment \u521b\u5efa\u4e86 3 \u65b0\u7684 Pod\uff0c\u8fd9 4 \u4e2a Pod \u6709\u76f8\u540c\u7684\u6807\u7b7e\u3002\u56e0\u6b64nginx Service \u901a\u8fc7\u6807\u7b7e\u9009\u62e9\u5668\u4e0e\u65b0\u7684 Pod\u5efa\u7acb\u4e86\u5bf9\u5e94\u5173\u7cfb\uff0c\u5c06\u8bbf\u95ee\u6d41\u91cf\u901a\u8fc7\u8d1f\u8f7d\u5747\u8861\u5728 4 \u4e2a Pod \u4e4b\u95f4\u8fdb\u884c\u8f6c\u53d1\n\nName:                     demo-service\nNamespace:                default\nLabels:                   app=demo\nAnnotations:              kubectl.kubernetes.io/last-applied-configuration:\n                            {"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"app":"demo"},"name":"demo-service","namespace":"default"},"spe...\nSelector:                 app=demo\nType:                     NodePort\nIP:                       10.96.37.87\nPort:                     demo-port  80/TCP\nTargetPort:               80/TCP\nNodePort:                 demo-port  32600/TCP\nEndpoints:                172.16.109.71:80,172.16.109.72:80,172.16.219.5:80 + 1 more...\nSession Affinity:         None\nExternal Traffic Policy:  Cluster\nEvents:                   <none>\n')),(0,l.kt)("p",null,"\u9a8c\u8bc1\u6548\u679c,\u6d41\u91cf\u662f\u8d1f\u8f7d\u5230\u540e\u7aef\u4e0d\u540cpod\u4e0a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'root@k8s1:~# curl godemo.slb.k7s.xyz\n{"hostname":"demo-deployment-59cd96d4d5-mn7r8","ip":{"eth0":"172.16.109.71/32","lo":"127.0.0.1/8"}}\nroot@k8s1:~# curl godemo.slb.k7s.xyz\n{"hostname":"demo-deployment-59cd96d4d5-cjjwr","ip":{"eth0":"172.16.219.5/32","lo":"127.0.0.1/8"}}\nroot@k8s1:~# curl godemo.slb.k7s.xyz\n{"hostname":"demo-deployment-59cd96d4d5-78v28","ip":{"eth0":"172.16.219.6/32","lo":"127.0.0.1/8"}}\n')),(0,l.kt)("h3",{id:"\u6700\u540e"},"\u6700\u540e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"\u9648\u8ff0\u5f0f\uff1a\n    kubectl create -f xx.yaml\n        \n\u7533\u660e\u5f0f\uff08\u5efa\u8bae\u4f7f\u7528\uff09\uff1a\n    kubectl apply -f xx.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"pod\u5bb9\u5668\u5982\u679c\u672a\u53d1\u751f\u8c03\u5ea6\uff0c\u91cd\u542f\u5bb9\u5668ip\u662f\u4e0d\u4f1a\u6539\u53d8\u7684")),(0,l.kt)("p",null,"\u53e6\u5916\u9664\u4e86Service\u8fd9\u79cd\u7f51\u7edc\uff0c\u8fd8\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"hostPort"),",",(0,l.kt)("inlineCode",{parentName:"p"},"hostNetwork")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hostPort\uff1a\u76f4\u63a5\u5c06\u5bb9\u5668\u7684\u7aef\u53e3\u4e0e\u6240\u8c03\u5ea6\u7684\u8282\u70b9\u4e0a\u7684\u7aef\u53e3\u8def\u7531\uff0c\u8fd9\u6837\u53ef\u4ee5\u901a\u8fc7\u5bbf\u4e3b\u673a\u7684IP\u52a0\u4e0a\u6765\u8bbf\u95eePod\u4e86, Ingress\u5c31\u662f\u8fd9\u6837\u7684\nhostNetwork\uff1a\u5171\u4eab\u5bbf\u4e3b\u673a\u7684\u7f51\u7edc\u540d\u79f0\u7a7a\u95f4\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u53ef\u4ee5\u8fd9\u4e48\u6d4b\u8bd5\u4f7f\u7528hostPort"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'kubectl apply -f https://sh.ysicing.me/k8s/demo/deploy3.yaml\nkubectl get pods  -l app=demo -o wide\nNAME                               READY   STATUS    RESTARTS   AGE    IP              NODE   NOMINATED NODE   READINESS GATES\ndemo-deployment-6c5664f4d6-s6w8v   1/1     Running   0          112s   172.16.109.68   k8s2   <none>           <none>\n\ncurl 666.slb.k7s.xyz:28080\n{"hostname":"demo-deployment-6c5664f4d6-s6w8v","ip":{"eth0":"172.16.109.68/32","lo":"127.0.0.1/8"}}\n')))}u.isMDXComponent=!0},74683:function(e,n,t){n.Z=t.p+"assets/images/NodePort-03f53eb1a5a5391bc74f3be6c7b5070d.png"},68749:function(e,n,t){n.Z=t.p+"assets/images/clusterip-76d087794a416ce22ae33af491a95c3a.png"},24214:function(e,n,t){n.Z=t.p+"assets/images/lb-a636a1367ef5f755229b5d551c5d3755.png"}}]);