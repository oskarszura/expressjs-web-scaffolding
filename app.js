const express = require('express')
  , https = require('https')
  , http = require('http')
  , fs = require('fs')
  , cluster = require('cluster')
  , childProcess = require('child_process')
  , os = require('os')

  , config = require('./config/config')

  , hskey = fs.readFileSync('hacksparrow-key.pem')
  , hscert = fs.readFileSync('hacksparrow-cert.pem')
  , options = {
      key: hskey,
      cert: hscert
    }
  , workers = os.cpus().length
  , app = express()
  , expressApp = require('./config/express')(app, config)
  , env = process.env.NODE_ENV || 'development';

let logger = {};

if (cluster.isMaster) {
  /*if(env === 'development') {
    logger = childProcess.spawn('node'
      , ['./node_modules/node-logging-stream/index.js']);

    logger.stdout.on('data', function(data) {
      console.log('Logger [out]: ' + data);
    });
    logger.stderr.on('data', function(data) {
      console.log('Logger [err]: ' + data);
    });
    logger.on('close', function(code) {
      console.log('Logger [close[: ' + code);
    });

    logger.stdin.write('[master] Start logging');

    process.on('uncaughtException', err => {
      logger.stdin.write(`[master] ${JSON.stringify(err)}`);
    });
  }*/

  for (var i = 0; i < workers; i++) {
    let worker = cluster.fork();
    worker.on('message', msg => {
      //logger.stdin.write(`[worker-${worker.id}] ${msg}`);
    });
  }
} else {
  http.createServer(expressApp).listen(process.env.PORT || config.port);
  https.createServer(options, expressApp).listen(3500);
  process.send('Created expressjs server');
}