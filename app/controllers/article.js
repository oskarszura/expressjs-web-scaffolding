const express = require('express')
  , router = express.Router()
  , renderer = require('../services/renderer')
  , Article = require('../models/article')

  , articleGet = (req, res) => {
      Article.findOne({
        '_id': req.params.id
      }, function (err, article) {
        renderer(req, res, 'article', {
          title: 'Article page'
          , article: article
        });
      })
    };

module.exports = app => { app.use('/article', router); };

router.get('/:id', articleGet);
