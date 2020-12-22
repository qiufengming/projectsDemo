var shell = require('shelljs')
shell.exec('npm run release:prod && npm run release:qa && npm run release:dev')