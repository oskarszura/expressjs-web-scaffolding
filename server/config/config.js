const path = require('path');

const rootPath = path.normalize(`${__dirname}/..`);
const env = process.env.NODE_ENV || 'development';
const config = {
  development: {
    root: rootPath,
    app: {
      name: 'expressjs-web-scaffolding',
    },
    port: 3400,
  },
  test: {
    root: rootPath,
    app: {
      name: 'expressjs-web-scaffolding',
    },
    port: 3400,
  },
  production: {
    root: rootPath,
    app: {
      name: 'expressjs-web-scaffolding',
    },
    port: 3400,
  },
};

module.exports = config[env];
