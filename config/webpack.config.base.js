const path = require('path')
const os = require('os')
// 多线程构建
const HappyPack = require('happypack')
// ExtractTextPlugin 改变项，为了将 css 提取出来
const MiniCssExtractPlugin = require ("mini-css-extract-plugin") 
// 生成模板，并将出口产生的文件自动插入到 html 中
const HtmlWebpackPlugin = require('html-webpack-plugin')
// vue-loader 15 中需要插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isDev = process.env.NODE_ENV === 'development'

// js less 图片 字体
// 插件+devServer

// sass 缩进和换行，scss 完全兼容 css 语法
const baseConfig = {
    mode: 'development',// webpack 4
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
                        css: 'vue-style-loader!css-loader!sass-loader'
                    }
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: isDev
                    // 这里使用 happypack 定义的 css 导致错误
                    // 'happypack/loader?id=css' 
                    ? ['vue-style-loader',
                    'css-loader',
                    'postcss-loader']
                    : [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '/static/'
                            }
                        },
                        'css-loader',
                        'postcss-loader'
                    ]
            },{
                test: /\.scss$/,
                exclude: /node_modules/,
                // 两个环境的区别就在于提取不提取
                use: isDev
                    // 这里使用 happypack 定义的 sass 导致错误
                    // 'happypack/loader?id=sass' 
                    ? [
                        'vue-style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                    : [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '/static/'
                            }
                        },
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
            },{
                test: /\.(eot|svg|ttf|woff|woff2|nmf|pexe|crx)(\?\S*)?$/,
                include: /node_modules/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name]_[hash:6].[ext]'
                    }   
                }]
            },{
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)/,
                exclude: /node_modules/,
                loader: 'url-loader', // 依赖于 file-loader
                options: {
                    limit: 10000,
                    name: isDev ? '[path][name].[ext]' : '[path][name]_[hash:6].[ext]' // 缓存
                }
            }
        ]
    },
    // 
    resolve: { // 创建 resolve 和 import 解析路径
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
            id: 'sass',
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
        // 在 usd 中可以使用传入的模板
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.template.usd'),
            chunksSortMode: 'dependency',
            title: 'Mysite',
            NODE_ENV: process.env.NODE_ENV
        })
    ]
}

module.exports = baseConfig

// babel-loader vue-loader postcss-loader