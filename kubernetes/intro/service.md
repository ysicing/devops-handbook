## K8S中的Service

简单来讲，Service 对外为 Pods 提供统一的入口服务，而 Pods 则处理 Service 转发来的流量。而 Pods 因为扩容、缩容、机器故障引起的迁移等动作往往是时刻可能发生的，这样导致不但是 Pod 的 IP 会发生变化，连 Pod 所在宿主的 Node 也会发生变化，而这些变化都是通过 Service 和 Pods 之间的一个和 Service 同名的资源 Endpoints 来动态维护的。


