const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const entry = paths.entry
const output = {
    path: paths.build,
    filename: 'js/[name].bundle.js'
}

const title = 'VMC Webpack Boilerplate'

const rules = [
    // Bundle JavaScript.
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
    },

    // Load CSS.
    {
        test: /\.(scss|css)$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader', // Translates CSS into CommonJS
                options: {}
            },
            {
                loader: 'postcss-loader', // Transform styles with JS plugins
                options: {}
            },
            {
                loader: 'resolve-url-loader', // Allows for a distributed set of SCSS files
                options: {}
            },
            {
                loader: 'sass-loader', // Compiles Sass to CSS
                options: {
                    sourceMap: true
                }
            }
        ]
    },

    // Bundle image files.
    {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name].[ext]'
        }
    },

    /**
     * Bundle local fonts.
     */
     {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/local/[name].[ext]'
        }
    }
]

const plugins = [
    /**
     * Generates dynamic Html file from a template.
     */
    new HtmlWebpackPlugin({
        title: title,
        favicon: `${paths.public}/favicon-32x32.png`,
        template: `${paths.src}/index.html`,
        filename: 'index.html'
    }),

    /**
     * Extract CSS into separate files.
     */
    new MiniCssExtractPlugin({
        filename: 'css/[name].css'
    }),

    /**
     * Copy files from the specified directory to output_dir.  
     * Useful for copying static files not generated by webpack.
     */
    new CopyPlugin({
        patterns: [
            { from: paths.public }
        ]
    }),

    /**
     * Remove/clean build folders.
     */
     new CleanWebpackPlugin(),
]

module.exports = {
    entry: entry,
    output: output,
    module: {
        rules: rules
    },
    plugins: plugins
}

console.log('Hello, from Common!')