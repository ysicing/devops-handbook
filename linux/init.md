## 初始化Debian

> 基础环境配置和安装docker配置

### 操作

```
git clone https://github.com/ysicing/play-ansible.git
cd play-ansible
# 安装ansible,可跳过
./install.sh
# 配置初始化机器
cp inventory.ini.example inventory.ini
# 执行初始化
ansible-playbook init.yml
```

或者参考 [k8s安装部分](/kubernetes/install/index.md) 容器化方式初始化

```bash
docker pull ysicing/ansible
docker run -it --rm ysicing/ansible bash
cp inventory.ini.example inventory.ini
# 初始化系统,安装docker
ansible-playbook all.yml
exit
```