var path = require('path')
var root = path.resolve(__dirname, "../build/")

module.exports = {

    build: {
        env: require('./prod.env'),
        index: `${root}/index.html`,
        root: root,
        assetsSubDirectory: 'static',
        publicPath: 'assets/',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },

    dev: {
        env: require('./dev.env'),
        port: 3000,
        root: root,
        assetsSubDirectory: 'static',
        publicPath: '/',
        proxyTable: {},
    }

}
