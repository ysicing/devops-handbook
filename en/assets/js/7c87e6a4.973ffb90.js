"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7966],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,f=s["".concat(u,".").concat(d)]||s[d]||g[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90117:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={title:"\u4e00\u952e\u5b89\u88c5go1.17",date:new Date("2019-05-18T14:55:18.000Z"),description:"\u4e00\u952e\u5b89\u88c5go1.17.1",tags:["go"]},u=void 0,c={permalink:"/en/posts/go-install",source:"@site/blog/posts/go-install.md",title:"\u4e00\u952e\u5b89\u88c5go1.17",description:"\u4e00\u952e\u5b89\u88c5go1.17.1",date:"2019-05-18T14:55:18.000Z",formattedDate:"May 18, 2019",tags:[{label:"go",permalink:"/en/tags/go"}],readingTime:.5766666666666667,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u4e00\u952e\u5b89\u88c5go1.17",date:"2019-05-18T14:55:18.000Z",description:"\u4e00\u952e\u5b89\u88c5go1.17.1",tags:["go"]},prevItem:{title:"\u963f\u91cc\u4e91\u8f7b\u91cf\u5e94\u7528\u670d\u52a1\u5668\u5347\u7ea7\u5185\u6838",permalink:"/en/posts/aliyun-debian-upgrade-kernel"},nextItem:{title:"AdGuard\u4f7f\u7528\u59ff\u52bf",permalink:"/en/posts/dns-adguard-install"}},p={authorsImageUrls:[]},s=[{value:"Linux\u73af\u5883\u4e00\u952e\u811a\u672c",id:"linux\u73af\u5883\u4e00\u952e\u811a\u672c",level:2},{value:"ChangeLog",id:"changelog",level:3},{value:"20210911",id:"20210911",level:4},{value:"Mac\u5b89\u88c5",id:"mac\u5b89\u88c5",level:2},{value:"\u914d\u7f6eVisual Studio Code Editor",id:"\u914d\u7f6evisual-studio-code-editor",level:3},{value:"Linux\u5b89\u88c5",id:"linux\u5b89\u88c5",level:2}],g={toc:s},d="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)(d,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"linux\u73af\u5883\u4e00\u952e\u811a\u672c"},"Linux\u73af\u5883\u4e00\u952e\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://sh.ysicing.me/install/go.sh | bash\n")),(0,a.kt)("h3",{id:"changelog"},"ChangeLog"),(0,a.kt)("h4",{id:"20210911"},"20210911"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u811a\u672c\u652f\u6301lima\u666e\u901a\u7528\u6237"),(0,a.kt)("li",{parentName:"ul"},"go\u5347\u7ea7\u52301.17.1")),(0,a.kt)("h2",{id:"mac\u5b89\u88c5"},"Mac\u5b89\u88c5"),(0,a.kt)("p",null,"\u5982\u679c\u5df2\u7ecf\u5b89\u88c5\u4e86brew\uff0c\u5c31\u53ef\u4ee5\u5feb\u901f\u5b89\u88c5\u4e86"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# \u5b89\u88c5git\nbrew install git\n\n# \u5b89\u88c5go\nbrew install go\n\n# add GOBIN path to your PATH in ~/.zshrc\nexport GO111MODULE=on\nexport GOPROXY=https://goproxy.cn\nexport GOPATH="/Users/ysicing/go" # \u793a\u4f8b\nexport GOBIN="$GOPATH/bin"\nexport PATH=$HOME/bin:/usr/local/bin:/usr/local/opt/mysql-client/bin:$GOBIN:$PATH\n')),(0,a.kt)("h3",{id:"\u914d\u7f6evisual-studio-code-editor"},"\u914d\u7f6eVisual Studio Code Editor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u5feb\u6377\u952ecmd+shift+p\n\u952e\u5165: go install\n\u9009\u62e9 "Go: Install/Update Tools"\nCheck all the checkboxes\n')),(0,a.kt)("h2",{id:"linux\u5b89\u88c5"},"Linux\u5b89\u88c5"),(0,a.kt)("p",null,"\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://golang.google.cn/dl/"},"golang\u4e2d\u56fd")," \u83b7\u53d6\u6700\u65b0go\u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4e0b\u8f7d\nwget https://dl.google.com/go/go1.17.linux-amd64.tar.gz\n# \u89e3\u538b\ntar -C /usr/local -xzf go1.17.linux-amd64.tar.gz\n# \u914d\u7f6e .bashrc\nexport GO111MODULE=on\nexport GOPROXY=https://goproxy.cn\nexport GOPATH="/root/go"\nexport GOBIN="$GOPATH/bin"\nexport PATH=$PATH:$GOBIN:/usr/local/go/bin\nsource .bashrc\n# \u9a8c\u8bc1\ngo env\n')))}f.isMDXComponent=!0}}]);