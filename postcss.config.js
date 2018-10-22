// postcss 也是一个厉害角色

module.exports = {
    browserslit: 'last 2 versions',
    plugins: [
        require('autoprefixer'),
        require('postcss-flexbugs-fixes')
    ]
}