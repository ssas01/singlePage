// 改造
const path = require('path')
const baseConfig = require('./webpack.config.base')
const webpack = require('webpack')
const merge = require('webpack-merge')
const main = require('./webpack.config.dll')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'none',
    entry: {
        app: path.resolve(__dirname, '../src/main.js'),
        main: main.entry// 包含了各种第三方库 --- 其实这里只是用了字段，并没有使用到 dll[]
    },
    output: {
        path: path.resolve(__dirname, '../static'), // 打包后存放的位置
        publicPath: '/static/', // ???基础路径, 待定查看如何工作的
        filename: '[name]_[chunkhash].js',
        /*
            hash 与整个项目有关
            chunkhash 入口解析，然后相关文件使用 chunkhash
        */
        chunkFilename: '[name]_[chunkhash:6].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name]_[chunkhash:6].css'
        }),
        // 压缩 js 文件 --- 转移到 optimization 中
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // 在 base 中，已经提取好了
        // new MiniCssExtractPlugin({
        //     filename: 'style_[hash:6].css'
        // })
        // 抽取公共部分，也转移到 optimization 中
    ],
    // 认为 webpack4 中 splitChunks production 下直接使用
    optimization: {
        runtimeChunk: false,
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
        minimizer: [new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
        })]
    }
})

