module.exports = {
  extends: [
    // Extend the common stylistic conventions found within a handful of CSS styleguides
    'stylelint-config-standard-scss',

    // Sort CSS properties
    'stylelint-config-hudochenkov/order',
  ],
  rules: {
    // Change this rule because we want to be able to write code like the following:
    // .border-vertical-2 { border-top: 2px solid; border-bottom: 2px solid; }
    'declaration-block-single-line-max-declarations': 2,

    // Disable this rule because it clashes pretty hard with SCSS syntax (@for, @each, @return, @if, ...)
    'at-rule-empty-line-before': null,

    // Change this rule to not clash with SCSS if/else statements
    'block-closing-brace-newline-after': ['always', { ignoreAtRules: ['if', 'else'] }],

    // Disable this rule, because we want to layer our specificity for the internals of components
    'no-descending-specificity': null,

    // Change this rule so the first comment and any "prettier-ignore" comments do not require a newline
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'], ignoreComments: ['/prettier-ignore/'] },
    ],

    // Change this rule so we always have consistent hex color lengths
    'color-hex-length': 'long',
  },
}
