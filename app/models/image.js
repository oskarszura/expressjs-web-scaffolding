var mongoose = require('mongoose')
  , Schema = mongoose.schema;

var ImageSchema = new mongoose.Schema({
  content: 'string'
, name: 'string'
});

var Image = mongoose.model('image', ImageSchema);

module.exports = Image;