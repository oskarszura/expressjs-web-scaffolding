const express = require('express')
  , router = express.Router()
  , renderer = require('../services/renderer')

  , homeGet = (req, res) => {
      renderer(req, res, 'index', {
        title: 'Home page'
      });
    };

module.exports = app => { app.use('/', router); };

router.get('/', homeGet);
