import { defineConfig } from 'eslint/config';

import { configGlobalIgnores } from './global-ignores.js'
import { configEslintConfigFile} from './eslint-config.js'
import { configJavascript } from './javascript.js'
import {configTypescript} from './typescript.js';
import { configJson } from './json.js';
import {configJsonc} from './jsonc.js';
import { configJson5 } from './json5.js';
import {configMarkdown} from './markdown.js';

export default defineConfig([
  configGlobalIgnores,
  configEslintConfigFile,
  configJavascript,
  configTypescript,
  configJson,
  configJsonc,
  configJson5,
  configMarkdown
])