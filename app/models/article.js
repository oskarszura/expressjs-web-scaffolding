const mongoose = require('mongoose')
  , Schema = mongoose.schema

  , ArticleSchema = new mongoose.Schema({
    title: 'string'
  , images: ['string']
  , description: 'string'
  , userId: 'string'
  })

  , Article = mongoose.model('article', ArticleSchema);

module.exports = Article;
