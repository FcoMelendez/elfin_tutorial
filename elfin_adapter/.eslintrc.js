module.exports = {
  extends: "tamia",
  parserOptions: {
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "valid-jsdoc": 0
  }
};
