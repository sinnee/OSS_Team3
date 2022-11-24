module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'no-restricted-globals': 'off',
    'default-case': 'off',
    'no-unused-expressions': 'off',
    'no-console': 'off',
    'no-undef': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'global-require': 'off',
    'no-return-assign': 'off',
  },
};

