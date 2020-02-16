##  Kubernetes 上搭建 EFK 日志收集系统

> Kubernetes 中比较流行的日志收集解决方案是 Elasticsearch、Fluentd 和 Kibana（EFK）技术栈，也是官方现在比较推荐的一种方案。

- `Elasticsearch`是一个实时的、分布式的可扩展的搜索引擎，允许进行全文、结构化搜索，它通常用于索引和搜索大量日志数据，也可用于搜索许多不同类型的文档。

- `Kibana`是`Elasticsearch`的一个功能强大的数据可视化 Dashboard，`Kibana`允许你通过 web 界面来浏览`Elasticsearch`日志数据。

- `Fluentd`是一个流行的开源数据收集器，我们将在 Kubernetes 集群节点上安装 `Fluentd`，通过获取容器日志文件、过滤和转换日志数据，然后将数据传递到 `Elasticsearch`集群，在该集群中对其进行索引和存储。