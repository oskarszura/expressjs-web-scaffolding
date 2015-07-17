var mongoose = require('mongoose');
var Schema = mongoose.schema;

var ArticleSchema = new mongoose.Schema({
    title: 'string',
    content: 'string'
});

var Article = mongoose.model('article', ArticleSchema);

module.exports = Article;