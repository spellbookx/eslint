import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import { defineConfig } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'

const configJavascript = defineConfig([
  {
    files: ['**/*.{js,mjs,cjs'],
    extends: [
      js.configs.recommended,
      stylistic.configs.recommended,
      importPlugin.flatConfigs.recommended,
    ],
    plugins: {
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-irregular-whitespace': 'off',
      '@stylistic/array-element-newline': ['error', 'consistent'],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
])

export default configJavascript
