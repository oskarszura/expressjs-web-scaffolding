const mongoose = require('mongoose');
const Schema = mongoose.schema;

const ArticleSchema = new mongoose.Schema({
  title: 'string',
  images: ['string'],
  description: 'string',
  userId: 'string',
});

const Article = mongoose.model('article', ArticleSchema);

module.exports = Article;
