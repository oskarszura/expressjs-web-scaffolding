const mongoose = require('mongoose')
  , Schema = mongoose.schema

  , ArticleSchema = new mongoose.Schema({
    title: 'string'
  , images: ['string']
  , description: 'string'
  , areaElement: 'string'
  , priceElement: 'string'
  , floorElement: 'string'
  , constructionYear: 'string'
  , countryElement: 'string'
  , provinceElement: 'string'
  , cityElement: 'string'
  , zipCodeElement: 'string'
  , streetElement: 'string'
  , houseNrElement: 'string'
  , appartmentNrElement: 'string'
  , telephoneElement: 'string'
  , emailElement: 'string'
  })

  , Article = mongoose.model('article', ArticleSchema);

module.exports = Article;