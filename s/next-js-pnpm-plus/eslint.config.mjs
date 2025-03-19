import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import packageJson from 'eslint-plugin-package-json'
import stylistic from '@stylistic/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  ...compat.extends('next/core-web-vitals'),
  packageJson.configs.recommended,
  stylistic.configs.recommended,
  {
    rules: {
      '@stylistic/space-before-function-paren': [
        2,
        {
          anonymous: 'always',
          named: 'always',
          asyncArrow: 'always',
        },
      ],
    },
  },
]
