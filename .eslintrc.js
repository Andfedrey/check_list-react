module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-missing-import': 'off',
    'no-console': 'warn',
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'react/jsx-filename-extension': 0,
    'react/function-component-definition': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
