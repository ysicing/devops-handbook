"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2312],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return t?a.createElement(k,o(o({ref:n},p),{},{components:t})):a.createElement(k,o({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13504:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),o=["components"],i={title:"\u914d\u7f6eExternal DNS\u9644\u52a0\u7ec4\u4ef6\u652f\u6301DNSPod",date:new Date("2022-05-25T14:55:18.000Z"),description:"eks\u96c6\u7fa4\u57fa\u4e8ednspod\u914d\u7f6eExternal DNS",tags:["k8s","eks","dns","dnspod"]},l=void 0,c={permalink:"/en/posts/eks-dnspod-external-dns",source:"@site/blog/posts/eks-dnspod-external-dns.md",title:"\u914d\u7f6eExternal DNS\u9644\u52a0\u7ec4\u4ef6\u652f\u6301DNSPod",description:"eks\u96c6\u7fa4\u57fa\u4e8ednspod\u914d\u7f6eExternal DNS",date:"2022-05-25T14:55:18.000Z",formattedDate:"May 25, 2022",tags:[{label:"k8s",permalink:"/en/tags/k-8-s"},{label:"eks",permalink:"/en/tags/eks"},{label:"dns",permalink:"/en/tags/dns"},{label:"dnspod",permalink:"/en/tags/dnspod"}],readingTime:1.5066666666666666,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u914d\u7f6eExternal DNS\u9644\u52a0\u7ec4\u4ef6\u652f\u6301DNSPod",date:"2022-05-25T14:55:18.000Z",description:"eks\u96c6\u7fa4\u57fa\u4e8ednspod\u914d\u7f6eExternal DNS",tags:["k8s","eks","dns","dnspod"]},prevItem:{title:"eks\u96c6\u7fa4\u6dfb\u52a0\u7ba1\u7406\u5458",permalink:"/en/posts/eks-add-master"},nextItem:{title:"\u901a\u8fc7eksctl\u521b\u5efaeks\u96c6\u7fa4",permalink:"/en/posts/eks-eksctl-deploy"}},p={authorsImageUrls:[]},m=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2}],u={toc:m},d="wrapper";function k(e){var n=e.components,t=(0,r.Z)(e,o);return(0,s.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u6bd4\u8f83\u7b80\u5355\u76f4\u63a5\u4e0a\u4ee3\u7801"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\u793a\u4f8b\u57df\u540d",(0,s.kt)("inlineCode",{parentName:"p"},"example.com"))),(0,s.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# e-dns.yaml\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: external-dns\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: external-dns\nrules:\n- apiGroups: [""]\n  resources: ["services","endpoints","pods"]\n  verbs: ["get","watch","list"]\n- apiGroups: ["extensions","networking.k8s.io"]\n  resources: ["ingresses"]\n  verbs: ["get","watch","list"]\n- apiGroups: [""]\n  resources: ["nodes"]\n  verbs: ["list"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: external-dns-viewer\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: external-dns\nsubjects:\n- kind: ServiceAccount\n  name: external-dns\n  namespace: kube-system\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: external-dns\ndata:\n  tencent-cloud.json: |\n    {\n      "regionId": "ap-shanghai",\n      "secretId": "...\u81ea\u884c\u66ff\u6362...",\n      "secretKey": "...\u81ea\u884c\u66ff\u6362...",\n      "internetEndpoint": true\n    }\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: external-dns\nspec:\n  strategy:\n    type: Recreate\n  selector:\n    matchLabels:\n      app: external-dns\n  template:\n    metadata:\n      labels:\n        app: external-dns\n    spec:\n      containers:\n      - args:\n        - --source=service\n        - --source=ingress\n        - --domain-filter=example.com # \u5c06\u4f7f ExternalDNS \u4ec5\u770b\u5230\u4e0e\u63d0\u4f9b\u7684\u57df\u5339\u914d\u7684\u6258\u7ba1\u533a\u57df\uff0c\u7701\u7565\u4ee5\u5904\u7406\u6240\u6709\u53ef\u7528\u7684\u6258\u7ba1\u533a\u57df\n        - --provider=tencentcloud\n        - --policy=sync # \u8bbe\u7f6e\u201cupsert-only\u201d\u5c06\u963b\u6b62 ExternalDNS \u5220\u9664\u4efb\u4f55\u8bb0\u5f55\n        - --tencent-cloud-zone-type=public # \u4ec5\u7ba1\u7406\u79c1\u6709\u6258\u7ba1\u533a\u57df\u3002\u8bbe\u7f6e\u201cpublic\u201d\u4ee5\u4f7f\u7528\u516c\u7f51 DNS \u670d\u52a1\n        - --tencent-cloud-config-file=/etc/kubernetes/tencent-cloud.json\n        - --log-level=debug\n        image: ysicing/dnspod-external-dns:v1.1.0\n        imagePullPolicy: Always\n        name: external-dns\n        resources:\n          limits:\n            cpu: 500m\n            memory: 512Mi\n          requests:\n            cpu: 100m\n            memory: 128Mi\n        terminationMessagePath: /dev/termination-log\n        terminationMessagePolicy: File\n        volumeMounts:\n        - mountPath: /etc/kubernetes\n          name: config-volume\n          readOnly: true\n      dnsPolicy: ClusterFirst\n      restartPolicy: Always\n      schedulerName: default-scheduler\n      securityContext: {}\n      serviceAccount: external-dns\n      serviceAccountName: external-dns\n      terminationGracePeriodSeconds: 30\n      volumes:\n      - configMap:\n          defaultMode: 420\n          items:\n          - key: tencent-cloud.json\n            path: tencent-cloud.json\n          name: external-dns\n        name: config-volume\n')),(0,s.kt)("p",null,"\u751f\u6548"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f e-dns.yaml -n kube-system\n")),(0,s.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: whoami\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: whoami\n  replicas: 5\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: whoami\n    spec:\n      containers:\n      - image: ysicing/whoami:2022\n        imagePullPolicy: Always\n        name: whoami\n        resources:\n          requests:\n            cpu: 100m\n            memory: 100Mi\n          limits:\n            cpu: 100m\n            memory: 100Mi\n        ports:\n        - containerPort: 32379\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: whoami\nspec:\n  ports:\n    - port: 80\n      targetPort: 32379\n      protocol: TCP\n  selector:\n    app.kubernetes.io/name: whoami\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: whoami-01\n  annotations:\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/target-type: ip\n    alb.ingress.kubernetes.io/group.name: whoami\n    alb.ingress.kubernetes.io/listen-ports: \'[{"HTTP": 80},{"HTTPS": 443}]\'\n    # alb.ingress.kubernetes.io/certificate-arn: arn:aws:acm:us-east-1:<\u6839ID>:certificate/<cid>\n    external-dns.alpha.kubernetes.io/hostname: 02.whoami.example.com\nspec:\n  ingressClassName: alb\n  rules:\n    - host: 02.whoami.example.com\n      http:\n        paths:\n        - path: /\n          pathType: Prefix\n          backend:\n            service:\n              name: whoami\n              port:\n                number: 80\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: whoami-02\n  annotations:\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/target-type: ip\n    alb.ingress.kubernetes.io/group.name: whoami\n    alb.ingress.kubernetes.io/listen-ports: \'[{"HTTP": 80},{"HTTPS": 443}]\'\n    external-dns.alpha.kubernetes.io/hostname: 01.whoami.example.com\n    # alb.ingress.kubernetes.io/certificate-arn: arn:aws:acm:us-east-1:<\u6839ID>:certificate/<cid>\nspec:\n  ingressClassName: alb\n  rules:\n    - host: 01.whoami.example.com\n      http:\n        paths:\n        - path: /\n          pathType: Prefix\n          backend:\n            service:\n              name: whoami\n              port:\n                number: 80\n')))}k.isMDXComponent=!0}}]);