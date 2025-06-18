import { defineConfig } from 'eslint/config'
import json from '@eslint/json'

export const configJson5 = defineConfig([
  {
    name: "recommended/json5",
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    rules: {
      'no-irregular-whitespace': 'off',
      'json/no-duplicate-keys': 'error',
    },
  }
]);

export default configJson5;