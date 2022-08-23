"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[943],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},c=Object.keys(e);for(l=0;l<c.length;l++)t=c[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)t=c[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),s=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return l.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},o=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),o=s(t),k=a,m=o["".concat(p,".").concat(k)]||o[k]||u[k]||c;return t?l.createElement(m,r(r({ref:n},d),{},{components:t})):l.createElement(m,r({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,r=new Array(c);r[0]=o;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var s=2;s<c;s++)r[s]=t[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}o.displayName="MDXCreateElement"},67098:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var l=t(83117),a=t(80102),c=(t(67294),t(3905)),r=["components"],i={title:"k8s\u5b9e\u8df5\u4e4b\u8d44\u6e90\u7ba1\u7406\u7684\u6743\u9650\u63a7\u5236",date:new Date("2020-05-18T14:55:18.000Z"),description:"k8s\u5b9e\u8df5\u4e4b\u8d44\u6e90\u7ba1\u7406\u7684\u6743\u9650\u63a7\u5236",tags:["kubernetes"]},p=void 0,s={permalink:"/en/posts/k8s-sa",source:"@site/blog/posts/k8s-sa.md",title:"k8s\u5b9e\u8df5\u4e4b\u8d44\u6e90\u7ba1\u7406\u7684\u6743\u9650\u63a7\u5236",description:"k8s\u5b9e\u8df5\u4e4b\u8d44\u6e90\u7ba1\u7406\u7684\u6743\u9650\u63a7\u5236",date:"2020-05-18T14:55:18.000Z",formattedDate:"May 18, 2020",tags:[{label:"kubernetes",permalink:"/en/tags/kubernetes"}],readingTime:2.1533333333333333,hasTruncateMarker:!0,authors:[],frontMatter:{title:"k8s\u5b9e\u8df5\u4e4b\u8d44\u6e90\u7ba1\u7406\u7684\u6743\u9650\u63a7\u5236",date:"2020-05-18T14:55:18.000Z",description:"k8s\u5b9e\u8df5\u4e4b\u8d44\u6e90\u7ba1\u7406\u7684\u6743\u9650\u63a7\u5236",tags:["kubernetes"]},prevItem:{title:"minikube\u5b89\u88c5k8s",permalink:"/en/posts/k8s-minikube-install"},nextItem:{title:"NFS\u5b58\u50a8",permalink:"/en/posts/nfs-install-k8s"}},d={authorsImageUrls:[]},u=[{value:"k8s \u8d44\u6e90\u7ba1\u7406\u7684\u6743\u9650\u63a7\u5236",id:"k8s-\u8d44\u6e90\u7ba1\u7406\u7684\u6743\u9650\u63a7\u5236",level:2},{value:"\u521b\u5efasa",id:"\u521b\u5efasa",level:3},{value:"\u6388\u6743\u914d\u7f6e",id:"\u6388\u6743\u914d\u7f6e",level:3}],o={toc:u};function k(e){var n=e.components,t=(0,a.Z)(e,r);return(0,c.kt)("wrapper",(0,l.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"k8s-\u8d44\u6e90\u7ba1\u7406\u7684\u6743\u9650\u63a7\u5236"},"k8s \u8d44\u6e90\u7ba1\u7406\u7684\u6743\u9650\u63a7\u5236"),(0,c.kt)("p",null,"\u5728k8s\u4e2d\uff0c\u7531\u7cfb\u7edf\u81ea\u8eab\u7684\u63a5\u53e3\u6765\u521b\u5efa\u548c\u7ba1\u7406\u7684\u8d26\u53f7\u7c7b\u578b\u53ea\u6709\u4e00\u79cd\uff0c\u53eb\u505a",(0,c.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),"\u3002\n\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u67e5\u770b\u76ee\u524d\u7cfb\u7edf\u5df2\u6709\u7684",(0,c.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),"\uff0c\u7b80\u5199",(0,c.kt)("inlineCode",{parentName:"p"},"sa")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\u279c  ~ kubectl get sa\nNAME      SECRETS   AGE\ndefault   1         2d8h\n")),(0,c.kt)("p",null,"\u67e5\u770bsa\u5177\u4f53\u5b9a\u4e49"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'\u279c  ~ kubectl get sa default -o yaml\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  creationTimestamp: "2020-01-05T06:27:59Z"\n  name: default\n  namespace: default\n  resourceVersion: "428"\n  selfLink: /api/v1/namespaces/default/serviceaccounts/default\n  uid: 9881e9a3-4097-44b4-a9e3-e5a9d4e516e0\nsecrets:\n- name: default-token-8xcpl # \u5f15\u7528\u4e86\u540d\u4e3adefault-token-8xcpl\u7684secrets\n\n\u279c  ~ kubectl get secrets default-token-8xcpl  -o yaml\napiVersion: v1\ndata:\n  ca.crt: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN5akNDQWJLZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQ0FYRFRJd01ERXdOVEEyTWpjeE5Gb1lEekl4TVRneE1qRXlNRFl5TnpFMFdqQVZNUk13RVFZRApWUVFERXdwcmRXSmxjbTVsZEdWek1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBCnoyS0ttbzh2emdXWE1WR09hSy9DeWk2cGZ2T0psWUMxd1paRTdWS3IwTENFZDBQWXVKbk10NStQdVhKUkw4OFUKK2t2U0RGRm1RS3J6QUhCN0IwNGVybEwyd0NHeDZwa2FIOFBMMTJqKzdUUW5VS2doa1lHb1ZxUjNKV3NTSS9jcwo0ampGWTJyVmY3Z3pDNG9LbHlBc2VRdXFRaERPV004emtCalFYa3gyZVdnSSthRFNpOHd5SHNSNXZwK0Y4TkNOCnEreHY3bFczOERBcTB2SGlSYnBlZHVCTWpUTksyaHlYYWpyeFpWNTZxTTdnRUJWcVBjRCtUWmQySGs2SGQ2dlgKaGhTeTdUQ3lOY1kvbi9HNjRscTBUaG9JZTBWaFBncG8rU3JzRXVOVTBqWlFmRllDMDRWZlluSU0yZmxuSkY5YQpVWjkraVEza25ZR3RmSTA4cXRScjh3SURBUUFCb3lNd0lUQU9CZ05WSFE4QkFmOEVCQU1DQXFRd0R3WURWUjBUCkFRSC9CQVV3QXdFQi96QU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FRRUFOWHdQUkRLd05yMEFzMVpiN1NWWnVQeSsKMVhtbWhWS3dVUmVROXF2QjQwWU5sTVBKMVVqbUNyVmdVRmM4WldmUEhwTmZ6Z2dXTUJUbFFrZDhOK1NhTHB3bAo0bTJtMlpmTTV6Q3R2QVg2MzhHZUVPYTViVkNHcXhudUNVOWQxb2p0M2JZSkYwZGxSMy9VY3FpaDRaeEdUL0syCkJweEZ5QXBRRUZ0elhVZmE0dTBYcFBwUU1aa2txK2hkd01mZjQ3VlBma3NUazUvN2ZaK08vUXk4SElSM00wWFEKUWZyRWpIRXRwL2VSU1hENm95ZHF4R2RKL0pOWU4rKzJYU05lRm51bDFOakh2bG1IT1JpRDI2S2Rqb24vT1Y5cgplYlp0T1oxRmJPVVVFNktJRG9CWTJIK0JCWVppNkwzajJBRkpFTFozWE5tNUdlSTB0NGduWW8zSXU0SnRmZz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n  namespace: ZGVmYXVsdA==\n  token: ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkltUnBTa2RCWlZwcVMwOVdOVmxCVDJkemQySTBkRlpPVVVkRlVHOVZYMXB0VDA1Q1dXeG5UVGhhTVdjaWZRLmV5SnBjM01pT2lKcmRXSmxjbTVsZEdWekwzTmxjblpwWTJWaFkyTnZkVzUwSWl3aWEzVmlaWEp1WlhSbGN5NXBieTl6WlhKMmFXTmxZV05qYjNWdWRDOXVZVzFsYzNCaFkyVWlPaUprWldaaGRXeDBJaXdpYTNWaVpYSnVaWFJsY3k1cGJ5OXpaWEoyYVdObFlXTmpiM1Z1ZEM5elpXTnlaWFF1Ym1GdFpTSTZJbVJsWm1GMWJIUXRkRzlyWlc0dE9IaGpjR3dpTENKcmRXSmxjbTVsZEdWekxtbHZMM05sY25acFkyVmhZMk52ZFc1MEwzTmxjblpwWTJVdFlXTmpiM1Z1ZEM1dVlXMWxJam9pWkdWbVlYVnNkQ0lzSW10MVltVnlibVYwWlhNdWFXOHZjMlZ5ZG1salpXRmpZMjkxYm5RdmMyVnlkbWxqWlMxaFkyTnZkVzUwTG5WcFpDSTZJams0T0RGbE9XRXpMVFF3T1RjdE5EUmlOQzFoT1dVekxXVTFZVGxrTkdVMU1UWmxNQ0lzSW5OMVlpSTZJbk41YzNSbGJUcHpaWEoyYVdObFlXTmpiM1Z1ZERwa1pXWmhkV3gwT21SbFptRjFiSFFpZlEub1NwZ0w4V3liYlJEb0tvYUpxclJ1RkxGOUN6SW1tdlo3VEtWU1RXdVpnWVpCWTRRZ092NjVCbGFLTF9qQU9DSFNyQzd6WW5pSjlXVDVCcVd2N3dfQU9XdEhURVJWSU00Y3I5LXh6LUxMRHZ6bl9qZlNIR0VoSnBPZHZnMGppRFZydi0xanJOb2g1S3VKMGw0TlNULVBnemtUQTU5bWhfNzdodFRtdzJfaDJCWHNDWDBROFg1dm5uMTBMVFJaeHRtNnZTank5dVRIcUZpa0pkU2pTX2c1SjJiS3BXVW1sZnl6OWNKTkliNWhDS0hYVEYyWGlDaG9vMlI3RmdvcHc5X1ltNWxLc2JudGh0bHA5TDUzZ2M2UV9IUkRvb05hSk04RHZndTNybXJheUhPa193RkFTbE1XZ2NkZzF0OGNjYXIwM1V0aWZ5RElDS2s1OTBMM2d2T0hR\nkind: Secret\nmetadata:\n  annotations:\n    kubernetes.io/service-account.name: default\n    kubernetes.io/service-account.uid: 9881e9a3-4097-44b4-a9e3-e5a9d4e516e0\n  creationTimestamp: "2020-01-05T06:27:59Z"\n  name: default-token-8xcpl\n  namespace: default\n  resourceVersion: "421"\n  selfLink: /api/v1/namespaces/default/secrets/default-token-8xcpl\n  uid: 2f07379e-80bb-4c24-a3e3-8a37d1c4c9fb\ntype: kubernetes.io/service-account-token\n')),(0,c.kt)("h3",{id:"\u521b\u5efasa"},"\u521b\u5efasa"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'\u279c  ~ kubectl create sa ysicing\nserviceaccount/ysicing created\n\n\u279c  ~ kubectl get sa ysicing -o yaml\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  creationTimestamp: "2020-01-07T14:40:07Z"\n  name: ysicing\n  namespace: default\n  resourceVersion: "134248"\n  selfLink: /api/v1/namespaces/default/serviceaccounts/ysicing\n  uid: e5f19802-a196-47d6-b194-3684642357ef\nsecrets:\n- name: ysicing-token-zvgr4\n\n# \u83b7\u53d6token,\u8fd9\u91cctoken\u662f\u539f\u59cbtoken\uff0c\u672a\u7ecf\u8fc7base64\u52a0\u5bc6\nkubectl describe secrets ysicing-token-zvgr4\n')),(0,c.kt)("p",null,"\u6d4b\u8bd5\u8bf7\u6c42k8s api,\u53d1\u73b0\u8fd8\u662f403."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'\u279c  ~ curl -k  https://192.168.100.101:6443/healthz/ping -H \'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImRpSkdBZVpqS09WNVlBT2dzd2I0dFZOUUdFUG9VX1ptT05CWWxnTThaMWcifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6InlzaWNpbmctdG9rZW4tenZncjQiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoieXNpY2luZyIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImU1ZjE5ODAyLWExOTYtNDdkNi1iMTk0LTM2ODQ2NDIzNTdlZiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OnlzaWNpbmcifQ.D6L4y4N8e6IzGdiLcRMT_hxtJ2fhLsNTJs4hh7NJlEEulyvklwuA2AFWpdvw5aRXx5DVoHZq__bZ1M2s3-wP_hL57IsoLgW9yFb2GVpnwFXOGe_YipyYcqaVkhpNd7GKjMMxS2IKOdYsX-yBreQsI8x77WPb3ux6TNTFTCv2mmLl1P-0c9TCeeyjjHACYUnV07oHwRk7CJ5ee_S34ZZkEz-ulf2E7xm5cwqWUd738WrN8LwK6p293WwBHeAh3fgK2iAgu5W-PZRFY_5_mV8fAJCVJ-E95WVQUplfuCLQBUx33mDseMuW7keCUJg2JkeSnE3mw_K09EuAt8EXkCDkWQ\'\n{\n  "kind": "Status",\n  "apiVersion": "v1",\n  "metadata": {\n\n  },\n  "status": "Failure",\n  "message": "forbidden: User \\"system:serviceaccount:default:ysicing\\" cannot get path \\"/healthz/ping\\"",\n  "reason": "Forbidden",\n  "details": {\n\n  },\n  "code": 403\n}\n')),(0,c.kt)("p",null,"k8s\u5bf9\u8d44\u6e90\u64cd\u4f5c\u6743\u9650\u5212\u5206\u7684\u6bd4\u8f83\u8be6\u7ec6:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u5199\u6743\u9650",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"create"),(0,c.kt)("li",{parentName:"ul"},"update"),(0,c.kt)("li",{parentName:"ul"},"delete"),(0,c.kt)("li",{parentName:"ul"},"patch"))),(0,c.kt)("li",{parentName:"ul"},"\u8bfb\u6743\u9650 ",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"get"),(0,c.kt)("li",{parentName:"ul"},"list"),(0,c.kt)("li",{parentName:"ul"},"watch")))),(0,c.kt)("p",null,"\u914d\u7f6esa ysicing\u8bbf\u95ee\u8d44\u6e90,\u5373\u914d\u7f6e ",(0,c.kt)("inlineCode",{parentName:"p"},".kube/config")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'# \u914d\u7f6esa ysicing token\u9274\u6743\u4fe1\u606f\nkubectl config set-credentials ysicing --token eyJhbGciOiJSUzI1NiIsImtpZCI6ImRpSkdBZVpqS09WNVlBT2dzd2I0dFZOUUdFUG9VX1ptT05CWWxnTThaMWcifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6InlzaWNpbmctdG9rZW4tenZncjQiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoieXNpY2luZyIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImU1ZjE5ODAyLWExOTYtNDdkNi1iMTk0LTM2ODQ2NDIzNTdlZiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OnlzaWNpbmcifQ.D6L4y4N8e6IzGdiLcRMT_hxtJ2fhLsNTJs4hh7NJlEEulyvklwuA2AFWpdvw5aRXx5DVoHZq__bZ1M2s3-wP_hL57IsoLgW9yFb2GVpnwFXOGe_YipyYcqaVkhpNd7GKjMMxS2IKOdYsX-yBreQsI8x77WPb3ux6TNTFTCv2mmLl1P-0c9TCeeyjjHACYUnV07oHwRk7CJ5ee_S34ZZkEz-ulf2E7xm5cwqWUd738WrN8LwK6p293WwBHeAh3fgK2iAgu5W-PZRFY_5_mV8fAJCVJ-E95WVQUplfuCLQBUx33mDseMuW7keCUJg2JkeSnE3mw_K09EuAt8EXkCDkWQ\n\nUser "ysicing" set.\n\n# \u914d\u7f6e\u96c6\u7fa4\u8bbf\u95ee\u4fe1\u606f\n# .kube/ca.crt \u4ece192.168.100.101:/etc/kubernetes/pki/ca.crt\u83b7\u53d6\u7684\n\u279c  ~ kubectl config set-cluster local --server https://192.168.100.101:6443 --certificate-authority .kube/ca.crt --embed-certs=true\nCluster "local" set.\n\n# \u914d\u7f6econtext, \u5c06cluster & user \u7ed1\u5b9a\n\u279c  ~ kubectl config set-context local-ctx --cluster local --user ysicing\nContext "local-ctx" created.\n\n# \u5207\u6362ctx\n\u279c  ~ kubectl config use-context local-ctx\nSwitched to context "local-ctx".\n')),(0,c.kt)("p",null,"\u8bf7\u6c42\u63a5\u53e3"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'\u279c  ~ kubectl get pods\nError from server (Forbidden): pods is forbidden: User "system:serviceaccount:default:ysicing" cannot list resource "pods" in API group "" in the namespace "default"\n')),(0,c.kt)("h3",{id:"\u6388\u6743\u914d\u7f6e"},"\u6388\u6743\u914d\u7f6e"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u521b\u5efa\u89d2\u8272\uff0c\u5b9a\u4e49\u8d44\u6e90\u64cd\u4f5c\u6743\u9650(ClusterRole/Role)"),(0,c.kt)("li",{parentName:"ul"},"\u89d2\u8272\u7ed1\u5b9a\uff0c\u5c06\u89d2\u8272\u4e0eSa\u7ed1\u5b9a(ClusterRoleBinding/RoleBinding)")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"# \u521b\u5efa\u89d2\u8272\n\u279c  ~ kubectl create role ysicing-role --resource pod,service,deployment,secret,ingress --verb create,update,delete,patch,get,list,watch\nrole.rbac.authorization.k8s.io/ysicing-role created\n\n\u279c  ~ kubectl get roles\nNAME           AGE\nysicing-role   34s\n\n# \u89d2\u8272\u7ed1\u5b9a\n\u279c  ~ kubectl create rolebinding ysbot.ysicing-binding --role ysicing-role --serviceaccount default:ysicing\nrolebinding.rbac.authorization.k8s.io/ysbot.ysicing-binding created\n")),(0,c.kt)("p",null,"\u518d\u6b21\u83b7\u53d6pods\u4fe1\u606f"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'\u279c  ~ kubectl config use-context local-ctx\nSwitched to context "local-ctx".\n\u279c  ~ kubectl get pods\nNAME                               READY   STATUS    RESTARTS   AGE\ndemo-deployment-6c5664f4d6-s6w8v   1/1     Running   0          2d4h\n')),(0,c.kt)("p",null,"\u518d\u6b21\u8bf7\u6c42",(0,c.kt)("inlineCode",{parentName:"p"},"https://192.168.100.101:6443/healthz/ping"),"\u53d1\u73b0\u4f9d\u65e7403\uff0c\u90a3\u4e48\u7ed9ysicing sa\u901a\u8fc7ClusterRoleBinding \u6388\u4e88\u4e00\u4e2a\u540d\u4e3a cluster-admin \u7684 ClusterRole"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\u279c  ~ kubectl config use-context kubernetes-admin@kubernetes\nSwitched to context \"kubernetes-admin@kubernetes\".\n\u279c  ~ kubectl create clusterrolebinding cluster-ysicing --clusterrole cluster-admin --serviceaccount default:ysicing\nclusterrolebinding.rbac.authorization.k8s.io/cluster-ysicing created\n\n\u279c  ~ curl -k  https://192.168.100.101:6443/healthz/ping -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImRpSkdBZVpqS09WNVlBT2dzd2I0dFZOUUdFUG9VX1ptT05CWWxnTThaMWcifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6InlzaWNpbmctdG9rZW4tenZncjQiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoieXNpY2luZyIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImU1ZjE5ODAyLWExOTYtNDdkNi1iMTk0LTM2ODQ2NDIzNTdlZiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OnlzaWNpbmcifQ.D6L4y4N8e6IzGdiLcRMT_hxtJ2fhLsNTJs4hh7NJlEEulyvklwuA2AFWpdvw5aRXx5DVoHZq__bZ1M2s3-wP_hL57IsoLgW9yFb2GVpnwFXOGe_YipyYcqaVkhpNd7GKjMMxS2IKOdYsX-yBreQsI8x77WPb3ux6TNTFTCv2mmLl1P-0c9TCeeyjjHACYUnV07oHwRk7CJ5ee_S34ZZkEz-ulf2E7xm5cwqWUd738WrN8LwK6p293WwBHeAh3fgK2iAgu5W-PZRFY_5_mV8fAJCVJ-E95WVQUplfuCLQBUx33mDseMuW7keCUJg2JkeSnE3mw_K09EuAt8EXkCDkWQ'\nok%\n\n# \u771f\u9999\u54c8\u54c8\u54c8\u54c8\n")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"cluster-admin"),"\u6743\u9650\u7279\u522b\u5927,\u5b9e\u9645\u4f7f\u7528\u8fd8\u9700\u8981\u8c28\u614e\u64cd\u4f5c\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"# \u53ef\u4ee5\u67e5\u770b\u5177\u4f53\u5b9a\u4e49\nkubectl get role ysicing-role\n")))}k.isMDXComponent=!0}}]);