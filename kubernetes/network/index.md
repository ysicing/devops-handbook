## Ucloud 网络

ucloud默认mtu是 1454

所以calico需要改mtu

```
kubectl patch configmap/calico-config -n kube-system --type merge   -p '{"data":{"veth_mtu": "1404"}}'
```

参考 [Configure MTU to maximize network performance](https://docs.projectcalico.org/networking/mtu)