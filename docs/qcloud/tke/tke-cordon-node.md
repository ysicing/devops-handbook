---
title: tke集群禁止调度注意事项
tag:
- 容器服务
---

# tke集群禁止调度注意事项

节点禁止调度前，需要确定有没有svc是lb模式且`ExternalTrafficPolicy`为`Local`的节点，如果有，需要先将其调整为`Cluster`模式。

原因:

> TKE Service Controller 默认不会将以下节点作为负载均衡后端：

- Master 节点（不允许 Master 节点参与网络接入层的负载）。
- 节点状态为 NotReady 或节点被设置为 Unschedulable（节点不健康或不可调度）。

## 参考文档

- [腾讯云Service后端选择](https://cloud.tencent.com/document/product/457/45492)
