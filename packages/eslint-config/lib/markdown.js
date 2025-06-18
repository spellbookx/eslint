import markdown from '@eslint/markdown'
import { defineConfig } from 'eslint/config'

export const configMarkdown = defineConfig([
  {
    name: "recommended/markdown",
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
  }
]);

export default configMarkdown;
