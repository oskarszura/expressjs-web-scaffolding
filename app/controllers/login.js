const express = require('express')
  , router = express.Router()
  , passport = require('passport')
  , UserModel = require('../models/user')
  , renderer = require('../services/renderer')
  , passwordManager = require('../services/passwordManager');

module.exports = app => { app.use('/login', router); };

router.get('/', (req, res, next) => {
  renderer(req, res, 'login', {
    title: 'Login page'
    , error: false
  });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

router.post('/', (req, res, next) => {

  passport.authenticate('local', (err, user, info) => {
    if (err) return res.end();

    if (!user) {
      renderer(req, res, 'login', {
        title: 'Login page'
      , error: true
      });
      return res.end();
    }

    req.logIn(user, err => {
      if (err) {
        req.session.messages = "Error";
        return res.end();
      }

      req.session.messages = "Login successfully";
      return res.redirect('/');
    });

  })(req, res, next);

});

router.get('/register', (req, res, next) => {
  renderer(req, res, 'register', {
    title: 'Registration page'
  });
});

router.post('/register', (req, res, next) => {
  let user = req.body;

  user.password = passwordManager.encrypt(user.password)

  UserModel.create(user, (err, newUser) => {
    if (err) console.log(err);
    else res.redirect('/login');
  })
});
