const router = require('express').Router;
const renderer = require('../services/renderer');
const Article = require('../models/article');

const articleRouter = router();

const articleGet = (req, res) => {
  const onFind = (err, article) => {
    renderer(req, res, 'article', {
      title: 'Article page',
      article,
    });
  }

  Article.findOne({ _id: req.params.id }, onFind);
};

module.exports = (app) => { app.use('/article', articleRouter); };

articleRouter.get('/:id', articleGet);
