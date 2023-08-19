---
title: "VPS选购分享 Dogyun狗云, 建站服务器又多了一个选择，可以月付尝鲜～"
date: 2023-03-17T18:59:59+08:00
description: "本文主要安利dogyun"
sticky: 1
tags:
- vps
- 推广
keywords:
- vps
- 狗云
- dogyun
url: /ad/dogyun
---

目前可用折扣码`9折now90`

我的邀请链接[https://www.dogyun.com/?ref=ysicing](https://www.dogyun.com/?ref=ysicing)

<!-- truncate -->

:::tip 自己用了才会安利哈

我的博客`ysicing.me`就运行在狗云的环境下，访问速度还是不错的，可以自行看看效果

- [服务状态页](https://status.ysicing.cloud/)
- [探针](https://nzops.ysicing.cloud/)

:::

## 推荐

目前在用的经典云(`hk.mini`, 150一年)，活动特价🐔就不提了哈。

如果自己有境外机器可以碰碰运气, 开启幸运模式(看运气，可能开的ip第二天就好了)

:::tip 幸运模式
幸运模式下系统会分配中国大陆屏蔽的IP给您，即中国大陆无法访问，海外可正常访问，但是我们会将实际创建周期（不含续费周期）翻倍，这期间将无法更换IP，也不能退款，什么时候中国大陆可以访问全靠运气。
:::

:::note 特别说明

- 如果你有ipv6, 开启幸运模式可能白嫖一年哈哈，因为绝大多数都是ipv4被屏蔽了
- 狗云有锁硬盘IO, 但是正常读写问题不大
:::

![dogyun](/images/blog/20230317/dogyun.jpg)

## 测试

<details>
<summary><code>wget -qO- bench.sh | bash</code></summary>

```bash title="wget -qO- bench.sh | bash"
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2022-06-01
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E5-2696 v3 @ 2.30GHz
 CPU Cores          : 1 @ 2299.996 MHz
 CPU Cache          : 16384 KB
 AES-NI             : Enabled
 VM-x/AMD-V         : Enabled
 Total Disk         : 14.2 GB (5.2 GB Used)
 Total Mem          : 975.1 MB (629.6 MB Used)
 Total Swap         : 477.0 MB (233.6 MB Used)
 System uptime      : 18 days, 23 hour 27 min
 Load average       : 0.08, 0.12, 0.14
 OS                 : Debian GNU/Linux 11
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.0.0-0.deb11.6-amd64
 TCP CC             : bbr
 Virtualization     : KVM
 Organization       : AS55933 Cloudie Limited
 Location           : Hong Kong / HK
 Region             : Central and Western
----------------------------------------------------------------------
 I/O Speed(1st run) : 63.9 MB/s
 I/O Speed(2nd run) : 49.9 MB/s
 I/O Speed(3rd run) : 51.2 MB/s
 I/O Speed(average) : 55.0 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency
 Speedtest.net    29.94 Mbps        29.70 Mbps          2.30 ms
 Los Angeles, US  30.80 Mbps        29.51 Mbps          147.20 ms
 Dallas, US       30.00 Mbps        29.54 Mbps          174.27 ms
 Montreal, CA     29.21 Mbps        32.04 Mbps          193.59 ms
 Paris, FR        29.94 Mbps        28.98 Mbps          205.66 ms
 Amsterdam, NL    25.64 Mbps        32.41 Mbps          189.05 ms
 Shanghai, CN     27.11 Mbps        29.49 Mbps          338.12 ms
 Nanjing, CN      7.26 Mbps         30.30 Mbps          92.96 ms
 Guangzhou, CN    30.98 Mbps        30.64 Mbps          60.92 ms
 Hongkong, CN     29.92 Mbps        31.06 Mbps          37.53 ms
 Singapore, SG    29.52 Mbps        30.33 Mbps          35.81 ms
 Tokyo, JP        30.10 Mbps        29.58 Mbps          49.37 ms
----------------------------------------------------------------------
 Finished in        : 7 min 6 sec
 Timestamp          : 2023-03-17 20:05:37 HKT
----------------------------------------------------------------------
```

</details>

脚本2没跑完就挂了哈哈

```bash
curl -sL yabs.sh | bash
```

## 总结

总体来说，对于流量不大的站点，还是比较适合的。

访问速度和国内的机房基本没差别了。

有兴趣的可以月付15元上车体验一下～

### 其他补充

- 根据小道消息, 请慎重选择<b>香港CMI线路</b>
- 被打了，会绕美清洗,恢复后会调整回来(很正常😂)

### 测试ip

```bash title="经典/香港特惠-HK.MINI"
45.153.130.255
```
