module.exports = {
  extends: [
    "eslint-config-airbnb",
    "./typescript",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    strict: "error",
  },
};
