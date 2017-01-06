const LocalStrategy = require('passport-local');
const UserModel = require('./../models/user');
const passwordManager = require('./../services/passwordManager')

const serializeUser = (user, done) => { done(null, user.id); }
const deserializeUser = (id, done) => {
  const onFind = (err, loggedUser) => {
    if (err) {
      return done(new Error(`User ${id} does not exist`));
    }

    return done(null, loggedUser);
  }

  UserModel.findOne(id, onFind);
};

const strategy = () => new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}
, (username, password, done) => {
  const onFind = (err, loggedUser) => {
    if (err) {
      console.log(err);
    } else {
      return done(null, loggedUser);
    }
  };

  UserModel.findOne({
    username,
    password: passwordManager.encrypt(password),
  }, onFind);
});

module.exports = {
  serializeUser,
  deserializeUser,
  strategy,
};
