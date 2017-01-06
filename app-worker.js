const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require('express');
const config = require('./server/config/config');
const server = require('./server');

const app = express();
const expressServer = server(app, config);

const hskey = fs.readFileSync('hacksparrow-key.pem');
const hscert = fs.readFileSync('hacksparrow-cert.pem');
const options = {
  key: hskey,
  cert: hscert,
};

module.exports = () => {
  http.createServer(expressServer).listen(process.env.PORT || config.port);
  https.createServer(options, expressServer).listen(3500);
};
