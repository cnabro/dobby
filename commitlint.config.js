// To update gitmojis.json file run this command!
// wget https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json

const commitType = require("./gitmojis.json");

module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(:(?:\w+):) (.*)$/,
      headerCorrespondence: ["type", "scope", "ticket", "subject"],
    },
  },
  rules: {
    "scope-case": [0, "never"],
    "subject-empty": [0, "always"],
    "type-empty": [2, "never"],
    "type-enum": [2, "always", commitType.gitmojis.map(v => v.code)],
  },
};
