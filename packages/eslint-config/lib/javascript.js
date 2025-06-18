import stylistic from '@stylistic/eslint-plugin'
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';

export const configJavascript = defineConfig([
  {
    name: "recommended/js",
    files: ['**/*.{js,mjs,cjs'],
    extends: [
    js.configs.recommended,
    stylistic.configs.recommended,
  ],
  plugins: {
    '@stylistic': stylistic,
    'import': importPlugin,
  },
  rules: {
    'no-irregular-whitespace': 'off',
      '@stylistic/array-element-newline': ['error', 'consistent'],
      'import/prefer-default-export': 'off',
    "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": false
    }],
  }
  },
])

export default configJavascript