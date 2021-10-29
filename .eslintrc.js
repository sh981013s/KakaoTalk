module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/react-in-jsx-scope': 'off',
  },
};
