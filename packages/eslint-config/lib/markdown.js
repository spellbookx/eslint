import markdown from '@eslint/markdown'
import { defineConfig } from 'eslint/config'

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  {
    name: "@spellbookx/eslint-markdown-config",
    files: ['**/*.md'],
    plugins: {
      markdown,
    },
    language: 'markdown/gfm',
    languageOptions: {
      frontmatter: 'yaml',
    },
    rules: {
      'no-irregular-whitespace': 'off',
    },
  }
])
