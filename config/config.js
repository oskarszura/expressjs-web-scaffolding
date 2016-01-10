const path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , env = process.env.NODE_ENV || 'development'
  , config = {
    development: {
      root: rootPath
    , app: {
        name: 'expressjs-web-scaffolding'
      }
    , port: 3400
    }

  , test: {
      root: rootPath
    , app: {
        name: 'expressjs-web-scaffolding'
      }
    , port: 3400
    }

   , production: {
      root: rootPath
    , app: {
        name: 'expressjs-web-scaffolding'
      }
    , port: 3400
    }
  };

module.exports = config[env];
