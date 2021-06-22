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
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
};
