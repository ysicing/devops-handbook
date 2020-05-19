---
title: "vscode配置"
date: 2020-05-18T22:55:18+08:00
description: "vscode配置"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: outer
tocLevels: ["h2", "h3", "h4"]
tags: 
- vscode
- go
series:
-
categories: 
- 
image:
---

## vscode配置

### 安装好Go相关插件，配置工具包

使用`command+shift+P`快捷键,然后键入`Go: Install/Update Tools`选中全部(根据需要),稍等片刻，就会安装完成。

### 自定义配置项

```json
{
    "git.autofetch": true,
    "files.autoSave": "onWindowChange",
    "workbench.colorTheme": "Go - Sources",
    "terminal.integrated.shell.osx": "/bin/zsh",
    "go.autocompleteUnimportedPackages": true,
    "go.gocodeAutoBuild": true,
    "go.useLanguageServer": true,
    "goOutliner.enableDebugChannel": true,
    "goOutliner.extendExplorerTab": true,
    "go.inferGopath": true,
    "go.docsTool": "godoc",
    "go.gocodePackageLookupMode": "go",
    "go.gotoSymbol.includeImports": true,
    "go.useCodeSnippetsOnFunctionSuggest": true, //使用代码片段提示
    "go.useCodeSnippetsOnFunctionSuggestWithoutType": true,
    "go.formatTool": "goimports", //代码格式化
   // "go.buildOnSave": true, //保存代码时自动编译
    "go.lintOnSave": "file", //保存代码时优化
    "go.vetOnSave": "package", //保存代码时检查潜在错误
    "go.coverOnSave": false //保存代码时执行测试
}
```

