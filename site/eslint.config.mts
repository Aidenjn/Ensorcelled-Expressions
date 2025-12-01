// @ts-nocheck
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  //
  // 1️⃣ Base JS/TS rules (non-JSX)
  //
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: [
      js.configs.recommended,
      prettier, // disable conflicts with Prettier
    ],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  //
  // 2️⃣ TypeScript strict rules
  //
  ...tseslint.configs.recommended,
  ...tseslint.configs['recommended-type-checked'],
  ...tseslint.configs['strict-type-checked'],
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },

  //
  // 3️⃣ React + Next.js + JSX/TSX rules
  //
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { react: pluginReact, 'react-hooks': pluginReactHooks },
    extends: [next, prettier],
    settings: { react: { version: 'detect' } },
    rules: {
      'react/react-in-jsx-scope': 'off', // Next.js handles this
      'react/prop-types': 'off',         // TypeScript handles this
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // let the default `react/no-unescaped-entities` stay, you can ignore the warnings
    },
  },

  //
  // 4️⃣ JSON files
  //
  { files: ['**/*.json'], plugins: { json }, language: 'json/json', extends: ['json/recommended'] },
  { files: ['**/*.jsonc'], plugins: { json }, language: 'json/jsonc', extends: ['json/recommended'] },
  { files: ['**/*.json5'], plugins: { json }, language: 'json/json5', extends: ['json/recommended'] },

  //
  // 5️⃣ Markdown files
  //
  { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/gfm', extends: ['markdown/recommended'] },

  //
  // 6️⃣ CSS files
  //
  { files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: ['css/recommended'] },
]);