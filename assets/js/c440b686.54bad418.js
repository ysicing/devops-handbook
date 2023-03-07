"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7769],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),y=l,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=y;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},54456:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=t(87462),l=t(63366),o=(t(67294),t(3905)),i=["components"],a={title:"mysql\u6570\u636e\u5e93binlog\u65e5\u5fd7\u592a\u5927\u89e3\u51b3\u529e\u6cd5",tags:["mysql"]},s=void 0,c={unversionedId:"misc/mysql/mysql8-binlog",id:"misc/mysql/mysql8-binlog",title:"mysql\u6570\u636e\u5e93binlog\u65e5\u5fd7\u592a\u5927\u89e3\u51b3\u529e\u6cd5",description:"\u57fa\u4e8ebitnami/mysql:8.0\u64cd\u4f5c",source:"@site/docs/misc/mysql/mysql8-binlog.md",sourceDirName:"misc/mysql",slug:"/misc/mysql/mysql8-binlog",permalink:"/docs/misc/mysql/mysql8-binlog",draft:!1,tags:[{label:"mysql",permalink:"/docs/tags/mysql"}],version:"current",lastUpdatedBy:"ysicing",lastUpdatedAt:1678112151,formattedLastUpdatedAt:"2023\u5e743\u67086\u65e5",frontMatter:{title:"mysql\u6570\u636e\u5e93binlog\u65e5\u5fd7\u592a\u5927\u89e3\u51b3\u529e\u6cd5",tags:["mysql"]},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efaeks\u96c6\u7fa4",permalink:"/docs/cloud/aws/eks/install"},next:{title:"\u57fa\u4e8e Caddy2 \u90e8\u7f72\u79c1\u6709 DERP \u4e2d\u7ee7\u670d\u52a1\u5668",permalink:"/docs/misc/tailscale/caddy-derper-proxy"}},p={},u=[{value:"\u4e34\u65f6\u64cd\u4f5c(\u5b9e\u8df5\u7248\u672c 8.0)",id:"\u4e34\u65f6\u64cd\u4f5c\u5b9e\u8df5\u7248\u672c-80",level:2},{value:"\u6c38\u4e45\u64cd\u4f5c(\u672a\u5b9e\u8df5)",id:"\u6c38\u4e45\u64cd\u4f5c\u672a\u5b9e\u8df5",level:2},{value:"5.7\u7248\u672c\u6570\u636e\u5e93(\u672a\u5b9e\u8df5)",id:"57\u7248\u672c\u6570\u636e\u5e93\u672a\u5b9e\u8df5",level:2}],m={toc:u},y="wrapper";function d(e){var n=e.components,t=(0,l.Z)(e,i);return(0,o.kt)(y,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u57fa\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"bitnami/mysql:8.0"),"\u64cd\u4f5c")),(0,o.kt)("h2",{id:"\u4e34\u65f6\u64cd\u4f5c\u5b9e\u8df5\u7248\u672c-80"},"\u4e34\u65f6\u64cd\u4f5c(\u5b9e\u8df5\u7248\u672c 8.0)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mysql"},"# \u67e5\u770bbinlog\u5217\u8868\nshow binary logs;\n# \u67e5\u770bbinlog\u8fc7\u671f\u65f6\u95f4, \u9ed8\u8ba430\u5929(2592000)\nshow variables like '%binlog_expire_logs_seconds%';\n# \u4fee\u6539\u4e3a 3\u5929(259200)\nset global binlog_expire_logs_seconds=259200;\n# \u5237\u65b0\u65e5\u5fd7\nflush logs;\n")),(0,o.kt)("h2",{id:"\u6c38\u4e45\u64cd\u4f5c\u672a\u5b9e\u8df5"},"\u6c38\u4e45\u64cd\u4f5c(\u672a\u5b9e\u8df5)"),(0,o.kt)("p",null,"\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"p"},"my.cnf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8bbe\u7f6ebinlog\u65e5\u5fd7\u5927\u5c0f\nmax_binlog_size = 500M\n# \u8bbe\u7f6e\u8fc7\u671f\u6e05\u7406\u65f6\u95f4\nexpire_logs_days = 3\n")),(0,o.kt)("h2",{id:"57\u7248\u672c\u6570\u636e\u5e93\u672a\u5b9e\u8df5"},"5.7\u7248\u672c\u6570\u636e\u5e93(\u672a\u5b9e\u8df5)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mysql"},"# \u67e5\u770bbinlog\u5217\u8868\nshow binary logs;\n# \u67e5\u770bbinlog\u8fc7\u671f\u65f6\u95f4, \u9ed8\u8ba490\u5929, 0\u8868\u793a\u6c38\u4e0d\u8fc7\u671f\nshow variables like '%expire_logs_days%';\n# \u4fee\u6539\u4e3a 3\u5929\nset global expire_logs_days=3;\n# \u5237\u65b0\u65e5\u5fd7\nflush logs;\n")))}d.isMDXComponent=!0}}]);