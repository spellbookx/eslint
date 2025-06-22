import { defineConfig } from 'eslint/config'
import nodePlugin from 'eslint-plugin-n'
import eslintPlugin from 'eslint-plugin-eslint-plugin'
import stylistic from '@stylistic/eslint-plugin'
import spellbookxPlugin from '@spellbookx/eslint-plugin'

export default defineConfig([
  {
    files: ['packages/eslint-plugin/lib/index.js'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    extends: [
      nodePlugin.configs['flat/recommended-script'],
      eslintPlugin.configs['flat/recommended'],
    ],
    plugins: {
      'n': nodePlugin,
      'eslint-plugin': eslintPlugin,
    },
    rules: {
      'n/no-unpublished-import': 'off',
      'n/exports-style': ['error', 'module.exports'],
      'eslint-plugin/require-meta-docs-description': 'error',
      'no-console': 'off',
      'import/no-commonjs': 'off',
      'import/unambiguous': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [
      stylistic.configs.recommended,
    ],
  },
  spellbookxPlugin.configs.recommended,
])
