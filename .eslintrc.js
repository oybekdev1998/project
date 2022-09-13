module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./**/tsconfig.json'],
    ecmaFeatures: { jsx: true }
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-no-bind': 'off',
    'react/react-in-jsx-scope': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-children-prop': ['warn', { allowFunctions: true || false }],
    semi: ['error', 'never'],
  }
}
