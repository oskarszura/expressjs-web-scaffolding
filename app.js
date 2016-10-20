const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const cluster = require('cluster');
const os = require('os');
const config = require('./config/config');

const hskey = fs.readFileSync('hacksparrow-key.pem');
const hscert = fs.readFileSync('hacksparrow-cert.pem');
const options = {
  key: hskey,
  cert: hscert,
};
const workers = os.cpus().length;
const app = express();
const expressApp = require('./config/express')(app, config);

if (cluster.isMaster) {
  /* if(env === 'development') {
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

  for (let i = 0; i < workers; i += 1) {
    const worker = cluster.fork();
    worker.on('message', () => {
      // logger.stdin.write(`[worker-${worker.id}] ${msg}`);
    });
  }
} else {
  http.createServer(expressApp).listen(process.env.PORT || config.port);
  https.createServer(options, expressApp).listen(3500);
  process.send('Created expressjs server');
}
