module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  // 解析vue文件
  parser: 'vue-eslint-parser',
  globals: {
    uni: true,
    wx: true,
  },
  rules: {
    // "no-console": import.meta.env.MODE === "production" ? "off" : "off",
    // "no-debugger": import.meta.env.MODE === "production" ? "error" : "off",
  },
};
