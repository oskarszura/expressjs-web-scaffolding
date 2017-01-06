const express = require('express');
const router = express.Router();
const renderer = require('../services/renderer');
const Article = require('../models/article');

const articleGet = (req, res) => {
  const onFind = (err, article) => {
    renderer(req, res, 'article', {
      title: 'Article page',
      article,
    });
  }

  Article.findOne({ _id: req.params.id }, onFind);
};

module.exports = (app) => { app.use('/article', router); };

router.get('/:id', articleGet);
