const mongoose = require('mongoose');
const Schema = mongoose.schema;

const UserSchema = new mongoose.Schema({
  username: 'string',
  password: 'string',
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
