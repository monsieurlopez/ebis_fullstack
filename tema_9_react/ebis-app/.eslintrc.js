module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // React specific
    'react/react-in-jsx-scope': 'off', // React 17+ no necesita importar React en scope
    'react/prop-types': 'off', // Usamos TS para tipos, no prop-types

    // Common best practices
    'no-unused-vars': 'off', // apagado para usar TS @typescript-eslint/no-unused-vars
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    // Hooks rules
    'react-hooks/rules-of-hooks': 'error', // verificar reglas de hooks
    'react-hooks/exhaustive-deps': 'warn', // verificar dependencias en useEffect

    // Estilo de código
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'comma-dangle': ['error', 'only-multiline'],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
