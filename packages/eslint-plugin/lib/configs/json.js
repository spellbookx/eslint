import { defineConfig } from 'eslint/config'
import json from '@eslint/json'

const configJson = defineConfig([
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    rules: {
      'no-irregular-whitespace': 'off',
      'json/no-duplicate-keys': 'error',
    },
  },
])

export default configJson
