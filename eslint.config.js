import pluginReact from "eslint-plugin-react";
import pluginUnusedImports from "eslint-plugin-unused-imports"; // ✅ Import properly
import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      "unused-imports": pluginUnusedImports, // ✅ Use the correct plugin name
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "unused-imports/no-unused-imports": "warn", // ✅ Warn for unused imports
    },
  },
];
