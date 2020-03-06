module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        'camelcase': ['error', { allow: [] }],
        'comma-dangle': 'error',
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        'comma-style': ['error', 'last'],
        'func-call-spacing': ['error', 'never'],
        'indent': ['error', 4],
        'new-cap': ['error', { properties: false }],
        'new-parens': 'error',
        'no-trailing-spaces': 'warn',
        'no-unused-expressions': 'error',
        'no-use-before-define': 'warn',
        'no-var': 'error',
        'object-curly-spacing': ['error', 'always'],
        'operator-linebreak': ['error', 'after', {
            overrides: {
                '?': 'before',
                ':': 'before',
                '&&': 'before',
                '||': 'before'
            }
        }],
        'quote-props': [1, 'consistent-as-needed'],
        'semi': ['error', 'always'],
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }],
        'space-infix-ops': 'error'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
