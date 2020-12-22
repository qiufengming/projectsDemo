'use strict';
const path=require('path');
const CopyWebpackPlugin=require('copy-webpack-plugin')
const tsImportPluginFactory=require('ts-import-plugin');
const fs=require('fs');
require('babel-polyfill');

const envLowerCase=process.env.NODE_ENV.trim()=='undefined'?'dev':process.env.NODE_ENV.toLowerCase().trim();
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let themePath = './src/assets/theme/p-wit-default-variable.css';
try{
 let appConfig=fs.readFileSync(path.resolve('./src/config/app.'+envLowerCase+'.config.js')).toString();
 appConfig=JSON.parse(appConfig.slice(appConfig.indexOf('{')));
 if(appConfig['SKINS']===Object(appConfig['SKINS'])){
  themePath='./src/assets/theme';
}
}catch(err){
 console.log(err);
}

function resolve(dir){
 return path.join(__dirname,'..',dir);
}

module.exports={
 context: path.resolve(__dirname,'../'),
 entry:{
  app: ['classlist-polyfill','babel-polyfill','./src/bootstrap/main.ts']
 },
 resolve:{
  extensions:['.ts','.js','.vue','.json'],
  alias:{
   vue$:'vue/dist/vue.esm.js',
   '@':resolve('src')
  }
 },
 module:{
  rule:[{
   test:/\.vue$/,
   loader:'vue-loader',
   options:{
    cacheBusting:true,
    transformToRequire:{
     video: ['src','poster'],
     source:'src',
     img:'src',
     image:'xlink:href'
    }
   }
  },{
   test:/\.js$/,
   loader:'banel-loader',
   include:[
    resolve('src'),
    resolve('test'),
    resolve('node_modules/webpack-dev-server/client'),
    resolve('node_modules/@wit-vue'),
   ]
  },{
   test:/\.tsx?$/,
   loader:'ts-loader',
   exclude:'/node_modules/',
   options:{
    appendTsSuffixTo:[/\.vue$/],
    transpileOnly:true,
    getCustomTransformers:()=>({
     before:[tsImportPluginFactory()]
    }),
    compilerOptions:{
     module:'es2015'
    }
   }
  },{
   test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
   loader:'url-loader',
   options:{
    limit: 10000,
    name: path.posix.join('assets','image/[name].[hash:7].[ext]')
   }
  },{
   test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
   loader:'url-loader',
   options:{
    limit: 10000,
    name: path.posix.join('assets','media/[name].[hash:7].[ext]')
   }
  },{
   test:/\.(woff2|eot|ttf|otf)(\?.*)?$/,
   loader:'url-loader',
   options:{
    limit: 10000,
    name: path.posix.join('assets','font/[name].[hash:7].[ext]')
   }
  },
  ]
 },
 node:{
  setImmediate: false,
  dgram: 'empty',
  fs: 'empty',
  net: 'empty',
  tls: 'empty',
  child_process: 'empty'
 },
 plugins:[
  new CopyWebpackPlugin([
   {
    from: './src/config/app.'+envLowerCase+'.config.js',
    to: 'app.config.js',
    force: true
   },
   {
    from: './src/config',
    to: 'config',
    force: true
   },
   {
    from: themePath,
    to: 'assets'
   },
  ])
 ]
};


