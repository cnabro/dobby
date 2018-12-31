module.exports = {
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "typescript-eslint-parser",
      plugins: ["typescript"],
      rules: {
        "no-undef": "off",
        "typescript/no-unused-vars": "error",
        "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],
        "react/prefer-stateless-function": "off",
        "jsx-a11y/label-has-for": "off",
      },
    },
  ],
};
