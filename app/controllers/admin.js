const express = require('express')
  , router = express.Router()
  , renderer = require('../services/renderer')

  , adminGet = (req, res) => {
      renderer(req, res, 'admin', {
        title: 'Admin'
      });
    };

module.exports = app => { app.use('/admin', router); };

router.get('/', adminGet);
