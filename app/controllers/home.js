const express = require('express')
  , router = express.Router()
  , Article = require('../models/article');

module.exports = app => { app.use('/', router); };

router.get('/', (req, res, next) => {
  let articles = [new Article(), new Article()];

  res.render('index', {
    title: 'Generator-Express MVC'
  , articles: articles
  });
});
