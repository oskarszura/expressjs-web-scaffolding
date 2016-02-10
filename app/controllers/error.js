const express = require('express')
  , router = express.Router()
  , renderer = require('../services/renderer');

module.exports = app => { app.use('/error', router); };

router.get('/404', (req, res, next) => {
  renderer(req, res, '404', {
    title: 'Error 404'
  });
});
