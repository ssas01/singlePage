const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: ['vue', 'vuex','velocity-animate', 'highcharts', 'vue-router', 'openlayers', 'whatwg-fetch'],
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]_library',
            context: __dirname
        })
    ]
}