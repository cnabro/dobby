module.exports = {
  extends: "airbnb",
  rules: {
    quotes: [
      "error",
      "double"
    ]
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "config/webpack.config.dev.js"
      }
    }
  }
};