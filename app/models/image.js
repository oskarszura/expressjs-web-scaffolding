const mongoose = require('mongoose')
  , Schema = mongoose.schema

  , ImageSchema = new mongoose.Schema({
    content: 'string'
  , name: 'string'
  })

  , Image = mongoose.model('image', ImageSchema);

module.exports = Image;