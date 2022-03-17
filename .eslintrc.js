module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      }
    ]
  },

  'extends': [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/prettier'
  ]
};
