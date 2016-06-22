const LocalStrategy = require('passport-local')

  , UserModel = require('../app/models/user')
  , passwordManager = require('../app/services/passwordManager')

  , serializeUser = (user, done) => { done(null, user.id); }

  , deserializeUser = (id, done) => {
      const onFind = (err, loggedUser) => {
        if (err) {
          done(new Error('User ' + id + ' does not exist'));
        } else {
          return done(null, loggedUser);
        }
      }

      UserModel.findOne(id, onFind);
    }

  , strategy = () => new LocalStrategy({
      usernameField: 'username'
    , passwordField: 'password'
    }
    , (username, password, done) => {
      const onFind = (err, loggedUser) => {

        if (err) {
          console.log(err);
        } else {
          return done(null, loggedUser);
        }
      }

      UserModel.findOne({
          username: username
        , password: passwordManager.encrypt(password)
      }, onFind);
    }
  )

module.exports = {
    serializeUser
  , deserializeUser
  , strategy
}