const mongoose = require('mongoose')
  , Schema = mongoose.schema

  , ArticleSchema = new mongoose.Schema({
    title: 'string'
  , image: 'string'
  , imageName: 'string'
  , description: 'string'
  })

  , Article = mongoose.model('article', ArticleSchema);

module.exports = Article;