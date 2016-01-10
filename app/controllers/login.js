const express = require('express')
  , router = express.Router()
  , passport = require('passport')
  , UserModel = require('../models/user');

module.exports = app => { app.use('/login', router); };

router.get('/', (req, res, next) => {
  res.render('login', {
    title: 'Generator-Express MVC'
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
      res.render('login', {
        title: 'Generator-Express MVC'
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
  res.render('register', { title: 'Generator-Express MVC' });
});

router.post('/register', (req, res, nest) => {
  UserModel.create(req.body, (err, newUser) => {
    if (err) { console.log(err); }
    else { res.redirect('/login'); }
  })
});
