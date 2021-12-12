const path = require('path')
const Webpack = require('webpack')

module.exports = {
    entry: {
        vueVendor: ['vue'],
        elementUiVendor: ['element-ui']
    },
    output: {
        path: path.resolve(__dirname, '../static/js'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new Webpack.DllPlugin({
            path: path.resolve(__dirname, '[name]-manifest.json'),
            name: '[name]_library',
            context: __dirname
        })
    ]
}