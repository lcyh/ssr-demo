module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // "type-enum": [2, "always", ["feat", "fix", "revert"]],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "perf", "refactor", "build", "style", "docs", "chore"],
    ],
    "subject-max-length": [1, "always", 30],
  },
};
