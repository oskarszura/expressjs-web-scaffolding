const express = require('express')
  , router = express.Router()
  , Article = require('../models/article')
  , renderer = require('../services/renderer');

module.exports = app => { app.use('/', router); };

router.get('/', (req, res, next) => {
  let articles = [new Article(), new Article()];

  renderer(req, res, 'index', {
    title: 'Home page'
    , articles
  });
});
