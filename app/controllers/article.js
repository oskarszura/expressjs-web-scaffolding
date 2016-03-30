const express = require('express')
  , router = express.Router()
  , renderer = require('../services/renderer')
  , Article = require('../models/article');

module.exports = app => { app.use('/article', router); };

router.get('/:id', (req, res, next) => {
  Article.findOne({
    '_id': req.params.id
  }, function (err, article) {
    renderer(req, res, 'article', {
      title: 'Article page'
    , article: article
    });
  })
});
