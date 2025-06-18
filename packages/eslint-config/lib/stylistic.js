import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  {
    name: '@spellbookx/eslint-stylistic-config',
    // Scope stylistic rules to JS/TS files only
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: {
      '@stylistic': stylistic,
    },
    // Merge the recommended config and override specific rules
    rules: {
      ...stylistic.configs.recommended.rules,
      'no-irregular-whitespace': 'off',
      '@stylistic/array-element-newline': ['error', 'consistent'],
    },
  },
])