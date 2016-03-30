const express = require('express')
  , router = express.Router()
  , renderer = require('../services/renderer');

module.exports = app => { app.use('/', router); };

router.get('/', (req, res, next) => {

  renderer(req, res, 'index', {
    title: 'Home page'
  });
});
