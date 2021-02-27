## OpenEBS安装

### 节点详情

```bash
# Debian 10.8, 5.10内核, k8s 1.18.16
172.16.74.102
172.16.74.103
172.16.74.104
172.16.74.105
```

### 验证iSCSI是否安装

```bash
ergo ops exec --ip 172.16.74.102 --ip 172.16.74.103  --ip 172.16.74.104 --ip 172.16.74.105  --pk .ssh/id_rsa "apt-get install open-iscsi -y"
ergo ops exec --ip 172.16.74.102 --ip 172.16.74.103  --ip 172.16.74.104 --ip 172.16.74.105  --pk .ssh/id_rsa "cat /etc/iscsi/initiatorname.iscsi"
ergo ops exec --ip 172.16.74.102 --ip 172.16.74.103  --ip 172.16.74.104 --ip 172.16.74.105  --pk .ssh/id_rsa "systemctl enable --now iscsid"
```


### helm安装

```
# 添加仓库
helm repo add openebs https://openebs.github.io/charts
helm repo update
# 安装
kubectl create ns openebs
helm upgrade -i openebs -n openebs openebs/openebs --version 2.6.0 -f https://raw.githubusercontent.com/ysicing/helminit/master/openebs/openebs/values.yaml
# 默认调整为阿里云镜像了,如果不需要
helm upgrade -i openebs -n openebs openebs/openebs --version 2.6.0
```

### 验证安装

验证StorageClasses

```bash
kubectl get sc
NAME                        PROVISIONER                                                RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
openebs-device              openebs.io/local                                           Delete          WaitForFirstConsumer   false                  93m
openebs-hostpath            openebs.io/local                                           Delete          WaitForFirstConsumer   false                  93m
openebs-jiva-default        openebs.io/provisioner-iscsi                               Delete          Immediate              false                  93m
openebs-snapshot-promoter   volumesnapshot.external-storage.k8s.io/snapshot-promoter   Delete          Immediate              false                  93m
```

验证块设备
```
kubectl get blockdevice -n openebs
NAME                                           NODENAME   SIZE          CLAIMSTATE   STATUS   AGE
blockdevice-0d6e2969bb45a679502dd368d13ca934   k104       53686025728   Unclaimed    Active   94m
blockdevice-66052cdc7d61d6959c65f36f6fc90721   k103       53686025728   Claimed      Active   94m
```

## 文档

[quickstart](https://docs.openebs.io/docs/next/quickstart.html)