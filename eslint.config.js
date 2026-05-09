import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Enforce consistent import order
      "no-unused-vars": "warn",
    },
  },
  {
    ignores: ["dist/", ".astro/", "node_modules/"],
  },
];
