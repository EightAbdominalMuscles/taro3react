### 目录结构

```
  styles
    index.scss 全局公用scss，不需要引用 (修改时无法监听到，需要重启动项目才能生效)
```

### Eslint 规范

1. taro 自带规范 -> 规范文档：https://www.npmjs.com/package/eslint-config-taro

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

### typescript 配置

- 中文文档 https://typescript.bootcss.com/compiler-options.html
- 英文 https://www.typescriptlang.org/docs/handbook/compiler-options.html

### 插件引入

taro-ui https://taro-ui.jd.com/#/docs/introduction
