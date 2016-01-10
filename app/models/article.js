const mongoose = require('mongoose')
  , Schema = mongoose.schema

  , ArticleSchema = new mongoose.Schema({
    title: 'string'
  , content: 'string'
  })

  , Article = mongoose.model('article', ArticleSchema);

module.exports = Article;