'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.common.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const devWebpackConfig = merge(baseWebpackConfig, {
 output: {
  path: path.resolve(__dirname, '../dist/'),
  filename: '[name].js',
  publicPath: '/'
 },
 mode: 'development',
 module: {
  rules: [
   {
    test: /\.css$/,
    loader: ['vue-style-loader', 'css-loader']
   },
   {
    test: /\.scss$/,
    loader: ['vue-style-loader', 'css-loader', 'scss-loader']
   },
  ]
 },
 devtool: 'cheap-module-eval-source-map',
 plugins: [
  new VueLoaderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
  new HtmlWebpackPlugin({
   filename: 'index.html',
   template: 'src/index.html',
   inject: true
  })
 ]
})

module.exports = devWebpackConfig