var shell=require('shelljs')
const ENV=(process.env.ENV=process.env.NODE_ENV)

var buildString='node --max_old_space_size=4096 ./node_modules/webpack/bin/webpack.js --config config/webpack.release.config.js'

var execString='cross-env NODE_ENV='+ENV+' '+buildString
shell.exec(execString)