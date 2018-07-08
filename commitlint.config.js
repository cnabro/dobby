module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(:(?:\w+):) (.*)$/,
      headerCorrespondence: ["type", "scope", "ticket", "subject"]
    }
  },
  rules: {
    "subject-empty": [0, "always"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        ":sparkles:", // create new file or sth
        ":wrench:", // fix bugs
        ":truck:", // npm install
        ":lipstick:", // style things, modify css or sth
        ":memo:", // for docs
        ":speech_balloon:", // apply PR review
        ":scissors:", // for rollback, revert,
        ":heavy_check_mark:" // for test
      ]
    ]
  }
};
