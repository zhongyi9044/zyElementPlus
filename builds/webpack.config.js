const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, '../packages/zy-ui/index.ts'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    library: 'zy-ui',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue'
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue']
  },
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue-loader' },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),

  ]
}