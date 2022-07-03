const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  cache: true,
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    compress: true,
    port: 1234,
    historyApiFallback: true
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
});
