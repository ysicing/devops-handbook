---
title: 卸载
tags:
- cilium
---

## 卸载

```bash
  cilium uninstall
  ifconfig cilium_vxlan down
  ifconfig cilium_net down
  ifconfig cilium_host down
  ip link delete cilium_vxlan
  ip link delete cilium_net
```
