## 使用nvm进行node版本管理

### 安装nvm

```bash
# 安装
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
# 默认会写.zshrc

### .zshrc nvm start 
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
### .zshrc nvm end

source .zshrc

nvm install node # "node" is an alias for the latest version
```