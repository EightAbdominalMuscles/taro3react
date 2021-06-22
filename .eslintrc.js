module.exports = {
  extends: ["taro/react", "prettier"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    allowPrimitiveModules: 1,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
};
