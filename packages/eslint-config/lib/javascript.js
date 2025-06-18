import stylistic from '@stylistic/eslint-plugin'
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';

export const configJavascript = defineConfig([
  {
    name: "recommended/js",
    files: ['**/*.{js,mjs,cjs'],
    extends: [
    js.configs.recommended,
    stylistic.configs.recommended,
  ],
  rules: {
    'no-irregular-whitespace': 'off',
      '@stylistic/array-element-newline': ['error', 'consistent'],
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
