const mongoose = require('mongoose')
  , Schema = mongoose.schema

  , UserSchema = new mongoose.Schema({
    username: 'string'
  , password: 'string'
  })

  , User = mongoose.model('user', UserSchema);

module.exports = User;