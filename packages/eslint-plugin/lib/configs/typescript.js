import tseslint from 'typescript-eslint'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import importPlugin from 'eslint-plugin-import'

export const configTypescript = tseslint.config({
  files: ['**/*.{ts,mts,cts}'],
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    stylistic.configs.recommended,
    tseslint.configs.stylisticTypeChecked,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
  ],
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    '@stylistic': stylistic,
    'simple-import-sort': simpleImportSort,
  },
  rules: {
    'no-irregular-whitespace': 'off',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@stylistic/array-element-newline': ['error', 'consistent'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
})

export default configTypescript
