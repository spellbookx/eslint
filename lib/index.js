import javascript from './eslint/javascript.mjs'
import markdown from './eslint/markdown.mjs'
import json from './eslint/json.mjs'
import stylistic from './eslint/stylistic.mjs'

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/package-lock.json',
      '**/package.json',
      'pnpm-lock.yaml',
    ],
  },
  {
    files: ['**/eslint.config.{js,cjs,mjs,ts,mts,cts}'],
    rules: {
      'import/no-unresolved': 'off',
    },
  },
  {
    files: ['**/*.json',
      '**/*.jsonc',
      '**/*.json5'],
    rules: {
      'no-irregular-whitespace': 'off',
    },
  },
  ...stylistic,
  ...javascript,
  ...json,
  ...markdown,
  {
    rules: {
      'no-irregular-whitespace': 'off',
    },
  },
]