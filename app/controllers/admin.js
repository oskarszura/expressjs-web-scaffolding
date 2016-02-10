const express = require('express')
  , router = express.Router()
  , renderer = require('../services/renderer');

module.exports = app => { app.use('/admin', router); };

router.get('/', (req, res, next) => {
  renderer(req, res, 'admin', {
    title: 'Admin'
  });
});
