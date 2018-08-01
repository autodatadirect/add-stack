var config = require('../webpack.common.config.js')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CircularDependencyPlugin = require('circular-dependency-plugin')

var definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development')
  }
})

var circularDependencyPlugin = new CircularDependencyPlugin({
  exclude: /a\.js|node_modules/,
  failOnError: true,
  cwd: process.cwd(),
})

var extractTextPlugin = new ExtractTextPlugin('style-[hash].css')

module.exports = {
  module: {
    rules: config.module.loaders
  },
  plugins: [
    definePlugin,
    circularDependencyPlugin,
    extractTextPlugin
  ]
}
