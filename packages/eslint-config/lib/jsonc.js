import { defineConfig } from 'eslint/config'
import json from '@eslint/json'

export const configJsonc = defineConfig([
  {
    name: "recommended/jsonc",
    files: ['**/*.jsonc', '**/tsconfig*.json',
      '.vscode/*.json'],
    plugins: { json },
    language: 'json/jsonc',
    rules: {
      'no-irregular-whitespace': 'off',
      'json/no-duplicate-keys': 'error',
    },
  }
]);

export default configJsonc;
