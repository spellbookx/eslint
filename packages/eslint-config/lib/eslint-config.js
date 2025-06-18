import { defineConfig } from "eslint/config";

export const configEslintConfigFile = defineConfig([
    {
        name: "recommended/eslint-config-file",
    files: ['**/eslint.config.{js,cjs,mjs,ts,mts,cts}'],
    rules: {
      'import/no-unresolved': 'off',
    },
  }
]);

export default configEslintConfigFile;