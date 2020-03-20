#!/bin/bash

# deploy nfs provide

nfsip=${1:-127.0.0.1}
nfspath=${2:-/k8sdata}

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
              value: $nfsip
            - name: NFS_PATH
              value: $nfspath
          image: 'ysicing/nfs-client-provisioner'
          name: nfs-client-provisioner
          volumeMounts:
            - mountPath: /persistentvolumes
              name: nfs-client-root
      serviceAccountName: eip-nfs-client-provisioner
      volumes:
        - name: nfs-client-root
          nfs:
            path: $nfspath
            server: $nfsip

---
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  annotations:
    k8s.eip.work/storageType: nfs_client_provisioner
    storageclass.kubernetes.io/is-default-class: 'true'
  name: nfsdata
parameters:
  archiveOnDelete: 'false'
provisioner: nfs-provisioner
reclaimPolicy: Delete
volumeBindingMode: Immediate
EOF

kubectl apply -f /tmp/deploy.nfs.yaml

rm -rf /tmp/deploy.nfs.yaml


