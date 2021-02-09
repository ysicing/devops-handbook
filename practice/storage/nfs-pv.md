## nfs

**nfs**卷能将NFS(NAS)挂载到你Pod中.

nfs内的数据不会因为删除Pod而被删除,卷只是被卸载.

另外nas可以有数据且pod间共享

> 注意： 在使用 NFS 卷之前，你必须有NFS服务并已共享数据。

> 云上可以使用类似阿里云的NAS

## 使用

### 部署nfs服务

```
nfspath="/k8sdata"

# 安装
apt update
apt install -y nfs-kernel-server
# 配置
mkdir ${nfspath}
echo "${nfspath}/ *(insecure,rw,sync,no_root_squash,no_subtree_check)" > /etc/exports
# 启动nfs
systemctl enable rpcbind
systemctl enable nfs-server
systemctl start rpcbind
systemctl start nfs-server
exportfs -r
# 测试
showmount -e 172.16.74.102
```

### 部署nfs-client-provisioner

```yaml
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: nfs-client-provisioner
  namespace: kube-system
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: nfs-client-provisioner-runner
  namespace: kube-system
rules:
  - apiGroups:
      - ''
    resources:
      - persistentvolumes
    verbs:
      - get
      - list
      - watch
      - create
      - delete
  - apiGroups:
      - ''
    resources:
      - persistentvolumeclaims
    verbs:
      - get
      - list
      - watch
      - update
  - apiGroups:
      - storage.k8s.io
    resources:
      - storageclasses
    verbs:
      - get
      - list
      - watch
  - apiGroups:
      - ''
    resources:
      - events
    verbs:
      - create
      - update
      - patch
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: run-nfs-client-provisioner
  namespace: kube-system
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: nfs-client-provisioner-runner
subjects:
  - kind: ServiceAccount
    name: nfs-client-provisioner
    namespace: kube-system
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: leader-locking-nfs-client-provisioner
  namespace: kube-system
rules:
  - apiGroups:
      - ''
    resources:
      - endpoints
    verbs:
      - get
      - list
      - watch
      - create
      - update
      - patch
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: leader-locking-nfs-client-provisioner
  namespace: kube-system
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: leader-locking-nfs-client-provisioner
subjects:
  - kind: ServiceAccount
    name: nfs-client-provisioner
    namespace: kube-system
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: nfs-service
  name: nfs-service
  namespace: kube-system
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nfs-service
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: nfs-service
    spec:
      containers:
        - env:
            - name: PROVISIONER_NAME
              value: nfs-provisioner
            - name: NFS_SERVER
              value: 172.16.74.102
            - name: NFS_PATH
              value: /k8sdata
          image: registry.cn-beijing.aliyuncs.com/k7scn/nfs-client-provisioner
          name: nfs-client-provisioner            
          volumeMounts:
            - mountPath: /persistentvolumes
              name: nfs-client-root
      serviceAccountName: nfs-client-provisioner
      volumes:
        - name: nfs-client-root
          nfs:
            path: /k8sdata
            server: 172.16.74.102
```

### 创建Storageclass

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  annotations:
    storageclass.kubernetes.io/is-default-class: 'true'
  name: nfsdata
parameters:
  archiveOnDelete: 'false'
provisioner: nfs-provisioner
reclaimPolicy: Delete
volumeBindingMode: Immediate
```

验证

```
kubectl get sc
NAME                PROVISIONER       RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
nfsdata (default)   nfs-provisioner   Delete          Immediate           false                  7s
```

### 创建应用并绑定存储

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  ports:
  - port: 80
    name: web
  selector:
    app: nginx
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  selector:
    matchLabels:
      app: nginx # has to match .spec.template.metadata.labels
  serviceName: "nginx"
  replicas: 3 # by default is 1
  template:
    metadata:
      labels:
        app: nginx # has to match .spec.selector.matchLabels
    spec:
      terminationGracePeriodSeconds: 10
      containers:
      - name: nginx
        image: registry.cn-beijing.aliyuncs.com/k7scn/nginx-slim:0.8
        ports:
        - containerPort: 80
          name: web
        volumeMounts:
        - name: www
          mountPath: /usr/share/nginx/html
  volumeClaimTemplates:
  - metadata:
      name: www
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: "nfsdata"
      resources:
        requests:
          storage: 1Gi
```

```bash
 kubectl get sts,pods,svc,pv,pvc -o wide
NAME                   READY   AGE   CONTAINERS   IMAGES
statefulset.apps/web   3/3     84s   nginx        registry.cn-beijing.aliyuncs.com/k7scn/nginx-slim:0.8

NAME        READY   STATUS    RESTARTS   AGE   IP               NODE            NOMINATED NODE   READINESS GATES
pod/web-0   1/1     Running   0          84s   100.72.165.193   k8s-03          <none>           <none>
pod/web-1   1/1     Running   0          57s   100.122.222.2    k8s-cluster02   <none>           <none>
pod/web-2   1/1     Running   0          29s   100.101.2.65     k8s-04          <none>           <none>

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE     SELECTOR
service/nginx        ClusterIP   None         <none>        80/TCP    85s     app=nginx

NAME                                                        CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM               STORAGECLASS   REASON   AGE   VOLUMEMODE
persistentvolume/pvc-b19a2bba-3156-48c3-8b30-56e7031ceeda   1Gi        RWO            Delete           Bound    default/www-web-1   nfsdata                 57s   Filesystem
persistentvolume/pvc-d39852ad-7b80-4650-8cc3-0984d85732fb   1Gi        RWO            Delete           Bound    default/www-web-0   nfsdata                 84s   Filesystem
persistentvolume/pvc-ee6cc8e2-b03b-4c4b-b72a-f39381431e4c   1Gi        RWO            Delete           Bound    default/www-web-2   nfsdata                 29s   Filesystem

NAME                              STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE   VOLUMEMODE
persistentvolumeclaim/www-web-0   Bound    pvc-d39852ad-7b80-4650-8cc3-0984d85732fb   1Gi        RWO            nfsdata        84s   Filesystem
persistentvolumeclaim/www-web-1   Bound    pvc-b19a2bba-3156-48c3-8b30-56e7031ceeda   1Gi        RWO            nfsdata        57s   Filesystem
persistentvolumeclaim/www-web-2   Bound    pvc-ee6cc8e2-b03b-4c4b-b72a-f39381431e4c   1Gi        RWO            nfsdata        29s   Filesystem
```