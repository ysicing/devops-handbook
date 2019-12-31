#!/bin/bash

# 安装
apt update
apt install -y nfs-kernel-server
# 配置
mkdir /k8sdata
echo "/k8sdata/ *(insecure,rw,sync,no_root_squash,no_subtree_check)" > /etc/exports
# 启动nfs
systemctl enable rpcbind
systemctl enable nfs-server
systemctl start rpcbind
systemctl start nfs-server
exportfs -r
# 测试
showmount -e 127.0.0.1

# deploy nfs provide

nfsip=$(kubectl get node -o wide | grep $HOSTNAME | awk '{print $6}')

cat > /tmp/deploy.nfs.yaml <<EOF
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: eip-nfs-client-provisioner
  namespace: kube-system

---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: eip-nfs-client-provisioner-runner
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
  name: eip-run-nfs-client-provisioner
  namespace: kube-system
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: eip-nfs-client-provisioner-runner
subjects:
  - kind: ServiceAccount
    name: eip-nfs-client-provisioner
    namespace: kube-system

---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: eip-leader-locking-nfs-client-provisioner
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
  name: eip-leader-locking-nfs-client-provisioner
  namespace: kube-system
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: eip-leader-locking-nfs-client-provisioner
subjects:
  - kind: ServiceAccount
    name: eip-nfs-client-provisioner
    namespace: kube-system

---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: eip-nfs-nfs-test
  name: eip-nfs-nfs-test
  namespace: kube-system
spec:
  replicas: 1
  selector:
    matchLabels:
      app: eip-nfs-nfs-test
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: eip-nfs-nfs-test
    spec:
      containers:
        - env:
            - name: PROVISIONER_NAME
              value: nfs-nfs-test
            - name: NFS_SERVER
              value: $nfsip
            - name: NFS_PATH
              value: /k8sdata
          image: 'ysicing/nfs-client-provisioner'
          name: nfs-client-provisioner
          volumeMounts:
            - mountPath: /persistentvolumes
              name: nfs-client-root
      serviceAccountName: eip-nfs-client-provisioner
      volumes:
        - name: nfs-client-root
          nfs:
            path: /k8sdata
            server: $nfsip

---
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  annotations:
    k8s.eip.work/storageType: nfs_client_provisioner
  name: nfs-test
parameters:
  archiveOnDelete: 'false'
provisioner: nfs-nfs-test
reclaimPolicy: Delete
volumeBindingMode: Immediate
EOF

kubectl apply -f /tmp/deploy.nfs.yaml


