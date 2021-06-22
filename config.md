## index.js 配置

> ### 全局注入 scss （<font color='red'>修改一次需要重新启动项目才能生效</font>）

```
sass: {
  resource: path.resolve(__dirname, '..', 'src/styles/index.scss')
},
```

### 优化配置

### js

#### terser 配置 https://github.com/terser/terser#minify-options

- > ### javascript production 去除 console.log 删除注释

```
terser: {
  enable: true,
  comments: false, // 删除注释
  config: {
    compress: {
      drop_console: true,
      pure_funcs:  ['console.log'] // 移除console
    }
  }
},
```

> ### 设定转换尺寸上限

```
url: {
  enable: true,
  config: {
    limit: 10240 // 设定转换尺寸上限
  }
},
```

> ### 定义项目路径别名，简化路径引用与查找速度（同时需要配置 ts 文件防止编辑器警告）

```
alias: {
  '@': path.resolve(__dirname, '..', 'src'),
  '@@': path.resolve(__dirname, '..', '')
},
```

> ### 代码编译后的生产目录--打包 h5|小程序...不冲突

```
outputRoot: `dist/${process.env.TARO_ENV}`,
```

> ### 用来配置一些全局变量供代码中进行使用 （判断是在那个环境）

```
defineConstants: {
  IS_H5: process.env.TARO_ENV === "h5",
  IS_RN: process.env.TARO_ENV === "rn",
  IS_WEAPP: process.env.TARO_ENV === "weapp"
},
```
