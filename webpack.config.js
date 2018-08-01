var config = require('./webpack.common.config.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var BundleCleaner = require('webpack-clean-obsolete-chunks')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var webpack = require('webpack')

config.plugins.push(new HtmlWebpackPlugin({
  title: 'Auto Data Direct - ADD STACK',
  template: 'index.html.ejs',
  inject: 'body',
  filename: 'index.html',
  isProd: true
}))

config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
}))

config.plugins.push(new BundleCleaner())
config.plugins.push(new UglifyJSPlugin())

module.exports = config
