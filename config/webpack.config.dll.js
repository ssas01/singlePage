const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: ['vue', 'vue-router'],
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json', // DllReferencePlugin使用
            name: '[name]_library', // 与 output library 结合，暴露出函数
            context: __dirname // manifest.json 中请求的上下文
        })
    ]
}