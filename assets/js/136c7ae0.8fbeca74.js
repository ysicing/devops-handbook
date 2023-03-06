"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5091],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,f=p["".concat(l,".").concat(b)]||p[b]||u[b]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},76405:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"\u8f7b\u91cf\u4e91debian\u6302\u8f7d\u6570\u636e\u76d8",description:"\u672c\u6587\u4e3b\u8981\u8bb0\u5f55\u672c\u4eba\u5728Debian\u6302\u8f7d\u786c\u76d8",date:new Date("2023-01-29T08:55:18.000Z"),tags:["debian","\u8f7b\u91cf\u4e91","qcloud"]},l=void 0,d={permalink:"/posts/qcloud-disk-mount",source:"@site/blog/posts/qcloud-disk-mount.md",title:"\u8f7b\u91cf\u4e91debian\u6302\u8f7d\u6570\u636e\u76d8",description:"\u672c\u6587\u4e3b\u8981\u8bb0\u5f55\u672c\u4eba\u5728Debian\u6302\u8f7d\u786c\u76d8",date:"2023-01-29T08:55:18.000Z",formattedDate:"2023\u5e741\u670829\u65e5",tags:[{label:"debian",permalink:"/tags/debian"},{label:"\u8f7b\u91cf\u4e91",permalink:"/tags/\u8f7b\u91cf\u4e91"},{label:"qcloud",permalink:"/tags/qcloud"}],readingTime:1.2533333333333334,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u8f7b\u91cf\u4e91debian\u6302\u8f7d\u6570\u636e\u76d8",description:"\u672c\u6587\u4e3b\u8981\u8bb0\u5f55\u672c\u4eba\u5728Debian\u6302\u8f7d\u786c\u76d8",date:"2023-01-29T08:55:18.000Z",tags:["debian","\u8f7b\u91cf\u4e91","qcloud"]},prevItem:{title:"debian\u5347\u7ea7\u5185\u6838",permalink:"/posts/debian-upgrade"},nextItem:{title:"2022\u5e74\u5ea6\u603b\u7ed3",permalink:"/posts/2022"}},c={authorsImageUrls:[]},p=[{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",level:2},{value:"\u8bbe\u7f6e\u5f00\u673a\u6302\u8f7d",id:"\u8bbe\u7f6e\u5f00\u673a\u6302\u8f7d",level:2},{value:"UUID\u65b9\u5f0f(\u5e38\u89c1)",id:"uuid\u65b9\u5f0f\u5e38\u89c1",level:3},{value:"\u4e91\u786c\u76d8(\u8f7b\u91cf\u63a8\u8350)",id:"\u4e91\u786c\u76d8\u8f7b\u91cf\u63a8\u8350",level:3}],u={toc:p},b="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(b,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4ee5\u817e\u8baf\u4e91\u8f7b\u91cf\u793a\u4f8b")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u5728\u63a7\u5236\u53f0\u5df2\u7ecf\u6302\u8f7d")),(0,i.kt)("h2",{id:"\u64cd\u4f5c"},"\u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u78c1\u76d8\u540d\u79f0, \u6709\u4e24\u5757\u4e00\u4e2a\u662f\u7cfb\u7edf\u76d8\uff0c\u4e00\u4e2a\u662f\u6570\u636e\u76d8\n> fdisk -l\nDisk /dev/vda: 40 GiB, 42949672960 bytes, 83886080 sectors\nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 512 bytes\nI/O size (minimum/optimal): 512 bytes / 512 bytes\nDisklabel type: dos\nDisk identifier: 0xbcfcb5cb\n\nDevice     Boot Start      End  Sectors Size Id Type\n/dev/vda1  *     2048 83886046 83883999  40G 83 Linux\n\n\nDisk /dev/vdb: 100 GiB, 107374182400 bytes, 209715200 sectors\nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 512 bytes\nI/O size (minimum/optimal): 512 bytes / 512 bytes\n\n# \u683c\u5f0f\u5316ext4\nmkfs -t ext4 /dev/vdb\nmke2fs 1.46.2 (28-Feb-2021)\nCreating filesystem with 26214400 4k blocks and 6553600 inodes\nFilesystem UUID: 5430aae0-55fa-4695-b8c9-7989035663f3\nSuperblock backups stored on blocks:\n    32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,\n    4096000, 7962624, 11239424, 20480000, 23887872\n\nAllocating group tables: done\nWriting inode tables: done\nCreating journal (131072 blocks):\ndone\nWriting superblocks and filesystem accounting information: done\n\n# \u4e34\u65f6\u6302\u8f7d\nmount /dev/vdb /data\n# \u9a8c\u8bc1\ndf -h\nFilesystem      Size  Used Avail Use% Mounted on\nudev            965M     0  965M   0% /dev\ntmpfs           199M  448K  198M   1% /run\n/dev/vda1        40G  2.5G   36G   7% /\ntmpfs           991M   24K  991M   1% /dev/shm\ntmpfs           5.0M     0  5.0M   0% /run/lock\ntmpfs           199M     0  199M   0% /run/user/0\n/dev/vdb         98G   24K   93G   1% /data\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"fdisk"),"\u8fdb\u884c\u5206\u533a\u6302\u8f7d\u4e5f\u53ef\u4ee5\u54c8\uff0c\u4e5f\u6bd4\u8f83\u7b80\u5355",(0,i.kt)("inlineCode",{parentName:"p"},"fdisk /dev/vdb"),"\u6309\u6b65\u9aa4\u6765\u5373\u53ef")),(0,i.kt)("h2",{id:"\u8bbe\u7f6e\u5f00\u673a\u6302\u8f7d"},"\u8bbe\u7f6e\u5f00\u673a\u6302\u8f7d"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5c06\u6302\u8f7d\u4fe1\u606f\u6dfb\u52a0\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"fstab"),"\u91cc\u5373\u53ef, \u64cd\u4f5c\u524d\u5148\u5907\u4efd"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp -r /etc/fstab /etc/fstab.20220927\n"))),(0,i.kt)("h3",{id:"uuid\u65b9\u5f0f\u5e38\u89c1"},"UUID\u65b9\u5f0f(\u5e38\u89c1)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# \u67e5\u770bID\nblkid /dev/vdb\n/dev/vdb: UUID="5430aae0-55fa-4695-b8c9-7989035663f3" BLOCK_SIZE="4096" TYPE="ext4"\n# fstab\u65b0\u589e\nUUID=5430aae0-55fa-4695-b8c9-7989035663f3 /data ext4 defaults 0 0\n')),(0,i.kt)("h3",{id:"\u4e91\u786c\u76d8\u8f7b\u91cf\u63a8\u8350"},"\u4e91\u786c\u76d8(\u8f7b\u91cf\u63a8\u8350)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770bID\nls /dev/disk/by-id/virtio-disk-*\n# fstab\u65b0\u589e\n/dev/disk/by-id/virtio-disk-<ID> /data ext4 defaults 0 0\n")))}f.isMDXComponent=!0}}]);