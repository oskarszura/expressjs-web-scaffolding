var express = require('express'),
    https = require('https'),
    http = require('http'),
    fs = require('fs')
    config = require('./config/config'),
    hskey = fs.readFileSync('hacksparrow-key.pem'),
    hscert = fs.readFileSync('hacksparrow-cert.pem'),
    options = {
      key: hskey,
      cert: hscert
    };

var app = express();

require('./config/express')(app, config);

http.createServer(app).listen(process.env.PORT || config.port);
https.createServer(options, app).listen(3500);