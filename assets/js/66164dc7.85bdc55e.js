"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2322],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||p[d]||s;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6965:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=n(80102),s=(n(67294),n(3905)),l=["components"],o={title:"\u521b\u5efaeks\u96c6\u7fa4",tags:["k8s","eks","aws"]},i=void 0,u={unversionedId:"aws/eks/install",id:"aws/eks/install",title:"\u521b\u5efaeks\u96c6\u7fa4",description:"\u6240\u6709\u64cd\u4f5c\u5747\u5728\u5883\u5916\u73af\u5883\u64cd\u4f5c\uff0c\u907f\u514d\u8c03\u7528aws api\u8d85\u65f6\u5bfc\u81f4\u5931\u8d25\u3002",source:"@site/docs/aws/eks/install.md",sourceDirName:"aws/eks",slug:"/aws/eks/install",permalink:"/docs/aws/eks/install",draft:!1,tags:[{label:"k8s",permalink:"/docs/tags/k-8-s"},{label:"eks",permalink:"/docs/tags/eks"},{label:"aws",permalink:"/docs/tags/aws"}],version:"current",lastUpdatedBy:"ysicing",lastUpdatedAt:1666968112,formattedLastUpdatedAt:"2022\u5e7410\u670828\u65e5",frontMatter:{title:"\u521b\u5efaeks\u96c6\u7fa4",tags:["k8s","eks","aws"]},sidebar:"tutorialSidebar",previous:{title:"eks\u96c6\u7fa4\u6dfb\u52a0\u7ba1\u7406\u5458",permalink:"/docs/aws/eks/eks-add-master"},next:{title:"\u5236\u4f5cwin11\u542f\u52a8\u76d8",permalink:"/docs/macOS/make-windows-bootable-iso"}},c={},p=[{value:"\u751f\u6210aws secrets",id:"\u751f\u6210aws-secrets",level:2},{value:"\u5b89\u88c5 aws-iam-authenticator",id:"\u5b89\u88c5-aws-iam-authenticator",level:2},{value:"\u5b89\u88c5aws",id:"\u5b89\u88c5aws",level:2},{value:"\u5b89\u88c5kubectl\u547d\u4ee4",id:"\u5b89\u88c5kubectl\u547d\u4ee4",level:2},{value:"\u5b89\u88c5helm",id:"\u5b89\u88c5helm",level:2},{value:"\u5b89\u88c5eksctl",id:"\u5b89\u88c5eksctl",level:2},{value:"\u521b\u5efaaws eks\u96c6\u7fa4",id:"\u521b\u5efaaws-eks\u96c6\u7fa4",level:2},{value:"\u9500\u6bc1\u96c6\u7fa4",id:"\u9500\u6bc1\u96c6\u7fa4",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6240\u6709\u64cd\u4f5c\u5747\u5728\u5883\u5916\u73af\u5883\u64cd\u4f5c\uff0c\u907f\u514d\u8c03\u7528aws api\u8d85\u65f6\u5bfc\u81f4\u5931\u8d25\u3002")),(0,s.kt)("h2",{id:"\u751f\u6210aws-secrets"},"\u751f\u6210aws secrets"),(0,s.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5b50\u8d26\u53f7\u751f\u6210secrets, \u7ed9\u4e88\u7ba1\u7406\u5458\u6743\u9650"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.aws/credentials\n\n[default]\naws_access_key_id=<id>\naws_secret_access_key=<key>\n")),(0,s.kt)("h2",{id:"\u5b89\u88c5-aws-iam-authenticator"},"\u5b89\u88c5 aws-iam-authenticator"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e0b\u8f7daws-iam-authenticator\ncurl -o aws-iam-authenticator https://s3.us-west-2.amazonaws.com/amazon-eks/1.21.2/2021-07-05/bin/linux/amd64/aws-iam-authenticator\n# \u4e0b\u8f7d\u6821\u9a8c\u6587\u4ef6\ncurl -o aws-iam-authenticator.sha256 https://s3.us-west-2.amazonaws.com/amazon-eks/1.21.2/2021-07-05/bin/linux/amd64/aws-iam-authenticator.sha256\n# \u6821\u9a8c\nopenssl sha1 -sha256 aws-iam-authenticator\n# \u5b89\u88c5\u5230path\u76ee\u5f55\u4e0b\nmv aws-iam-authenticator /usr/local/bin/aws-iam-authenticator\nchmod +x /usr/local/bin/aws-iam-authenticator\n# \u6d4b\u8bd5\naws-iam-authenticator --help\n")),(0,s.kt)("h2",{id:"\u5b89\u88c5aws"},"\u5b89\u88c5aws"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\n./aws/install\n')),(0,s.kt)("h2",{id:"\u5b89\u88c5kubectl\u547d\u4ee4"},"\u5b89\u88c5kubectl\u547d\u4ee4"),(0,s.kt)("p",null,"\u5b89\u88c5\u96c6\u7fa4\u4e2d\u4f1a\u8c03\u7528kubectl\u547d\u4ee4"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ece\u5b98\u65b9\u4e0b\u8f7d\nwget https://dl.k8s.io/v1.22.12/kubernetes-client-linux-amd64.tar.gz\ntar xzvfC kubernetes-client-linux-amd64.tar.gz /tmp\nmv /tmp/kubernetes/client/bin/kubectl /usr/local/bin\nrm -rf kubernetes-client-linux-amd64.tar.gz\nrm -rf /tmp/kubernetes\n# \u6216\u8005\u4eceaws\u4e0b\u8f7d\uff0c\u4e24\u8005\u5dee\u522b\u4e0d\u5927\uff0c\u6700\u597d\u4e0d\u8981\u8de8\u591a\u4e2a\u7248\u672c\ncurl -o /usr/local/bin/kubectl https://s3.us-west-2.amazonaws.com/amazon-eks/1.22.6/2022-03-09/bin/linux/amd64/kubectl\nchmod +x /usr/local/bin/kubectl\n# \u9a8c\u8bc1\nkubectl version | grep Client | cut -d : -f 5\n")),(0,s.kt)("h2",{id:"\u5b89\u88c5helm"},"\u5b89\u88c5helm"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3\nchmod 700 get_helm.sh\n./get_helm.sh\n")),(0,s.kt)("h2",{id:"\u5b89\u88c5eksctl"},"\u5b89\u88c5eksctl"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp\n mv /tmp/eksctl /usr/local/bin\n# \u6d4b\u8bd5\neksctl version\n0.108.0\n')),(0,s.kt)("h2",{id:"\u521b\u5efaaws-eks\u96c6\u7fa4"},"\u521b\u5efaaws eks\u96c6\u7fa4"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u4ec5\u4f9b\u53c2\u8003")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\n\nmetadata:\n  # eks\u96c6\u7fa4\u540d\n  name: demo-us-eks-prod-01\n  # eks\u96c6\u7fa4\u6240\u5728region\n  region: us-east-1\n  # eks \u7248\u672c\n  # version: "1.22"\n\n# \u5b9a\u4e49ipv4, \u652f\u6301ipv6\n# kubernetesNetworkConfig:\n#   ipFamily: IPv4\n\nvpc:\n  # \u6307\u5b9a\u5b50\u7f51\n  cidr: 10.10.0.0/16\n  # \u9650\u5236public api\u8bbf\u95ee\n  # publicAccessCIDRs: ["1.2.3.4/32"]\n  # \u5f00\u542fapi\u8bbf\u95ee\n  clusterEndpoints:\n    publicAccess: true\n    privateAccess: true\n  # nat gateway\n  nat:\n    gateway: Single  #HighlyAvailable\n\n# \u96c6\u7fa4\u63d2\u4ef6\naddons:\n  - name: vpc-cni\n  - name: coredns\n  - name: kube-proxy\n\niam:\n  withOIDC: true\n\n# \u5168\u5c40\u53ef\u7528\u533a\uff0c\u4e5f\u53ef\u4ee5\u9488\u5bf9\u67d0\u4e2anodegroup\u5355\u72ec\u8bbe\u7f6e\navailabilityZones: ["us-east-1a", "us-east-1b"]\n\n# \u8282\u70b9\u6c60\nnodeGroups:\n    # \u7cfb\u7edf\u8282\u70b9\n  - name: system-1-a    # worker nodegroup\u540d\u5b57\n    labels: { nodetype: system }  # worker \u8282\u70b9\u7684labels\n    instanceType: c6g.2xlarge   # \u8ba1\u5212\u4f7f\u7528\u7684EC2\u7c7b\u578b\n    minSize: 1      # autoscaling \u6700\u5c0f\u503c\n    desiredCapacity: 1  # autoscaling \u5e38\u89c4\u503c\n    maxSize: 2 # autoscaling \u6700\u5927\u503c\n    volumeSize: 200 ##\u7cfb\u7edf\u7cfb\u7edf\u76d8\u5927\u5c0f\n    volumeType: gp3 ##\u7cfb\u7edf\u76d8\u7c7b\u578b\n    # availabilityZones: ["us-east-1a", "us-east-1b"] ##nodegroup\u6240\u5728AZ\n    privateNetworking: true ##\u662f\u5426\u4f7f\u7528\u79c1\u6709\u7f51\u7edc\n    amiFamily: AmazonLinux2\n    containerRuntime: containerd\n    securityGroups: ##\u662f\u5426\u4f7f\u7528\u81ea\u5b9a\u4e49\u5b89\u5168\u7ec4\n      withShared: true\n      withLocal: true\n      # attachIDs: ["sg-xxxx"]   ##\u81ea\u5b9a\u4e49\u5b89\u5168\u7ec4\u7684\u540d\u5b57\u521b\u5efa\u4e00\u4e2a\u9ed8\u8ba4\u7684\u5b89\u5168\u7ec4\n    ssh:\n      publicKeyPath: /root/.ssh/id_rsa.pub  ##\u53ef\u4ee5ssh\u5230worker\u7684key\u540d\u5b57\n    tags:\n      \'Project\': \'Demo\' ##\u5b9a\u4e49\u4e00\u4e2atag\uff0c\u8ba1\u8d39\u4f7f\u7528\n      \'k8s.io/cluster-autoscaler/enabled\': \'true\'   ##\u5b9a\u4e49\u81ea\u52a8\u6269\u5bb9\u7684tag\n      \'k8s.io/cluster-autoscaler/nuclearport-ohio-eks-prod\': \'owned\'    ##\u5b9a\u4e49\u81ea\u52a8\u6269\u5bb9\u7684tag\n    taints:\n        uessystem: "true:NoSchedule"    ## \u5b9a\u4e49\u4e2a\u6c61\u70b9\n    iam:\n      withAddonPolicies:    ##\u9009\u62e9eks\u9700\u8981\u4f7f\u7528\u7684iam\u6743\u9650\n        #imageBuilder: true\n        autoScaler: true\n        externalDNS: true\n        certManager: true\n        #appMesh: true\n        ebs: true\n        #fsx: true\n        efs: true\n        albIngress: true\n        #xRay: true\n        cloudWatch: true\n\n # worker\u8282\u70b9(\u4e00\u4e2a\u4ece0\u5f00\u59cb\u7684\u5f39\u6027\u96c6\u7fa4)\n  - name: worker-1-a    ##worker nodegroup\u540d\u5b57\n    labels:\n      nodetype: worker\n    instanceType: c6g.2xlarge   ##\u8ba1\u5212\u4f7f\u7528\u7684EC2\u7c7b\u578b\n    minSize: 0      ##autoscaling \u6700\u5c0f\u503c\n    desiredCapacity: 0  ##autoscaling \u5e38\u89c4\u503c\n    maxSize: 5 ##autoscaling \u6700\u5927\u503c\n    volumeSize: 200 ##\u7cfb\u7edf\u7cfb\u7edf\u76d8\u5927\u5c0f\n    volumeType: gp3 ##\u7cfb\u7edf\u76d8\u7c7b\u578b\n    privateNetworking: true\n    amiFamily: AmazonLinux2\n    containerRuntime: containerd\n    securityGroups:\n      withShared: true\n      withLocal: true\n      # attachIDs: ["sg-xxxx"]\n    ssh:\n      # publicKeyName: \'xxxxx\'  ##\u53ef\u4ee5ssh\u5230worker\u7684key\u540d\u5b57\n      publicKeyPath: /root/.ssh/id_rsa.pub\n    tags:\n      \'Project\': \'Demo\' ##tag\n      \'k8s.io/cluster-autoscaler/enabled\': \'true\'\n      \'k8s.io/cluster-autoscaler/nuclearport-ohio-eks-prod\': \'owned\'\n      k8s.io/cluster-autoscaler/node-template/label/nodetype: worker\n      k8s.io/cluster-autoscaler/node-template/taint/feaster: "true:NoSchedule"\n    taints:\n      useworker: "true:NoSchedule"\n    iam:\n      withAddonPolicies:\n        #imageBuilder: true\n        autoScaler: true\n        externalDNS: true\n        certManager: true\n        #appMesh: true\n        ebs: true\n        #fsx: true\n        efs: true\n        albIngress: true\n        #xRay: true\n        cloudWatch: true\n\n# \u65e5\u5fd7\u6536\u96c6\u7ec4\u4ef6\uff0c\u7c7b\u578bcls\u65e5\u5fd7\u6536\u96c6\ncloudWatch:\n  clusterLogging:\n    # enable specific types of cluster control plane logs\n    enableTypes: ["audit", "authenticator", "controllerManager"]\n    # all supported types: "api", "audit", "authenticator", "controllerManager", "scheduler"\n    # supported special values: "*" and "all"\n')),(0,s.kt)("p",null,"\u521b\u5efa\u96c6\u7fa4"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5927\u6982\u8017\u65f630-40\u5206\u949f\neksctl create cluster -f demo.yaml --auto-kubeconfig\n")),(0,s.kt)("h2",{id:"\u9500\u6bc1\u96c6\u7fa4"},"\u9500\u6bc1\u96c6\u7fa4"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"eksctl delete cluster -f demo.yaml --force\n")))}d.isMDXComponent=!0}}]);