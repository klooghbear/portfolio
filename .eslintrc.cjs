/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "max-len": ["error", 80],
    quotes: ["error", "double", { "allowTemplateLiterals": true }]
  }
}
