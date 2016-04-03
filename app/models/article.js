const mongoose = require('mongoose')
  , Schema = mongoose.schema

  , ArticleSchema = new mongoose.Schema({
    title: 'string'
  , images: ['string']
  , description: 'string'
  , area: 'string'
  , price: 'string'
  , floor: 'string'
  , constructionYear: 'string'
  , country: 'string'
  , province: 'string'
  , city: 'string'
  , zipCode: 'string'
  , street: 'string'
  , houseNr: 'string'
  , appartmentNr: 'string'
  , telephone: 'string'
  , email: 'string'
  , userId: 'string'
  })

  , Article = mongoose.model('article', ArticleSchema);

module.exports = Article;