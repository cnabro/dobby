module.exports = {
  extends: "airbnb",
  env: {
    browser: true
  },
  rules: {
    quotes: ["error", "double"]
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "config/webpack.config.dev.js"
      }
    }
  }
};
