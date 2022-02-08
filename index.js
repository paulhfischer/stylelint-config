module.exports = {
    extends: ['stylelint-config-standard-scss', 'stylelint-config-html'],
    plugins: ['stylelint-order'],
    rules: {
        'at-rule-disallowed-list': ['extend'],
        'declaration-colon-space-after': 'always',
        'declaration-property-value-disallowed-list': { '/^border/': ['none'] },
        indentation: 4,
        'max-line-length': null,
        'max-nesting-depth': 2,
        'no-descending-specificity': null,
        'no-duplicate-selectors': null,
        'scss/dollar-variable-pattern': '^_?[a-z]+[\\w-]*$',
        'selector-class-pattern': '^[a-z]+[\\w-]*$',
        'selector-max-id': 0,
    },
};
