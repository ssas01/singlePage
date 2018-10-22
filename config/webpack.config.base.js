const path = require('path')
const os = require('os')
const HappyPack = require('happypack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isDev = process.env.NODE_ENV === 'development'

// js less 图片 字体
// 插件+devServer
const baseConfig = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'happypack/loader?id=babel'
            },{
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
                options: {
                    extractCSS: !isDev,
                    loaders: {
                        js: 'happypack/loader?id=babel',
                        css: 'vue-style-loader!css-loader!sass-loader',
                        scss: 'vue-style-loader!css!sass'
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: isDev
                    ? 'happypack/loader?id=css'
                    : [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        'css-loader',
                        'postcss-loader'
                    ]
            },{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: isDev
                    ? 'happypack/loader?id=sass' 
                    : [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
            },{
                test: /\.(eot|svg|ttf|woff|woff2|nmf|pexe|crx)(\?\S*)?$/,
                include: /node_modules/,
                loader: 'file-loader'
            },{
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: isDev ? '[path][name].[ext]' : '[path][name]_[hash:6].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            pages: path.join(__dirname, '../src/pages'),
            store: path.join(__dirname, '../src/store'),
            common: path.join(__dirname, '../src/common'),
            styles: path.join(__dirname, '../src/styles'),
            images: path.join(__dirname, '../src/images'),
            medias: path.join(__dirname, '../src/medias')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: isDev ? '[name].css' : '[name].[hash].css'
        }),
        new HappyPack({
            id: 'css',
            loaders: [
                'vue-style-loader',
                'css-loader',
                'postcss-loader'
            ],
            threads: os.cpus().length
        }),
        new HappyPack({
            id: 'scss',
            loaders: [
                'vue-style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ],
            threads: os.cpus().length
        }),
        new HappyPack({
            id: 'babel',
            loaders: [
                {
                    path: 'babel-loader',
                    query: {
                        cacheDirectory: true
                    }
                }
            ],
            threads: os.cpus().length
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.template.usd'),
            chunksSortMode: 'dependency',
            title: 'Mysite',
            NODE_ENV: process.env.NODE_ENV
        })
    ]
}

module.exports = baseConfig