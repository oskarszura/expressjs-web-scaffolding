const express = require('express')
  , router = express.Router()
  , passport = require('passport')
  , UserModel = require('../models/user')
  , renderer = require('../services/renderer')
  , passwordManager = require('../services/passwordManager')

  , loginGet = (req, res) => {
      renderer(req, res, 'login', {
        title: 'Login page'
        , error: false
      });
    }

  , loginPost = (req, res, next) => {
      const onLogin = err => {
        if (err) {
          req.session.messages = "Error";
          return res.end();
        }

        req.session.messages = "Login successfully";
        return res.redirect('/');
      }

      , onAuthenticate = (err, user, info) => {
          if (err) return res.end();

          if (!user) {
            renderer(req, res, 'login', {
              title: 'Login page'
              , error: true
            });
            return res.end();
          }

          req.logIn(user, onLogin);
        }

      passport.authenticate('local', onAuthenticate)(req, res, next);
    }

  , loginLogoutGet = (req, res) => {
      req.logout();
      res.redirect('/');
    }

  , loginRegisterGet = (req, res) => {
      renderer(req, res, 'register', {
        title: 'Registration page'
      });
    }

  , loginRegisterPost = (req, res) => {
      let user = req.body;

      user.password = passwordManager.encrypt(user.password)

      UserModel.create(user, (err, newUser) => {
        if (err) console.log(err);
        else res.redirect('/login');
      })
    };

module.exports = app => { app.use('/login', router); };

router.get('/', loginGet)
  .post('/', loginPost)
  .get('/logout', loginLogoutGet)
  .get('/register', loginRegisterGet)
  .post('/register', loginRegisterPost);
