## k8s 资源管理的权限控制

在k8s中，由系统自身的接口来创建和管理的账号类型只有一种，叫做`ServiceAccount`。
可以使用下面的命令来查看目前系统已有的`ServiceAccount`，简写`sa`

```
➜  ~ kubectl get sa
NAME      SECRETS   AGE
default   1         2d8h
```

查看sa具体定义

```
➜  ~ kubectl get sa default -o yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  creationTimestamp: "2020-01-05T06:27:59Z"
  name: default
  namespace: default
  resourceVersion: "428"
  selfLink: /api/v1/namespaces/default/serviceaccounts/default
  uid: 9881e9a3-4097-44b4-a9e3-e5a9d4e516e0
secrets:
- name: default-token-8xcpl # 引用了名为default-token-8xcpl的secrets

➜  ~ kubectl get secrets default-token-8xcpl  -o yaml
apiVersion: v1
data:
  ca.crt: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN5akNDQWJLZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQ0FYRFRJd01ERXdOVEEyTWpjeE5Gb1lEekl4TVRneE1qRXlNRFl5TnpFMFdqQVZNUk13RVFZRApWUVFERXdwcmRXSmxjbTVsZEdWek1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBCnoyS0ttbzh2emdXWE1WR09hSy9DeWk2cGZ2T0psWUMxd1paRTdWS3IwTENFZDBQWXVKbk10NStQdVhKUkw4OFUKK2t2U0RGRm1RS3J6QUhCN0IwNGVybEwyd0NHeDZwa2FIOFBMMTJqKzdUUW5VS2doa1lHb1ZxUjNKV3NTSS9jcwo0ampGWTJyVmY3Z3pDNG9LbHlBc2VRdXFRaERPV004emtCalFYa3gyZVdnSSthRFNpOHd5SHNSNXZwK0Y4TkNOCnEreHY3bFczOERBcTB2SGlSYnBlZHVCTWpUTksyaHlYYWpyeFpWNTZxTTdnRUJWcVBjRCtUWmQySGs2SGQ2dlgKaGhTeTdUQ3lOY1kvbi9HNjRscTBUaG9JZTBWaFBncG8rU3JzRXVOVTBqWlFmRllDMDRWZlluSU0yZmxuSkY5YQpVWjkraVEza25ZR3RmSTA4cXRScjh3SURBUUFCb3lNd0lUQU9CZ05WSFE4QkFmOEVCQU1DQXFRd0R3WURWUjBUCkFRSC9CQVV3QXdFQi96QU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FRRUFOWHdQUkRLd05yMEFzMVpiN1NWWnVQeSsKMVhtbWhWS3dVUmVROXF2QjQwWU5sTVBKMVVqbUNyVmdVRmM4WldmUEhwTmZ6Z2dXTUJUbFFrZDhOK1NhTHB3bAo0bTJtMlpmTTV6Q3R2QVg2MzhHZUVPYTViVkNHcXhudUNVOWQxb2p0M2JZSkYwZGxSMy9VY3FpaDRaeEdUL0syCkJweEZ5QXBRRUZ0elhVZmE0dTBYcFBwUU1aa2txK2hkd01mZjQ3VlBma3NUazUvN2ZaK08vUXk4SElSM00wWFEKUWZyRWpIRXRwL2VSU1hENm95ZHF4R2RKL0pOWU4rKzJYU05lRm51bDFOakh2bG1IT1JpRDI2S2Rqb24vT1Y5cgplYlp0T1oxRmJPVVVFNktJRG9CWTJIK0JCWVppNkwzajJBRkpFTFozWE5tNUdlSTB0NGduWW8zSXU0SnRmZz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K
  namespace: ZGVmYXVsdA==
  token: ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkltUnBTa2RCWlZwcVMwOVdOVmxCVDJkemQySTBkRlpPVVVkRlVHOVZYMXB0VDA1Q1dXeG5UVGhhTVdjaWZRLmV5SnBjM01pT2lKcmRXSmxjbTVsZEdWekwzTmxjblpwWTJWaFkyTnZkVzUwSWl3aWEzVmlaWEp1WlhSbGN5NXBieTl6WlhKMmFXTmxZV05qYjNWdWRDOXVZVzFsYzNCaFkyVWlPaUprWldaaGRXeDBJaXdpYTNWaVpYSnVaWFJsY3k1cGJ5OXpaWEoyYVdObFlXTmpiM1Z1ZEM5elpXTnlaWFF1Ym1GdFpTSTZJbVJsWm1GMWJIUXRkRzlyWlc0dE9IaGpjR3dpTENKcmRXSmxjbTVsZEdWekxtbHZMM05sY25acFkyVmhZMk52ZFc1MEwzTmxjblpwWTJVdFlXTmpiM1Z1ZEM1dVlXMWxJam9pWkdWbVlYVnNkQ0lzSW10MVltVnlibVYwWlhNdWFXOHZjMlZ5ZG1salpXRmpZMjkxYm5RdmMyVnlkbWxqWlMxaFkyTnZkVzUwTG5WcFpDSTZJams0T0RGbE9XRXpMVFF3T1RjdE5EUmlOQzFoT1dVekxXVTFZVGxrTkdVMU1UWmxNQ0lzSW5OMVlpSTZJbk41YzNSbGJUcHpaWEoyYVdObFlXTmpiM1Z1ZERwa1pXWmhkV3gwT21SbFptRjFiSFFpZlEub1NwZ0w4V3liYlJEb0tvYUpxclJ1RkxGOUN6SW1tdlo3VEtWU1RXdVpnWVpCWTRRZ092NjVCbGFLTF9qQU9DSFNyQzd6WW5pSjlXVDVCcVd2N3dfQU9XdEhURVJWSU00Y3I5LXh6LUxMRHZ6bl9qZlNIR0VoSnBPZHZnMGppRFZydi0xanJOb2g1S3VKMGw0TlNULVBnemtUQTU5bWhfNzdodFRtdzJfaDJCWHNDWDBROFg1dm5uMTBMVFJaeHRtNnZTank5dVRIcUZpa0pkU2pTX2c1SjJiS3BXVW1sZnl6OWNKTkliNWhDS0hYVEYyWGlDaG9vMlI3RmdvcHc5X1ltNWxLc2JudGh0bHA5TDUzZ2M2UV9IUkRvb05hSk04RHZndTNybXJheUhPa193RkFTbE1XZ2NkZzF0OGNjYXIwM1V0aWZ5RElDS2s1OTBMM2d2T0hR
kind: Secret
metadata:
  annotations:
    kubernetes.io/service-account.name: default
    kubernetes.io/service-account.uid: 9881e9a3-4097-44b4-a9e3-e5a9d4e516e0
  creationTimestamp: "2020-01-05T06:27:59Z"
  name: default-token-8xcpl
  namespace: default
  resourceVersion: "421"
  selfLink: /api/v1/namespaces/default/secrets/default-token-8xcpl
  uid: 2f07379e-80bb-4c24-a3e3-8a37d1c4c9fb
type: kubernetes.io/service-account-token
```

### 创建sa

```
➜  ~ kubectl create sa ysicing
serviceaccount/ysicing created

➜  ~ kubectl get sa ysicing -o yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  creationTimestamp: "2020-01-07T14:40:07Z"
  name: ysicing
  namespace: default
  resourceVersion: "134248"
  selfLink: /api/v1/namespaces/default/serviceaccounts/ysicing
  uid: e5f19802-a196-47d6-b194-3684642357ef
secrets:
- name: ysicing-token-zvgr4

# 获取token,这里token是原始token，未经过base64加密
kubectl describe secrets ysicing-token-zvgr4
```

测试请求k8s api,发现还是403.

```
➜  ~ curl -k  https://192.168.100.101:6443/healthz/ping -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImRpSkdBZVpqS09WNVlBT2dzd2I0dFZOUUdFUG9VX1ptT05CWWxnTThaMWcifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6InlzaWNpbmctdG9rZW4tenZncjQiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoieXNpY2luZyIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImU1ZjE5ODAyLWExOTYtNDdkNi1iMTk0LTM2ODQ2NDIzNTdlZiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OnlzaWNpbmcifQ.D6L4y4N8e6IzGdiLcRMT_hxtJ2fhLsNTJs4hh7NJlEEulyvklwuA2AFWpdvw5aRXx5DVoHZq__bZ1M2s3-wP_hL57IsoLgW9yFb2GVpnwFXOGe_YipyYcqaVkhpNd7GKjMMxS2IKOdYsX-yBreQsI8x77WPb3ux6TNTFTCv2mmLl1P-0c9TCeeyjjHACYUnV07oHwRk7CJ5ee_S34ZZkEz-ulf2E7xm5cwqWUd738WrN8LwK6p293WwBHeAh3fgK2iAgu5W-PZRFY_5_mV8fAJCVJ-E95WVQUplfuCLQBUx33mDseMuW7keCUJg2JkeSnE3mw_K09EuAt8EXkCDkWQ'
{
  "kind": "Status",
  "apiVersion": "v1",
  "metadata": {

  },
  "status": "Failure",
  "message": "forbidden: User \"system:serviceaccount:default:ysicing\" cannot get path \"/healthz/ping\"",
  "reason": "Forbidden",
  "details": {

  },
  "code": 403
}
```

k8s对资源操作权限划分的比较详细:

- 写权限
    - create
    - update
    - delete
    - patch
- 读权限 
    - get
    - list
    - watch

配置sa ysicing访问资源,即配置 `.kube/config`

```
# 配置sa ysicing token鉴权信息
kubectl config set-credentials ysicing --token eyJhbGciOiJSUzI1NiIsImtpZCI6ImRpSkdBZVpqS09WNVlBT2dzd2I0dFZOUUdFUG9VX1ptT05CWWxnTThaMWcifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6InlzaWNpbmctdG9rZW4tenZncjQiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoieXNpY2luZyIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImU1ZjE5ODAyLWExOTYtNDdkNi1iMTk0LTM2ODQ2NDIzNTdlZiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OnlzaWNpbmcifQ.D6L4y4N8e6IzGdiLcRMT_hxtJ2fhLsNTJs4hh7NJlEEulyvklwuA2AFWpdvw5aRXx5DVoHZq__bZ1M2s3-wP_hL57IsoLgW9yFb2GVpnwFXOGe_YipyYcqaVkhpNd7GKjMMxS2IKOdYsX-yBreQsI8x77WPb3ux6TNTFTCv2mmLl1P-0c9TCeeyjjHACYUnV07oHwRk7CJ5ee_S34ZZkEz-ulf2E7xm5cwqWUd738WrN8LwK6p293WwBHeAh3fgK2iAgu5W-PZRFY_5_mV8fAJCVJ-E95WVQUplfuCLQBUx33mDseMuW7keCUJg2JkeSnE3mw_K09EuAt8EXkCDkWQ

User "ysicing" set.

# 配置集群访问信息
# .kube/ca.crt 从192.168.100.101:/etc/kubernetes/pki/ca.crt获取的
➜  ~ kubectl config set-cluster local --server https://192.168.100.101:6443 --certificate-authority .kube/ca.crt --embed-certs=true
Cluster "local" set.

# 配置context, 将cluster & user 绑定
➜  ~ kubectl config set-context local-ctx --cluster local --user ysicing
Context "local-ctx" created.

# 切换ctx
➜  ~ kubectl config use-context local-ctx
Switched to context "local-ctx".
```

请求接口

```
➜  ~ kubectl get pods
Error from server (Forbidden): pods is forbidden: User "system:serviceaccount:default:ysicing" cannot list resource "pods" in API group "" in the namespace "default"
```

### 授权配置

- 创建角色，定义资源操作权限(ClusterRole/Role)
- 角色绑定，将角色与Sa绑定(ClusterRoleBinding/RoleBinding)

```
# 创建角色
➜  ~ kubectl create role ysicing-role --resource pod,service,deployment,secret,ingress --verb create,update,delete,patch,get,list,watch
role.rbac.authorization.k8s.io/ysicing-role created

➜  ~ kubectl get roles
NAME           AGE
ysicing-role   34s

# 角色绑定
➜  ~ kubectl create rolebinding ysbot.ysicing-binding --role ysicing-role --serviceaccount default:ysicing
rolebinding.rbac.authorization.k8s.io/ysbot.ysicing-binding created
```

再次获取pods信息

```
➜  ~ kubectl config use-context local-ctx
Switched to context "local-ctx".
➜  ~ kubectl get pods
NAME                               READY   STATUS    RESTARTS   AGE
demo-deployment-6c5664f4d6-s6w8v   1/1     Running   0          2d4h
```

再次请求`https://192.168.100.101:6443/healthz/ping`发现依旧403，那么给ysicing sa通过ClusterRoleBinding 授予一个名为 cluster-admin 的 ClusterRole

```
➜  ~ kubectl config use-context kubernetes-admin@kubernetes
Switched to context "kubernetes-admin@kubernetes".
➜  ~ kubectl create clusterrolebinding cluster-ysicing --clusterrole cluster-admin --serviceaccount default:ysicing
clusterrolebinding.rbac.authorization.k8s.io/cluster-ysicing created

➜  ~ curl -k  https://192.168.100.101:6443/healthz/ping -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImRpSkdBZVpqS09WNVlBT2dzd2I0dFZOUUdFUG9VX1ptT05CWWxnTThaMWcifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6InlzaWNpbmctdG9rZW4tenZncjQiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoieXNpY2luZyIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImU1ZjE5ODAyLWExOTYtNDdkNi1iMTk0LTM2ODQ2NDIzNTdlZiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OnlzaWNpbmcifQ.D6L4y4N8e6IzGdiLcRMT_hxtJ2fhLsNTJs4hh7NJlEEulyvklwuA2AFWpdvw5aRXx5DVoHZq__bZ1M2s3-wP_hL57IsoLgW9yFb2GVpnwFXOGe_YipyYcqaVkhpNd7GKjMMxS2IKOdYsX-yBreQsI8x77WPb3ux6TNTFTCv2mmLl1P-0c9TCeeyjjHACYUnV07oHwRk7CJ5ee_S34ZZkEz-ulf2E7xm5cwqWUd738WrN8LwK6p293WwBHeAh3fgK2iAgu5W-PZRFY_5_mV8fAJCVJ-E95WVQUplfuCLQBUx33mDseMuW7keCUJg2JkeSnE3mw_K09EuAt8EXkCDkWQ'
ok%

# 真香哈哈哈哈
```

`cluster-admin`权限特别大,实际使用还需要谨慎操作。

```
# 可以查看具体定义
kubectl get role ysicing-role
```