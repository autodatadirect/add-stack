import nodeExternals from 'webpack-node-externals'
import commonConfig from './webpack.common.config.js'
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

export default {
  target: 'node',
  externals: [
    nodeExternals(),
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  ],
  module: {
    loaders: commonConfig.module.loaders
  },
  plugins: [new ExtractTextPlugin('style-[hash].css')],
  resolve: {
  }
}
