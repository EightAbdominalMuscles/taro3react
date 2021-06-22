/**
 * taro/react https://www.npmjs.com/package/eslint-config-taro 插件配置文档
 * 规则文档：https://eslint.org/docs/rules/
 * GitHub：https://github.com/eslint/eslint
 */

module.exports = {
  extends: ["taro/react", "prettier"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    indent: ["error", 4], // 每行头部缩进：2字符
    quotes: ["error", "single"], // 字符串引号类型：单引号或反引号（'a'、`a`）
    semi: ["error", "always"], // 表达式结尾是否需要分号：总是需要
    "comma-dangle": ["error", "always-multiline"], // 对象属性和数组项是否必须尾随逗号：多行时必须使用
    // 每行最大长度：最大长度包括代码+注释（忽略一些特殊情况）
    "max-len": [
      "error",
      {
        // 最大长度
        code: 200,
        // 忽略评论代码行最大长度（// This is a really really really really really really really really really long comment）
        ignoreComments: true,
        // 忽略结尾带评论的代码行最大长度（var foo = 'bar'; // This is a really really really really really really really long comment）
        ignoreTrailingComments: true,
        // 忽略带url的代码行最大长度（var url = 'https://www.example.com/really/really/really/really/really/really/really/long';）
        ignoreUrls: true,
        // 忽略带字符串的代码行最大长度（var longString = 'this is a really really really really really long string!';）
        ignoreStrings: true,
        // 忽略带模板字符串的代码行最大长度（var longTemplateLiteral = `this is a really really really really really long template literal!`;）
        ignoreTemplateLiterals: true,
        // 忽略带正则表达式的代码行最大长度（var longRegExpLiteral = /this is a really really really really really long regular expression!/;）
        ignoreRegExpLiterals: true,
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
};
