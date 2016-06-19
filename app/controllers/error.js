const express = require('express')
  , router = express.Router()
  , renderer = require('../services/renderer')

  , errorGet = (req, res) => {
      renderer(req, res, '404', {
        title: 'Error 404'
      });
    };

module.exports = app => { app.use('/error', router); };

router.get('/404', errorGet);
