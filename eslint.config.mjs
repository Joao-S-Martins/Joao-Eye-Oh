import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js'
import pluginHooks from 'eslint-plugin-react-hooks';
import tseslint from "typescript-eslint";
// import pluginPrettier from "eslint-plugin-prettier";
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
      '@stylistic/js': stylisticJs,
      "react-hooks": pluginHooks,
      // "eslint-plugin-prettier": pluginPrettier,
    },
    rules: {
      "@docusaurus/string-literal-i18n-messages": "warn",
      "@docusaurus/no-untranslated-text": "warn",
      "@docusaurus/no-html-links": "error",
      "@docusaurus/prefer-docusaurus-heading": "error",
      '@stylistic/js/indent': ['error', 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "no-console": "warn",
      "no-unused-vars": "warn",
      "max-len": ["error", { "code": 100 }],
      "comma-dangle": ["error", "never"],
      "space-before-function-paren": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "no-trailing-spaces": "error",
      
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      // Possible Problems
      "no-await-in-loop": "error",
      "no-duplicate-imports": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-use-before-define": "error",
      "no-useless-assignment": "error",
      "require-atomic-updates": "error",
      // Suggestions
      "arrow-body-style": ["error", "as-needed"],
      "camelcase": "error",
      // "capitalized-comments": "error",
      "class-methods-use-this": "error",
      "complexity": ["warn", 10],
      "consistent-this": ["error", "self"],
      "curly": ["error", "multi"],
      "default-case": "error",
      "default-case-last": "error",
      "default-param-last": "error",
      "dot-notation": "warn",
      "eqeqeq": "error",
      "func-name-matching": "error",
      // "func-stye": ["error", "declaration", { "allowArrowFunctions": true }],
      "grouped-accessor-pairs": "error",
      
    }
  },
  ...fixupConfigRules(pluginReactConfig),
];
