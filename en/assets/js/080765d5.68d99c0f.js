"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7255],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35959:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"\u5728macOS\u4e0a\u5236\u4f5cwin11\u542f\u52a8\u76d8",date:new Date("2022-04-18T15:27:49.000Z"),description:"\u5728macOS\u4e0a\u5236\u4f5cwin11\u542f\u52a8\u76d8",tags:["macOS","windows"]},s=void 0,c={permalink:"/en/posts/macOS-make-windows-bootable-iso",source:"@site/blog/posts/macOS-make-windows-bootable-iso.md",title:"\u5728macOS\u4e0a\u5236\u4f5cwin11\u542f\u52a8\u76d8",description:"\u5728macOS\u4e0a\u5236\u4f5cwin11\u542f\u52a8\u76d8",date:"2022-04-18T15:27:49.000Z",formattedDate:"April 18, 2022",tags:[{label:"macOS",permalink:"/en/tags/mac-os"},{label:"windows",permalink:"/en/tags/windows"}],readingTime:.6233333333333333,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u5728macOS\u4e0a\u5236\u4f5cwin11\u542f\u52a8\u76d8",date:"2022-04-18T15:27:49.000Z",description:"\u5728macOS\u4e0a\u5236\u4f5cwin11\u542f\u52a8\u76d8",tags:["macOS","windows"]},prevItem:{title:"\u4f7f\u7528 chartmuseum \u7ba1\u7406 Helm Chart",permalink:"/en/posts/chartmuseum-deploy"},nextItem:{title:"minipc\u6298\u817e\u5b89\u88c5pve",permalink:"/en/posts/minipc-pve"}},u={authorsImageUrls:[]},p=[{value:"1. \u4e0b\u8f7dwin11\u955c\u50cf",id:"1-\u4e0b\u8f7dwin11\u955c\u50cf",level:2},{value:"2. \u51c6\u5907\u4e00\u4e2a\u81f3\u5c118GB\u7684U\u76d8",id:"2-\u51c6\u5907\u4e00\u4e2a\u81f3\u5c118gb\u7684u\u76d8",level:2},{value:"3. \u5b9e\u64cd",id:"3-\u5b9e\u64cd",level:2},{value:"4. \u91cd\u88c5\u7cfb\u7edf",id:"4-\u91cd\u88c5\u7cfb\u7edf",level:2}],m={toc:p},d="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7b80\u5355\u8bb0\u5f55\u4e00\u4e0b")),(0,o.kt)("h2",{id:"1-\u4e0b\u8f7dwin11\u955c\u50cf"},"1. \u4e0b\u8f7dwin11\u955c\u50cf"),(0,o.kt)("p",null,"\u76f4\u63a5\u4ece",(0,o.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/software-download/windows11"},"\u5b98\u7f51"),"\u4e0b\u8f7d\u5c31\u597d\u4e86, \u6839\u636e\u81ea\u5df1\u7684\u60c5\u51b5\u9009\u62e9\u3002"),(0,o.kt)("h2",{id:"2-\u51c6\u5907\u4e00\u4e2a\u81f3\u5c118gb\u7684u\u76d8"},"2. \u51c6\u5907\u4e00\u4e2a\u81f3\u5c118GB\u7684U\u76d8"),(0,o.kt)("p",null,"\u6211\u51c6\u5907\u4e86\u4e00\u4e2a32G\u7684"),(0,o.kt)("h2",{id:"3-\u5b9e\u64cd"},"3. \u5b9e\u64cd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5217\u51fa\u78c1\u76d8\ndiskutil list\n\n\n/dev/disk4 (external, physical):\n   #:                       TYPE NAME                    SIZE       IDENTIFIER\n   0:     FDisk_partition_scheme                        *31.0 GB    disk4\n   1:                 DOS_FAT_32 WIN10                   31.0 GB    disk4s1\n\n# \u5c06U\u76d8\u683c\u5f0f\u5316\u4e3aWINDOWS FAT32\u683c\u5f0f\ndiskutil eraseDisk MS-DOS "WIN11" GPT /dev/disk4\n\n# \u6302\u8f7dwin11\u955c\u50cf\nhdiutil mount ~/Downloads/Win11_Chinese\\(Simplified\\)_x64v1.iso\n\n# \u590d\u5236\u955c\u50cf\u5230u\u76d8, \u5ffd\u7565install.wim\u6587\u4ef6\uff0c\u592a\u5927\u5355\u72ec\u5904\u7406\nrsync -vha --exclude=sources/install.wim  /Volumes/CCCOMA_X64FRE_ZH-CN_DV9/* /Volumes/WIN11\n# \u5904\u7406wim\u6587\u4ef6, \u4f7f\u7528 wimlib \u5c06 install.wim \u6587\u4ef6\u62c6\u5206\u4e3a 2 \u4e2a\u6587\u4ef6\uff0c\u6bcf\u4e2a\u6587\u4ef6\u6700\u59273.8G\nbrew install wimlib\nwimlib-imagex split /Volumes/CCCOMA_X64FRE_ZH-CN_DV9/sources/install.wim /Volumes/WIN11/sources/install.swm 3800\n# \u5b8c\u6210\uff0c\u63a8\u51fa\n')),(0,o.kt)("h2",{id:"4-\u91cd\u88c5\u7cfb\u7edf"},"4. \u91cd\u88c5\u7cfb\u7edf"),(0,o.kt)("p",null,"U\u76d8\u542f\u52a8\u5373\u53ef"))}f.isMDXComponent=!0}}]);