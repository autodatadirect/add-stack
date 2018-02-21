var path = require('path')
var EncodingPlugin = require('webpack-encoding-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var encodingPlugin = new EncodingPlugin({
  encoding: 'UTF-8'
})

var watcherMessagePlugin = function () {
  this.plugin('watch-run', function (watching, callback) {
    console.log('Begin compile at ' + new Date())
    callback()
  })
}

module.exports = {
  entry: [
    'babel-regenerator-runtime',
    'core-js/fn/promise',
    './app/index.js'
  ],

  output: {
    publicPath: '',
    path: path.join(__dirname, '../target/classes/static/addstack'),
    filename: 'bundle.js'
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  module: {
    loaders: [
      {test: /\.(js|jsx)$/, loader: 'babel-loader', include: path.join(__dirname, 'app')},
      {test: /\.(scss)$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'})},
      {test: /\.(css)$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})},
      {test: /\.(png|jpg|gif|eot|ttf|woff|svg|woff2)(\?.*)?$/, loader: 'url-loader?limit=1000&name=img/[name]-[hash].[ext]'},
      {test: /\.font\.(js|json)$/, loader: 'style-loader!css-loader!fontgen-loader?embed'},
      {test: /\.js$/, loaders: ['i18next-resource-store-loader'], include: path.join(__dirname, './app/translations')}
    ]
  },

  plugins: [
    encodingPlugin,
    watcherMessagePlugin,
    new ExtractTextPlugin('style-[hash].css')
  ]
}
