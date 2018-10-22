// 相当于自己构建了 webpack-dev-server

const express = require('express')
const webpack = require('webpack')
const config = require('./config/webpack.config.client')
const compiler = webpack(config)
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const connectHistoryApiFallback = require('connect-history-api-fallback')

app = express()

app.use(connectHistoryApiFallback())
app.use('/build', express.static('build'))

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