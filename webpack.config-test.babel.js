import commonConfig from './webpack.common.config'
import nodeExternals from 'webpack-node-externals'
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders: commonConfig.module.loaders
  },
  plugins: [new ExtractTextPlugin('style-[hash].css')],
  resolve: {
    alias: {
    }
  }
}
