module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'airbnb/hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 15,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/function-component-definition': [0],
    'jsx-a11y/control-has-associated-label': 'off',
    'eol-last': 'off',
    'no-unused-vars': 'error',
    'object-curly-newline': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-props-no-spreading': [
      2,
      {
        custom: 'ignore',
      },
    ],
    'no-param-reassign': 'off',
    'linebreak-style': 'off',
    indent: ['error', 2],
    semi: 'error',
  },
};
