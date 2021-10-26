const rules = require('./rules');

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'plugin:compat/recommended'
  ],
  plugins: [
    'compat'
  ],
  env: {
    node: true,
    browser: true,
    jest: true
  },
  rules
};
