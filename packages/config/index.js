import javascript from './lib/javascript.mjs'
import markdown from './lib/markdown.mjs'
import json from './lib/json.mjs'
import stylistic from './lib/stylistic.mjs'

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