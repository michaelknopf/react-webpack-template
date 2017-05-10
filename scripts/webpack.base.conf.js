var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var webpack = require('webpack')

var env = process.env.NODE_ENV

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.root,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.publicPath : config.dev.publicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js'],
        fallback: [`${projectRoot}/node_modules`],
        alias: {
            'src': `${projectRoot}/src`,
            'assets': `${projectRoot}/assets`,
            'components': `${projectRoot}/src/components`
        }
    },
    resolveLoader: {
        fallback: [`${projectRoot}/node_modules`]
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    projectRoot
                ],
                exclude: [
                    /node_modules/
                ],
                query: {
                    presets: ["es2015", "stage-2"]
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                include: [
                    projectRoot
                ],
                exclude: [
                    /node_modules/
                ],
                query: {
                    presets: ["es2015", "stage-2"]
                }
            },
            {
                test: /es6\.js$/,
                loader: 'babel-loader',
                include: [
                    projectRoot
                ],
                exclude: [
                    /node_modules/
                ],
                query: {
                    presets: ["es2015", "stage-2"]
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.woff(2)?(\?[a-z0-9=&.]+)?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            jQuery: 'jquery',
            _: 'lodash'
        })
    ]
}
