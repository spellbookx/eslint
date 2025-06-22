import { defineConfig } from 'eslint/config'
import json from '@eslint/json'

const configJson5 = defineConfig([
  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    rules: {
      'no-irregular-whitespace': 'off',
      'json/no-duplicate-keys': 'error',
    },
  },
])

export default configJson5
