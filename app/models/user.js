var mongoose = require('mongoose')
  , Schema = mongoose.schema;

var UserSchema = new mongoose.Schema({
  username: 'string'
, password: 'string'
});

var User = mongoose.model('user', UserSchema);

module.exports = User;