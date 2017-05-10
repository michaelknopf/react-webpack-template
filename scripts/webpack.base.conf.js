var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var webpack = require('webpack')

var env = process.env.NODE_ENV
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
//        path: config.build.assetsRoot,
        path: config.build.root,
//        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.publicPath : config.dev.publicPath,
        filename: '[name].js'
    },
    resolve: {
//        extensions: ['', '.js', '.vue'],
        extensions: ['', '.js'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
//            'vue$': 'vue/dist/vue',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [
//            {
//                test: /\.vue$/,
//                loader: 'vue'
//            },
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
                loader: 'babel',
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
                loader: 'babel',
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
                loader: 'url',
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
//    vue: {
//        loaders: utils.cssLoaders({
//            sourceMap: useCssSourceMap
//        }),
//        postcss: [
//            require('autoprefixer')({
//                browsers: ['last 2 versions']
//            })
//        ]
//    },
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
