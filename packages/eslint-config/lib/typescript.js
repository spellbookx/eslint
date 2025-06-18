import tseslint, { configs } from 'typescript-eslint'
import js from '@eslint/js';

/** @type {import('typescript-eslint').Config} */
export default tseslint.config({
  name: 'recommended/js-ts',
  files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
  extends: [
    js.configs.recommended,
  configs.recommended,
  configs.strictTypeChecked
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": false
    }]
  },
})
