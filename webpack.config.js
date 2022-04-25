/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'none',
  target: 'node',
  context: path.resolve(__dirname, 'src'),
  entry: 'index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build',
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{ test: /\.ts?$/, loader: 'ts-loader' }],
  },
};
