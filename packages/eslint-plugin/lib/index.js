import configGlobalIgnores from './configs/global-ignores.js'
import configJavascript from './configs/javascript.js'
import configTypescript from './configs/typescript.js'
import configJson from './configs/json.js'
import configJson5 from './configs/json5.js'
import configJsonc from './configs/jsonc.js'
import configMarkdown from './configs/markdown.js'
import pkg from '../package.json' with { type: 'json' }

/**
 * @type {import('eslint').ESLint}
 */
const plugin = {
  meta: {
    name: pkg.name.split('/')[1],
    version: pkg.version,
    namespace: pkg.name.split('/')[0],
  },
  configs: {
    'recommended': [].concat(
      ...configGlobalIgnores,
      ...configJavascript,
      ...configTypescript,
      ...configJson,
      ...configJson5,
      ...configJsonc,
      ...configMarkdown,
    ),
    'global-ignores': configGlobalIgnores,
    'javascript': configJavascript,
    'typescript': configTypescript,
    'json': configJson,
    'json5': configJson5,
    'jsonc': configJsonc,
    'markdown': configMarkdown,
  },
  rules: {},
  processors: {},
}

export default plugin
