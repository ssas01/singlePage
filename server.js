// 没有使用 webpack 命令行
process.env.NODE_ENV = 'development'
// 相当于自己构建了 webpack-dev-server
const express = require('express')
const webpack = require('webpack')
const config = require('./config/webpack.config.development')
const compiler = webpack(config)
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const connectHistoryApiFallback = require('connect-history-api-fallback')

app = express()

// express 使用中间件，应用层中间件
app.use(connectHistoryApiFallback()) // history 模式，后台应有的设置
app.use('/build', express.static('build'))// express，虚拟路径，静态文件

// webpack-dev-server = webpackDevMiddleware + webpackHotMiddleware
// 编译走内存，等编译好再向下执行中间件，支持热加载
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
}))

app.use(webpackHotMiddleware(compiler))

module.exports = app.listen(8080, '0.0.0.0', function (err) {
    if (err) {
        console.log(err)
        return
    }
})