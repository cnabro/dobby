module.exports = {
  extends: "./config/eslint-rules/index.js",
  rules: {
    quotes: [
      "error",
      "double"
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
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