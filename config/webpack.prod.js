const { merge } = require('webpack-merge')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const common = require('./webpack.common')

// Plugins.

const plugins = [
    /**
     * Remove/clean build folder(s).
     */
     new CleanWebpackPlugin()
]

// Configuration.

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            // Minify JS output.
            new TerserPlugin(),

            // Minify CSS output.
            new CssMinimizerPlugin()  
        ]
    },
    plugins: plugins
})

console.log('Production mode running...')