const { environment } = require('@rails/webpacker')
const webpack = require('webpack')
const erb = require('./loaders/erb')

environment.plugins.prepend('Provide',
    new webpack.ProvidePlugin({
        $: 'jquery/src/jquery',
        jQuery: 'jquery/src/jquery',
        Popper: 'popper.js',
    })
)

environment.loaders.prepend('erb', erb)
module.exports = environment
