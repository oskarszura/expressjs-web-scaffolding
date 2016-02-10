const express = require('express')
  , router = express.Router()
  , passport = require('passport')
  , UserModel = require('../models/user')
  , renderer = require('../services/renderer');

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
    if (err) return next(err);

    if (!user) {
      renderer(req, res, 'login', {
        title: 'Login page'
      , error: true
      });
      return next();
    }

    req.logIn(user, err => {
      if (err) {
        req.session.messages = "Error";
        return next(err);
      }

      req.session.messages = "Login successfully";
      return res.redirect('/');
    });

  })(req, res, next);

});

router.get('/register', (req, res, nest) => {
  renderer(req, res, 'register', {
    title: 'Registration page'
  });
});

router.post('/register', (req, res, nest) => {
  UserModel.create(req.body, (err, newUser) => {
    if (err) console.log(err);
    else res.redirect('/login');
  })
});
