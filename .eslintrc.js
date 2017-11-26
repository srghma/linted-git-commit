module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  env: {
    'jest/globals': true,
  },
  plugins: ['standard', 'promise', 'react', 'jest'],
  globals: {
    localStorage: true,
  },
  rules: {
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
    'no-console': 'off',
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          Property: true,
          ImportDeclaration: true,
        },
      },
    ],
    'key-spacing': [
      'error',
      {
        mode: 'strict',
        align: 'value',
      },
    ],

    // TODO
    'react/prop-types': 'warn',
    'react/jsx-key': 'warn',
  },
}
