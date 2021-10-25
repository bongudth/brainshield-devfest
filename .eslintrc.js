module.exports = {
    env: {
        commonjs: true,
        es2021: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        sourceType: "module",
        allowImportExportEverywhere: true,
        ecmaVersion: 12,
    },
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
    },
    parser: "@babel/eslint-parser"
};
