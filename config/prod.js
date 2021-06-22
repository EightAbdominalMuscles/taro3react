module.exports = {
  terser: {
    enable: true,
    config: {
      comments: false,
      compress: {
        drop_console: true,
        pure_funcs: ["console.log"], // 移除console
      },
      // 配置项同 https://github.com/terser/terser#minify-options
    },
  },
  // csso: {
  //   enable: true,
  //   config: {
  //     // 配置项同 https://github.com/css/csso#minifysource-options
  //   }
  // },
  env: {
    NODE_ENV: '"production"',
  },
  defineConstants: {},
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  },
};
