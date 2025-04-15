/** @type {import('eslint').Linter.FlatConfigItem[]} */
module.exports = [
    {
      languageOptions: {
        parser: require('@typescript-eslint/parser'),
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
        },
        globals: {
          __dirname: 'readonly',
          process: 'readonly',
          module: 'writable',
          require: 'readonly',
        },
      },
      plugins: {
        '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      },
      rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
];
  