var production = process.env.NODE_ENV == 'production'

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",// 启用核心配置
    "parser": "babel-eslint",// 解析器，和 babel 好好工作
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": ["html"],
    "rules": { // 规则
        "no-console": production ? 2 : 0,
        "no-unused-vars": production ? 2 : 0,
        "indent": [2, 4, {
            SwitchCase: 1
        }],
        // "linebreak-style": [2, "unix"],
        "semi": [2, "never"],
        "quotes": [2, "single", {
            allowTemplateLiterals: true
        }],
        "space-before-function-paren": [2, {
            "anonymous": "always",
            "named": "never"
        }],
        "array-bracket-spacing": 2,
        "block-spacing": [2, "always"],
        "camelcase": 0,
        "comma-spacing": 2,
        "computed-property-spacing": 2,
        "comma-style": [2, "last"],
        "consistent-this": 2,
        "key-spacing": 2,
        "keyword-spacing": 2,
        // "newline-after-var": 2,
        "no-array-constructor": 2,
        "no-whitespace-before-property": 2,
        "space-infix-ops": 2,
        "space-unary-ops": 2,
        "arrow-spacing": 2,
        "generator-star-spacing": [2, {
            "before": false,
            "after": true
        }],
        "no-var": 2,
        "no-trailing-spaces": 2,
        "space-before-blocks": 2,
        "eol-last": 2
    }
};
