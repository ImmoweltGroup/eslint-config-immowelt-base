const rules = require('./rules');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint-config-airbnb-base',
    'plugin:flowtype/recommended',
    'plugin:compat/recommended'
  ],
  plugins: [
    'flowtype',
    'compat'
  ],
  env: {
    node: true,
    browser: true,
    jest: true
  },
  rules
};
