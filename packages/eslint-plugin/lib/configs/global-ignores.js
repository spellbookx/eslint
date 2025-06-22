import { defineConfig, globalIgnores } from 'eslint/config'

const configGlobalIgnores = defineConfig([
  globalIgnores(['**/node_modules/'], 'Ignore node_modules'),
  globalIgnores(['**/dist/'], 'Ignore dist'),
  globalIgnores(['**/package-lock.json'], 'Ignore package-lock.json'),
  globalIgnores(['**/package.json'], 'Ignore package.json'),
  globalIgnores(['**/yarn.lock'], 'Ignore yarn.lock'),
  globalIgnores(['**/pnpm-lock.yaml'], 'Ignore pnpm-lock.yaml'),
])

export default configGlobalIgnores
