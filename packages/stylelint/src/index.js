module.exports = {
  extends: ['stylelint-config-sass-guidelines', 'stylelint-config-prettier'],
  plugins: ['stylelint-prettier'],
  ignoreFiles: ['**/*.{js,ts,tsx}'],
  rules: {
    'prettier/prettier': true,
    'number-leading-zero': 'always',
    'selector-no-qualifying-type': null,
    'order/order': null,
    'order/properties-order': null,
    'order/properties-alphabetical-order': null,
    'no-missing-end-of-source-newline': true,
    'value-list-max-empty-lines': 0,
    'selector-max-empty-lines': 0,
    'string-no-newline': true,
    'no-empty-first-line': true,
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-before': 'always',
    'max-nesting-depth': 4,
    'declaration-property-value-disallowed-list': null,
    'max-empty-lines': 1,
    'selector-max-compound-selectors': 4,
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ],
    'max-line-length': [
      80,
      {
        ignore: ['non-comments']
      }
    ],
    'selector-class-pattern': null,
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['text-size-adjust', 'appearance']
      }
    ],
    'selector-no-vendor-prefix': [
      true,
      {
        ignoreSelectors: [
          '::-webkit-input-placeholder',
          ':-moz-placeholder',
          '::-moz-placeholder',
          ':-ms-input-placeholder'
        ]
      }
    ]
  }
};
