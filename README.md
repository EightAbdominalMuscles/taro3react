### 目录结构

```
  styles
    index.scss 全局公用scss，不需要引用 (修改时无法监听到，需要重启动项目才能生效)
```

### commit 提交规范： https://github.com/conventional-changelog/commitlint#getting-started

- value

```
[
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
];
```

执行

```
git commit -m 'fix: xxxxx'
```

### 检查代码质量与风格

> ### Eslint 规范 (检查代码质量与风格的工具) https://github.com/eslint/eslint
>
> 说明

1. taro 自带规范 -> 规范文档：https://www.npmjs.com/package/eslint-config-taro
2. prettier 将 Eslint 的代码风格接管
   禁用所有和 prettier 冲突的代码格式
   将所有 prettier 规则导入 ESlint 中

vscode 安装插件
ESLint 可以让格式不对的地方进行高亮

> ### Prettier 专注于代码排版(提供了一套完美的代码排版)，但不会关心你的代码质量。 https://prettier.io/docs/en/install.html https://github.com/prettier/prettier/tree/main/docs
>
> 当代码格式不对，在提交的时候自动修复

```

vscode 安装插件 https://github.com/prettier/prettier-vscode
  搜索Prettier - Code formatter
    1. git commit '' 时自动格式化代码
    2. shift + command + p 后输入 Format Document 手动格式化
    3. shift + option + f 快捷键手动格式化
    4. 手动设置 ctrl + s 的时候格式化代码
      // Set the default
      "editor.formatOnSave": false,
      // Enable per-language
      "[javascript]": {
          "editor.formatOnSave": true
      }
```

### typescript 配置

- 中文文档 https://typescript.bootcss.com/compiler-options.html
- 英文 https://www.typescriptlang.org/docs/handbook/compiler-options.html

### 插件引入

taro-ui https://taro-ui.jd.com/#/docs/introduction
