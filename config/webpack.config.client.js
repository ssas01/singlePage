const path = require('path')
const baseConfig = require('./webpack.config.base')
const webpack = require('webpack')
const merge = require('webpack-merge')

const config = merge(baseConfig, {
    cache: true, // 缓存默认在观察者模式中开启
    devtool: 'cheap-module-eval-source-map',
    entry: {
        // 这里将 devServer 和 hot 中间件也注入
        app: [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client?reload=true',
            path.join(__dirname, '../src/main.js')
        ]
    },
    output: {
        publicPath: '/',
         // 发现 src 属性使用的相对路径变成基于它了，一般用来修改图片位置，它可能应为 CDN 放在专门的域下
        filename: '[name].js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.(js|vue)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../manifest.json'),
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ]
})

module.exports = config