'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.common.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserPlugin = require('terser-webpack-plugin')

const envLowerCase = process.env.NODE_ENV.trim() == 'undefined'?'dev':process.env.NODE_ENV.toLowerCase().trim()
const webpackConfig = merge(baseWebapckConfig, {
 output: {
  path: path.resolve(__dirname, '../OUTPUT/'+envLowerCase.toUpperCase()),
  filename: '[name].[hash].js',
  publicPath: '/',
  chunkFilename: 'js/[name].[chunkhash].js',
 },
 mode: 'production',
 optimization: {
  usedExports: true,
  splitChunks: {
   cacheGroups: {
    styles: {
     name: 'styles',
     test: /\.css$/,
     chunks: 'all',
     enforce: true,
    }
   },
   chunks: 'all',
   automaticNameDelimiter: '-'
  },
  runtimeChunk: {
   name: 'manifest'
  },
  minimizer: [new TerserPlugin()]
 },

 module: {
  rules: [{
   test: /\.css$/,
   loader: [MiniCssExtractPlugin.loader, 'css-loader']
  },{
   test: /\.scss$/,
   loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
  }]
 },
 devtool: 'hidden-source-map',
 plugins: [
  new VueLoaderPlugin(),
  new OptimizeCSSPlugin({
   safe: true,
   map: {
    inline: false
   },
   cssProcessor: require('cssnano'),
   autoprefixer: {
    remove: false
   },
   cssProcessorOptions: {
    discardComments: {
     removeAll: true
    },
    safe: true
   },
   canPrint: true
  }),
  new HtmlWebpackPlugin({
   filename: 'index.html',
   template: 'src/index.html',
   inject: true
  }),
  new MiniCssExtractPlugin({
   filename: '[name].[hash].css'
  })
 ]
})

if(envLowerCase !== 'dev'){
 webpackConfig.plugins.push(new PrerenderSPAPlugin({
  staticDir: path.resolve(__dirname,'../OUTPUT/'+envLowerCase.toUpperCase()),
  routes: ['/', '/home'],
  postProcessHtml: function(context){
   var html = context.html
   html = html .replace('<base href="http://localhost:8000/">', '')
   return html
  },
  renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
   inject: {
    foo:'bar'
   },
   headless: true,
   renderAfterDocumentEvent: 'render-event'
  })
 }));
}
module.exports = webpackConfig
