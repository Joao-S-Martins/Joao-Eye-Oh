import globals from "globals";
import pluginJs from "@eslint/js";
import pluginHooks from 'eslint-plugin-react-hooks';
import tseslint from "typescript-eslint";
import doclint from "@docusaurus/eslint-plugin";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  // doclint.configs.recommended,
  ...tseslint.configs.recommended,
  // pluginReact.configs.recommended,
  // pluginHooks.configs.recommended,
  {
    files: ["**/*.{jsx,js,ts,tsx}"],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: {
      "@docusaurus": doclint,
      "react-hooks": pluginHooks,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn", // TODO Why is this being ignored?
      "@docusaurus/string-literal-i18n-messages": "warn",
      "@docusaurus/no-untranslated-text": "warn",
      "@docusaurus/no-html-links": "warn",
      "@docusaurus/prefer-docusaurus-heading": "warn",
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    }
  },
  ...fixupConfigRules(pluginReactConfig),
];
