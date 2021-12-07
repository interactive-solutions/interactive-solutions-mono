module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['react-app', 'airbnb', 'prettier'],
  plugins: ['babel', 'cypress', '@calm/react-intl', 'prettier'],
  overrides: [
    {
      files: ['**/*.stories.ts?(x)', '**/*.test.ts?(x)'],
      rules: {
        '@calm/react-intl/missing-formatted-message': 'off',
        '@calm/react-intl/missing-attribute': 'off',
        '@calm/react-intl/missing-values': 'off'
      }
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'no-undef': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            // When defining action for redux-observable within reducer
            argsIgnorePattern: '^action$'
          }
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error'
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    }
  ],
  rules: {
    'prettier/prettier': 'error',
    'consistent-return': 'off',
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': 'error',
    'import/no-cycle': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'func-names': 'off',
    'prefer-destructuring': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'warn',
    'react/require-default-props': 'off',
    'no-undef': 'error',
    'arrow-body-style': 'off',
    'no-use-before-define': 'error',
    'max-len': [
      'error',
      {
        code: 1337,
        comments: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        depth: 1
      }
    ],
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsForRegex: ['^state$']
      }
    ],
    'import/order': [
      'error',
      {
        /**
         * mini-css-extract-plugin throws "Conflicting order" if import order
         * changes between shared components. To prevent this we'll require
         * alphabetical order and *.scss files at the bottom
         */
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [['builtin', 'external'], 'internal'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react'],
        pathGroups: [
          {
            pattern: '*.text',
            group: 'sibling',
            patternOptions: { matchBase: true },
            position: 'after'
          },
          {
            pattern: '*.scss',
            group: 'sibling',
            patternOptions: { matchBase: true },
            position: 'after'
          },
          {
            pattern: '*.styles',
            group: 'sibling',
            patternOptions: { matchBase: true },
            position: 'after'
          },
          {
            pattern: 'react?(-native)',
            group: 'external',
            position: 'before'
          }
        ]
      }
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/']
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        tsx: 'never',
        ts: 'never'
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
      }
    ],
    'max-lines': [
      'error',
      {
        max: 450,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    '@calm/react-intl/missing-formatted-message': 'error',
    '@calm/react-intl/missing-attribute': [
      'error',
      {
        requireDescription: true,
        noSpreadOperator: false
      }
    ],
    '@calm/react-intl/missing-values': 'error',
    'react-hooks/exhaustive-deps': 'error'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'cypress/globals': true
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: 'src'
      }
    },
    'import/core-modules': ['history'],
    react: {
      version: 'detect'
    }
  }
};
