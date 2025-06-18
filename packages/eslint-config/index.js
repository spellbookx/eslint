import javascript from './lib/javascript.js'
import markdown from './lib/markdown.js'
import json from './lib/json.js'
import stylistic from './lib/stylistic.js'
import { defineConfig } from 'eslint/config'
import { configGlobalIgnores } from 'lib/global-ignores.js'
import configEslintConfigFile from 'lib/eslint-config.js'

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  configGlobalIgnores,
  configEslintConfigFile,
  {
    files: ['**/*.json',
      '**/*.jsonc',
      '**/*.json5'],
    rules: {
      'no-irregular-whitespace': 'off',
    },
  },
  stylistic,
  javascript,
  ...json,
  ...markdown,
  {
    rules: {
      'no-irregular-whitespace': 'off',
    },
  },
])