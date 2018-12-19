const path = require('path')
const baseConfig = require('./webpack.config.base')
const webpack = require('webpack')
const merge = require('webpack-merge')

const config = merge(baseConfig, {
    cache: true, // 缓存生成的 webpack 模块和 chunk
    // 使用eval包裹模块代码，不单独产生 .map 文件
    // ???source-map： 产生.map文件
    // cheap 不产生列信息
    // module 包含 loader 的 sourcemap
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
        filename: '[name].js',
        // path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [{
            enforce: 'pre', // 语法检测
            test: /\.(js|vue)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }]
    },
    plugins: [
        // 热替换模块
        // 当代码更新，hmr 通知程序异步更新，试一下，把这个注销掉
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DllReferencePlugin({ // 提取公共模块
            context: __dirname,
            manifest: require('../manifest.json'),
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.NoEmitOnErrorsPlugin() // 当编译出现错误，用来跳过输出阶段
    ]
})

module.exports = config