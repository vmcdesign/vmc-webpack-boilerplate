const path = require('path')
const paths = require('./paths')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve')

const port = 8080
const host = process.env.HOST || 'localhost'

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    devServer: {
        host,
        port: port,

        // Where the files are served from.
        static: path.join(__dirname, 'dist'),

        // Enable compression.
        compress: true,

        // Enable hot reloading.
        hot: true,

        // Enable live reloading.
        liveReload: true,
    }
})

console.log('Development mode running...')