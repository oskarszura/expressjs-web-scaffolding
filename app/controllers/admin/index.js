const fs = require('fs');
const { waterfall } = require('async');
const request = require('request');
const express = require('express');
const adminGet = require('./get');

const router = express.Router();

module.exports = (app) => { app.use('/admin', router); };

router.get('/', adminGet(''));
router.get('/colours', adminGet('js-admin-colours'));

router.get('/generate', (req, res, next) => {
  const getColoursFromApi = (callback) => {
    const jar = request.jar();
    const cookie = request.cookie(`connect.sid=${req.cookies['connect.sid']}`);
    const url = `${req.protocol}://${req.headers.host}/api/colour`;

    jar.setCookie(cookie, url);

    request({ url, jar }, (err, colours) => {
      const mappedColours = JSON.parse(colours.body).map((colour) => {
        return `$colour-${colour.name.toLowerCase()}: ${colour.code};`;
      }).join('\n');
      callback(null, mappedColours);
    });
  };
  const saveColoursToFile = (coloursSnapshot, callback) => {
    const path = process.cwd();
    fs.writeFile(`${path}/tmp/colours.scss`, coloursSnapshot, (err) => {
      callback(null);
    });
  };

  waterfall([getColoursFromApi, saveColoursToFile], () => {});

  next();
});
