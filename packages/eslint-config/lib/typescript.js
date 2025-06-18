import tseslint, { configs } from 'typescript-eslint'
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin'
import importPlugin from "eslint-plugin-import";

export const configTypescript = tseslint.config({
  name: 'recommended/ts',
  files: ['**/*.{ts,mts,cts}'],
  extends: [
    js.configs.recommended,
  configs.recommended,
  configs.strictTypeChecked,
  stylistic.configs.recommended,
  configs.stylisticTypeChecked,
  ],
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    '@stylistic': stylistic,
    'import': importPlugin,
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    'no-irregular-whitespace': 'off',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@stylistic/array-element-newline': ['error', 'consistent'],
    "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": false
    }]
  },
})

export default configTypescript;