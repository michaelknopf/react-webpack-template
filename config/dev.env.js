var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var personalConfig = {}

try {
    personalConfig = require('./personal')
} catch(e) {
    console.warn("You should specify the dev auth")
}

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    HTTP_U: personalConfig.HTTP_U,
    HTTP_P: personalConfig.HTTP_P
})
