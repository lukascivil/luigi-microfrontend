module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    "no-unused-vars": "off",
  },
  plugins: ["@typescript-eslint"],
  ignorePatterns: [
    "node_modules",
    "test-app",
    "*.config.js",
    "public/*.js",
    "public/index.d.ts",
    "coverage",
    "cypress",
    "*.md",
    "*.map",
    "*.json",
    ".*.*",
  ],
  globals: {
    globalThis: false,
  },
};
