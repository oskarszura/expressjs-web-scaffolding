var mongoose = require('mongoose');
var Schema = mongoose.schema;

var UserSchema = new mongoose.Schema({
    username: 'string',
    password: 'string'
});

var User = mongoose.model('User', UserSchema);

module.exports = User;