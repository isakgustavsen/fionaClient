import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import love from "eslint-config-love";

export default defineConfig([
  // include love's flat configs with their plugins intact
  love,

  // JS and TS recommended flat configs
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // project-level options
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.browser } },

  // ignores
  globalIgnores(["dist", "build", "coverage", "node_modules"]),
])