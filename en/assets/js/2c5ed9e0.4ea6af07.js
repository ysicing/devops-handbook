"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5632],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84948:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=t(83117),o=t(80102),s=(t(67294),t(3905)),i=["components"],a={title:"\u4f7f\u7528ergo\u5feb\u901f\u5b89\u88c5k8s1.18.4",date:new Date("2020-06-19T14:30:18.000Z"),description:"\u672c\u5730\u4f7f\u7528ergo\u5feb\u901f\u5b89\u88c5k8s1.18.4",tags:["kubernetes"]},l=void 0,c={permalink:"/en/posts/k8s-install-ergo",source:"@site/blog/posts/k8s-install-ergo.md",title:"\u4f7f\u7528ergo\u5feb\u901f\u5b89\u88c5k8s1.18.4",description:"\u672c\u5730\u4f7f\u7528ergo\u5feb\u901f\u5b89\u88c5k8s1.18.4",date:"2020-06-19T14:30:18.000Z",formattedDate:"June 19, 2020",tags:[{label:"kubernetes",permalink:"/en/tags/kubernetes"}],readingTime:3.47,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u4f7f\u7528ergo\u5feb\u901f\u5b89\u88c5k8s1.18.4",date:"2020-06-19T14:30:18.000Z",description:"\u672c\u5730\u4f7f\u7528ergo\u5feb\u901f\u5b89\u88c5k8s1.18.4",tags:["kubernetes"]},prevItem:{title:"Consul\u5b89\u88c5",permalink:"/en/posts/consul-install"},nextItem:{title:"\u5f00\u6e90k8slb\u5de5\u5177Metallb",permalink:"/en/posts/k8s-slb-metallb"}},u={authorsImageUrls:[]},p=[{value:"\u51c6\u5907\u865a\u62df\u673a",id:"\u51c6\u5907\u865a\u62df\u673a",level:2},{value:"\u521d\u59cb\u5316\u73af\u5883",id:"\u521d\u59cb\u5316\u73af\u5883",level:2},{value:"\u5b89\u88c5docker",id:"\u5b89\u88c5docker",level:2},{value:"\u5b89\u88c5\u5e38\u7528\u5c0f\u5de5\u5177",id:"\u5b89\u88c5\u5e38\u7528\u5c0f\u5de5\u5177",level:2},{value:"\u5b89\u88c5k8s",id:"\u5b89\u88c5k8s",level:2},{value:"\u5b89\u88c5\u5176\u4ed6ingress",id:"\u5b89\u88c5\u5176\u4ed6ingress",level:3},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u57fa\u4e8e",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ysicing/sealos"},"sealos"),", \u4e00\u952e\u9ad8\u53ef\u7528\uff0c\u7b80\u5355\u4e0a\u624b, \u5b89\u88c5k8s 1.18.4\u7248\u672c")),(0,s.kt)("h2",{id:"\u51c6\u5907\u865a\u62df\u673a"},"\u51c6\u5907\u865a\u62df\u673a"),(0,s.kt)("p",null,"\u73af\u5883: 3\u53f0\u673a\u5668(debian/buster 10.4, 11.11.11.111~11.11.11.113, 2\u68384G80G\u5b58\u50a8)"),(0,s.kt)("p",null,'{{< expand "ergo vm create --vmname k8s --vmnum 3" >}}'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\u279c  ~ ergo  vm create   --vmname k8s --vmnum 3\nI0523 15:20:15.819808   17953 root.go:51] Using config file:\n2020-05-23 15:20:15 [DEBG] [github.com/ysicing/ergo/vm/linux.go:66] check system\n2020-05-23 15:20:15 [INFO] [github.com/ysicing/ergo/vm/linux.go:73] check system done. It looks good\n2020-05-23 15:20:15 [DEBG] [github.com/ysicing/ergo/vm/linux.go:78] check vagrant\n2020-05-23 15:20:15 [INFO] [github.com/ysicing/ergo/utils/command.go:15] [os]exec cmd is :  which [vagrant]\n/usr/local/bin/vagrant\n2020-05-23 15:20:15 [INFO] [github.com/ysicing/ergo/utils/command.go:15] [os]exec cmd is :  which [VirtualBoxVM]\n/usr/local/bin/VirtualBoxVM\n2020-05-23 15:20:15 [DEBG] [github.com/ysicing/ergo/vm/linux.go:85] write Vagrantfile\n2020-05-23 15:20:15 [INFO] [github.com/ysicing/ergo/vm/linux.go:92] vagranfile:\n# -*- mode: ruby -*-\n# vi: set ft=ruby :\n\nVagrant.configure("2") do |config|\n  config.vm.box_check_update = false\n  config.vm.provider \'virtualbox\' do |vb|\n   vb.customize [ "guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-threshold", 1000 ]\n  end\n  $num_instances = 3\n  (1..$num_instances).each do |i|\n    config.vm.define "k8s#{i}" do |node|\n      node.vm.box = "ysicing/debian"\n      node.vm.hostname = "k8s#{i}"\n      node.vm.network "public_network", use_dhcp_assigned_default_route: true, bridge: \'en0: Wi-Fi (Wireless)\'\n      # node.vm.provision "shell", run: "always", inline: "ntpdate ntp.api.bz"\n      node.vm.network "private_network", ip: "11.11.11.11#{i}"\n      node.vm.provision "shell", run: "always", inline: "echo hello from k8s#{i}"\n      node.vm.provider "virtualbox" do |vb|\n        vb.gui = false\n        vb.memory = 4096\n        vb.cpus = 2\n        vb.name = "k8s#{i}"\n        vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]\n        vb.customize ["modifyvm", :id, "--ioapic", "on"]\n        # cpu \u4f7f\u7528\u738750%\n        vb.customize ["modifyvm", :id, "--cpuexecutioncap", "50"]\n      end\n    end\n  end\nend\n\n2020-05-23 15:20:15 [DEBG] [github.com/ysicing/ergo/vm/linux.go:117] vagrant up\nBringing machine \'k8s1\' up with \'virtualbox\' provider...\nBringing machine \'k8s2\' up with \'virtualbox\' provider...\nBringing machine \'k8s3\' up with \'virtualbox\' provider...\n...\n2020-05-23 15:26:37 [INFO] [github.com/ysicing/ergo/vm/linux.go:130] ip: 11.11.11.111-11.11.11.113, root/vagrant\n2020-05-23 15:26:37 [INFO] [github.com/ysicing/ergo/vm/linux.go:133] \u9500\u6bc1\u65b9\u5f0f: cd /Users/ysicing/vm, vagrant destroy -f\n')),(0,s.kt)("p",null,"{{< /expand >}}"),(0,s.kt)("h2",{id:"\u521d\u59cb\u5316\u73af\u5883"},"\u521d\u59cb\u5316\u73af\u5883"),(0,s.kt)("p",null,'{{< expand "ergo vm init --ip 11.11.11.111 --ip 11.11.11.112 --ip 11.11.11.113" >}}'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"===============================================================================\nprepare : \u5b89\u88c5\u57fa\u7840\u8f6f\u4ef6 -------------------------------------------------------- 8.77s\nprepare : Install dbus for the hostname module -------------------------- 5.84s\nprepare : \u5220\u9664\u9ed8\u8ba4\u5b89\u88c5 -------------------------------------------------------- 3.60s\nGathering Facts --------------------------------------------------------- 1.15s\nprepare : \u52a0\u8f7d\u5185\u6838\u6a21\u5757 -------------------------------------------------------- 0.92s\nprepare : gather facts -------------------------------------------------- 0.67s\nprepare : \u589e\u52a0\u5185\u6838\u6a21\u5757\u5f00\u673a\u52a0\u8f7d\u914d\u7f6e -------------------------------------------------- 0.63s\nprepare : \u542f\u7528systemd\u81ea\u52a8\u52a0\u8f7d\u6a21\u5757\u670d\u52a1 --------------------------------------------- 0.53s\nprepare : \u7981\u7528\u7cfb\u7edf swap ----------------------------------------------------- 0.47s\nprepare : \u8bbe\u7f6e\u7cfb\u7edf ulimits -------------------------------------------------- 0.41s\nprepare : \u4f18\u5316\u8bbe\u7f6e journal \u65e5\u5fd7 ----------------------------------------------- 0.37s\nprepare : \u628aSCTP\u5217\u5165\u5185\u6838\u6a21\u5757\u9ed1\u540d\u5355 ------------------------------------------------ 0.36s\nprepare : \u5220\u9664fstab swap \u76f8\u5173\u914d\u7f6e --------------------------------------------- 0.34s\nprepare : \u8bbe\u7f6e\u7cfb\u7edf\u53c2\u6570 -------------------------------------------------------- 0.32s\nprepare : \u51c6\u5907 journal \u65e5\u5fd7\u76f8\u5173\u76ee\u5f55 --------------------------------------------- 0.32s\nprepare : \u521b\u5efa systemd \u914d\u7f6e\u76ee\u5f55 ----------------------------------------------- 0.30s\nprepare : \u91cd\u542f journald \u670d\u52a1 ------------------------------------------------ 0.30s\nprepare : update /etc/security/limits.conf ------------------------------ 0.28s\nprepare : \u751f\u6548\u7cfb\u7edf\u53c2\u6570 -------------------------------------------------------- 0.19s\nprepare : \u8bbe\u7f6e ulimits ---------------------------------------------------- 0.12s\n")),(0,s.kt)("p",null,"{{< /expand >}}"),(0,s.kt)("h2",{id:"\u5b89\u88c5docker"},"\u5b89\u88c5docker"),(0,s.kt)("p",null,'{{< expand "ergo install docker --ip 11.11.11.111 --ip 11.11.11.112 --ip 11.11.11.113 --pass vagrant" >}}'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'...\n+ sh -c \'docker version\'\nClient: Docker Engine - Community\n Version:           19.03.9\n API version:       1.40\n Go version:        go1.13.10\n Git commit:        9d988398e7\n Built:             Fri May 15 00:25:25 2020\n OS/Arch:           linux/amd64\n Experimental:      false\n\nServer: Docker Engine - Community\n Engine:\n  Version:          19.03.9\n  API version:      1.40 (minimum version 1.12)\n  Go version:       go1.13.10\n  Git commit:       9d988398e7\n  Built:            Fri May 15 00:23:57 2020\n  OS/Arch:          linux/amd64\n  Experimental:     false\n containerd:\n  Version:          1.2.13\n  GitCommit:        7ad184331fa3e55e52b890ea95e65ba581ae3429\n runc:\n  Version:          1.0.0-rc10\n  GitCommit:        dc9208a3303feef5b3839f4323d9beb36df0a9dd\n docker-init:\n  Version:          0.18.0\n  GitCommit:        fec3683\nIf you would like to use Docker as a non-root user, you should now consider\nadding your user to the "docker" group with something like:\n\n  sudo usermod -aG docker your-user\n\nRemember that you will have to log out and back in for this to take effect!\n\nWARNING: Adding a user to the "docker" group will grant the ability to run\n         containers which can be used to obtain root privileges on the\n         docker host.\n         Refer to https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface\n         for more information.\nSynchronizing state of docker.service with SysV service script with /lib/systemd/systemd-sysv-install.\nExecuting: /lib/systemd/systemd-sysv-install enable docker\n"19.03.9"\nUnable to find image \'ysicing/tools:latest\' locally\nlatest: Pulling from ysicing/tools\n0d6b48c80e92: Pull complete\nf28c196b1246: Pull complete\n04bb1e97c214: Pull complete\nDigest: sha256:c689021150ec06af298db958d24c19fdbe3aea7c6717c5dee53f7e9071b4cd76\nStatus: Downloaded newer image for ysicing/tools:latest\n')),(0,s.kt)("p",null,"{{< /expand >}}"),(0,s.kt)("h2",{id:"\u5b89\u88c5\u5e38\u7528\u5c0f\u5de5\u5177"},"\u5b89\u88c5\u5e38\u7528\u5c0f\u5de5\u5177"),(0,s.kt)("p",null,'{{< expand "ergo install tools --ip 11.11.11.111 --ip 11.11.11.112 --ip 11.11.11.113 --pass vagrant" >}}'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"I0523 15:35:59.919563   19284 root.go:51] Using config file:\nI0523 15:35:59.920024   19284 install.go:55] \ud83c\udf89 \u5b89\u88c5 tools\n2020-05-23 15:35:59 [INFO] [/Users/ysicing/go/pkg/mod/github.com/kunnos/sshcmd@v1.6.0/pkg/sshutil/ssh.go:12] [ssh][11.11.11.111]exec cmd is : docker run --rm -v /usr/local/bin:/sysdir ysicing/tools tar zxf /pkg.tgz -C /sysdir\n2020-05-23 15:36:08 [DEBG] [/Users/ysicing/go/pkg/mod/github.com/kunnos/sshcmd@v1.6.0/pkg/sshutil/ssh.go:25] [ssh][11.11.11.111]command result is:\n2020-05-23 15:36:08 [INFO] [/Users/ysicing/go/pkg/mod/github.com/kunnos/sshcmd@v1.6.0/pkg/sshutil/ssh.go:12] [ssh][11.11.11.112]exec cmd is : docker run --rm -v /usr/local/bin:/sysdir ysicing/tools tar zxf /pkg.tgz -C /sysdir\n2020-05-23 15:36:17 [DEBG] [/Users/ysicing/go/pkg/mod/github.com/kunnos/sshcmd@v1.6.0/pkg/sshutil/ssh.go:25] [ssh][11.11.11.112]command result is:\n2020-05-23 15:36:17 [INFO] [/Users/ysicing/go/pkg/mod/github.com/kunnos/sshcmd@v1.6.0/pkg/sshutil/ssh.go:12] [ssh][11.11.11.113]exec cmd is : docker run --rm -v /usr/local/bin:/sysdir ysicing/tools tar zxf /pkg.tgz -C /sysdir\n2020-05-23 15:36:26 [DEBG] [/Users/ysicing/go/pkg/mod/github.com/kunnos/sshcmd@v1.6.0/pkg/sshutil/ssh.go:25] [ssh][11.11.11.113]command result is:\n")),(0,s.kt)("p",null,"{{< /expand >}}"),(0,s.kt)("p",null,"{{< boxmd >}}\n",(0,s.kt)("inlineCode",{parentName:"p"},"ergo shell --ip 11.11.11.111 --ip 11.11.11.112 --ip 11.11.11.113 --pass vagrant --cmd upgrade-tools"),"\n\u6216\u8005\u5728\u5f53\u524d\u673a\u5668\u76f4\u63a5\u6267\u884c\n",(0,s.kt)("inlineCode",{parentName:"p"},"upgrade-tools"),"\n{{< /boxmd >}}"),(0,s.kt)("h2",{id:"\u5b89\u88c5k8s"},"\u5b89\u88c5k8s"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e\uff0c\u6211\u5b9a\u5236\u4e86sealos\u548ccalico\u7248\u672c\u4e3a\u6700\u65b0\u7248\u672c,\u4e14\u4f7f\u7528\u4e86\u5728\u7ebf\u5b89\u88c5\u5305")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# \u5b89\u88c5\u4e86k8s 1.18.4, \u5b89\u88c5\u4e86ingress, \u914d\u7f6enfs\uff0c\u9ed8\u8ba4\u5b58\u50a8\u7c7b\u4e3anfs-data\nergo install k8s --enablenfs=true --mip 11.11.11.111 --wip 11.11.11.112-11.11.11.113 --pass vagrant --ingresstype --enablekuboard --regioncn\n")),(0,s.kt)("h3",{id:"\u5b89\u88c5\u5176\u4ed6ingress"},"\u5b89\u88c5\u5176\u4ed6ingress"),(0,s.kt)("p",null,"\u652f\u6301",(0,s.kt)("inlineCode",{parentName:"p"},"nginx-ingress"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"traefik"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ingress-nginx")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ergo install ingress --ip 11.11.11.111 --pk ~/.ssh/id_rsa --regioncn --ingresstype\n")),(0,s.kt)("h2",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'root@k8s1:~# kubectl get node\nNAME   STATUS   ROLES    AGE    VERSION\nk8s1   Ready    master   2m2s   v1.18.4\nk8s2   Ready    <none>   87s    v1.18.4\nk8s3   Ready    <none>   87s    v1.18.4\nroot@k8s1:~# kubectl get ns\nNAME              STATUS   AGE\ndefault           Active   2m6s\ningress-nginx     Active   2m13s\nkube-node-lease   Active   2m7s\nkube-public       Active   2m7s\nkube-system       Active   2m8s\nroot@k8s1:~# kubectl get cs\nNAME                 STATUS    MESSAGE             ERROR\ncontroller-manager   Healthy   ok\nscheduler            Healthy   ok\netcd-0               Healthy   {"health":"true"}\nroot@k8s1:~# kubectl get sc\nNAME                 PROVISIONER       RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE\nnfs-data (default)   nfs-provisioner   Delete          Immediate           false                  60s\n')))}m.isMDXComponent=!0}}]);