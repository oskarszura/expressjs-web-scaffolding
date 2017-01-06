const mongoose = require('mongoose');
const Schema = mongoose.schema;

const ImageSchema = new mongoose.Schema({
  content: 'string',
  name: 'string',
});

const Image = mongoose.model('image', ImageSchema);

module.exports = Image;
