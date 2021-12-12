const path = require('path')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = WebpackMerge.merge(webpackConfig, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    // plugins: [
    //     new CopyWebpackPlugin({
    //         patterns: [
    //             {
    //                 from: path.resolve(__dirname, '../public'),
    //                 to: path.resolve(__dirname, '../dist')
    //             }
    //         ],
    //     })
    // ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            // new UglifyJsPlugin({
            //     cache: true,
            //     parallel: true,
            //     sourceMap: true
            // }),
            new OptimizeCssAssetsPlugin({})
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                libs: {
                    name: "chunk-libs",
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: "initial" // 只打包初始时依赖的第三方
                }
            }
        }
    },
    // plugins: [
    //     new BundleAnalyzerPlugin({
    //         analyzerHost: '127.0.0.1',
    //         analyzerPort: 8889
    //     })
    // ]
})