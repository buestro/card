import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";

export default [
  // Astro files — parser + recommended rules bundled in the plugin
  ...eslintPluginAstro.configs["flat/recommended"],

  // Plain TypeScript files — need the TS parser explicitly
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      "no-unused-vars": "warn",
    },
  },

  {
    ignores: ["dist/", ".astro/", "node_modules/"],
  },
];
