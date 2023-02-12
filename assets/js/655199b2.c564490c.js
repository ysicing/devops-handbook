"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3772],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2915:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),o=["components"],s={title:"\u914d\u7f6eAWS Load Balancer Controller \u9644\u52a0\u7ec4\u4ef6",tags:["k8s","eks","aws"]},c=void 0,i={unversionedId:"aws/eks/eks-add-alb",id:"aws/eks/eks-add-alb",title:"\u914d\u7f6eAWS Load Balancer Controller \u9644\u52a0\u7ec4\u4ef6",description:"AWS Load Balancer Controller \u7ba1\u7406\u9002\u7528\u4e8e Kubernetes \u96c6\u7fa4\u7684 AWS \u5f39\u6027\u8d1f\u8f7d\u5747\u8861\u5668",source:"@site/docs/aws/eks/eks-add-alb.md",sourceDirName:"aws/eks",slug:"/aws/eks/eks-add-alb",permalink:"/docs/aws/eks/eks-add-alb",draft:!1,tags:[{label:"k8s",permalink:"/docs/tags/k-8-s"},{label:"eks",permalink:"/docs/tags/eks"},{label:"aws",permalink:"/docs/tags/aws"}],version:"current",lastUpdatedBy:"ysicing",lastUpdatedAt:1676202956,formattedLastUpdatedAt:"2023\u5e742\u670812\u65e5",frontMatter:{title:"\u914d\u7f6eAWS Load Balancer Controller \u9644\u52a0\u7ec4\u4ef6",tags:["k8s","eks","aws"]},sidebar:"tutorialSidebar",previous:{title:"tke\u96c6\u7fa4\u7981\u6b62\u8c03\u5ea6\u6ce8\u610f\u4e8b\u9879",permalink:"/docs/qcloud/tke/tke-cordon-node"},next:{title:"eks\u96c6\u7fa4\u6dfb\u52a0\u7ba1\u7406\u5458",permalink:"/docs/aws/eks/eks-add-master"}},u={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u521b\u5efaIAM Policy",id:"\u521b\u5efaiam-policy",level:3},{value:"\u521b\u5efaIAM\u89d2\u8272",id:"\u521b\u5efaiam\u89d2\u8272",level:3},{value:"\u5b89\u88c5cert-manager",id:"\u5b89\u88c5cert-manager",level:3},{value:"\u5b89\u88c5\u63a7\u5236\u5668",id:"\u5b89\u88c5\u63a7\u5236\u5668",level:3}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"AWS Load Balancer Controller \u7ba1\u7406\u9002\u7528\u4e8e Kubernetes \u96c6\u7fa4\u7684 AWS \u5f39\u6027\u8d1f\u8f7d\u5747\u8861\u5668"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5e94\u7528\u8d1f\u8f7d\u5747\u8861ALB"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u7f51\u7edc\u8d1f\u8f7d\u5747\u8861NLB")),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u96c6\u7fa4\u540d: ",(0,l.kt)("inlineCode",{parentName:"p"},"demo-us-eks-prod-01"),", \u9700\u8981\u81ea\u884c\u66ff\u6362")),(0,l.kt)("h3",{id:"\u521b\u5efaiam-policy"},"\u521b\u5efaIAM Policy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o iam_policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.3/docs/install/iam_policy.json\n\naws iam create-policy \\\n    --policy-name AWSLoadBalancerControllerIAMPolicy \\\n    --policy-document file://iam_policy.json\n")),(0,l.kt)("h3",{id:"\u521b\u5efaiam\u89d2\u8272"},"\u521b\u5efaIAM\u89d2\u8272"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'eksctl create iamserviceaccount \\\n  --cluster=demo-us-eks-prod-01 \\\n  --namespace=kube-system \\\n  --name=aws-load-balancer-controller \\\n  --role-name "AmazonEKSLoadBalancerControllerRole" \\\n  --attach-policy-arn=arn:aws:iam::<\u6839ID>:policy/AWSLoadBalancerControllerIAMPolicy \\\n  --approve\n')),(0,l.kt)("h3",{id:"\u5b89\u88c5cert-manager"},"\u5b89\u88c5cert-manager"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply \\\n    --validate=false \\\n    -f https://github.com/jetstack/cert-manager/releases/download/v1.5.4/cert-manager.yaml\n")),(0,l.kt)("h3",{id:"\u5b89\u88c5\u63a7\u5236\u5668"},"\u5b89\u88c5\u63a7\u5236\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -Lo v2_4_3_full.yaml https://github.com/kubernetes-sigs/aws-load-balancer-controller/releases/download/v2.4.3/v2_4_3_full.yaml\n# \u53bb\u9664\u9ed8\u8ba4\u8d26\u6237, \u4e0a\u9762\u521b\u5efa\u89d2\u8272\u65f6\u5df2\u7ecf\u751f\u6210\nsed -i.bak -e '480,488d' ./v2_4_3_full.yaml\n# \u4fee\u6539\u81ea\u5df1\u96c6\u7fa4\u540d\nsed -i.bak -e 's|your-cluster-name|demo-us-eks-prod-01|' ./v2_4_3_full.yaml\n# \u751f\u6548\nkubectl apply -f v2_4_3_full.yaml\n# \u8bbe\u7f6eingresclass\ncurl -Lo v2_4_3_ingclass.yaml https://github.com/kubernetes-sigs/aws-load-balancer-controller/releases/download/v2.4.3/v2_4_3_ingclass.yaml\nkubectl apply -f v2_4_3_ingclass.yaml\n")))}m.isMDXComponent=!0}}]);