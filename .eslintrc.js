const eslintConfig = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  env: {
    browser: true,
    es2021: true
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    'func-style': ['error', 'declaration', { allowArrowFunctions: false }]
  }
}

module.exports = eslintConfig
