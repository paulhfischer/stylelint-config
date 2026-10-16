/** @satisfies {import('stylelint').Config} */
const config = {
    extends: ['stylelint-config-standard-scss', 'stylelint-config-html'],
    rules: {
        'at-rule-disallowed-list': ['extend'],
        'declaration-property-value-disallowed-list': { '/^border/': ['none'] },
        'font-family-no-missing-generic-family-keyword': [
            true,
            {
                ignoreFontFamilies: [/^Font Awesome.*/],
            },
        ],
        'max-nesting-depth': 2,
        'no-descending-specificity': null,
        'no-duplicate-selectors': null,
        'scss/dollar-variable-pattern': '^_?[a-z]+[\\w-]*$',
        'selector-class-pattern': '^[a-z]+[\\w-]*$',
        'selector-max-id': 0,
    },
    overrides: [
        {
            files: ['**/*.html', '**/*.php'],
            plugins: ['@stylistic/stylelint-plugin'],
            rules: {
                '@stylistic/declaration-colon-space-after': 'always',
                '@stylistic/indentation': 4,
            },
        },
    ],
};

module.exports = config;
