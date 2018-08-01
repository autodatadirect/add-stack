var config = require('./webpack.common.config.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var BundleCleaner = require('webpack-clean-obsolete-chunks')

config.plugins.push(new HtmlWebpackPlugin({
  title: 'Auto Data Direct - ADD STACK **DEVELOPMENT**',
  template: 'index.html.ejs',
  inject: 'body',
  filename: 'index.html'
}))

config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development')
  }})
)

config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.plugins.push(new BundleCleaner())

module.exports = config
