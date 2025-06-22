import markdown from '@eslint/markdown'
import { defineConfig } from 'eslint/config'

const configMarkdown = defineConfig([
  {
    files: ['**/*.md'],
    plugins: {
      markdown: markdown,
    },
    language: 'markdown/gfm',
    languageOptions: {
      frontmatter: 'yaml',
    },
    rules: {
      'no-irregular-whitespace': 'off',
    },
  },
])

export default configMarkdown
