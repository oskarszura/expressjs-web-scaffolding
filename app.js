const express = require('express')
  , https = require('https')
  , http = require('http')
  , fs = require('fs')
  , cluster = require('cluster')
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


if (cluster.isMaster) {
  for (var i = 0; i < workers; i++) {
    let worker = cluster.fork();
  }
} else {
  http.createServer(expressApp).listen(process.env.PORT || config.port);
  https.createServer(options, expressApp).listen(3500);
}