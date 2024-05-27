const orderRules = require('./orderRules')

module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  customSyntax: 'postcss-scss',
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  rules: {
    // Sort the CSS properties for consistency
    ...orderRules,

    // Change this rule because we want to be able to write code like the following:
    // .border-vertical-2 { border-top: 2px solid; border-bottom: 2px solid; }
    'declaration-block-single-line-max-declarations': 2,

    // Disable this rule because it clashes pretty hard with SCSS syntax (@for, @each, @return, @if, ...)
    'at-rule-empty-line-before': null,

    // Disable this rule because it clashes with the Prettier formatting
    'scss/operator-no-newline-after': null,

    // Disable these rules because they can make properties harder to read than the longhand
    'shorthand-property-no-redundant-values': null,
    'declaration-block-no-redundant-longhand-properties': null,

    // Disable this rule because we don't enforce any naming conventions for class selectors
    'selector-class-pattern': null,

    // Disable this rule, because we want to layer our specificity for the internals of components
    'no-descending-specificity': null,

    // Change this rule so the first comment and any "prettier-ignore" comments do not require a newline
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'], ignoreComments: ['/prettier-ignore/'] },
    ],

    // Change this rule so we always have consistent hex color lengths
    'color-hex-length': 'long',

    // Change this rule so we always use the number notation for alpha values
    'alpha-value-notation': 'number',

    // Change this rule so we always use the legacy notation for color functions
    'color-function-notation': 'legacy',

    // Change this rule so we always use the legacy notation for media queries
    'media-feature-range-notation': 'prefix',
  },
}
