const express = require('express');
const passport = require('passport');
const UserModel = require('../models/user');
const renderer = require('../services/renderer');
const passwordManager = require('../services/passwordManager');

const routerConstructor = express.Router;
const router = routerConstructor();

const loginGet = (req, res) => {
  renderer(req, res, 'login', {
    title: 'Login page',
    error: false,
  });
};

const loginPost = (req, res, next) => {
  const onLogin = (err) => {
    if (err) {
      req.session.messages = 'Error';
      return res.end();
    }

    req.session.messages = 'Login successfully';
    return res.redirect('/');
  };

  const onAuthenticate = (err, user) => {
    if (err) return res.end();

    if (!user) {
      renderer(req, res, 'login', {
        title: 'Login page',
        error: true,
      });
      return res.end();
    }

    return req.logIn(user, onLogin);
  };

  passport.authenticate('local', onAuthenticate)(req, res, next);
};

const loginLogoutGet = (req, res) => {
  req.logout();
  res.redirect('/');
};

const loginRegisterGet = (req, res) => {
  renderer(req, res, 'register', {
    title: 'Registeration page',
  });
};

const loginRegisterPost = (req, res) => {
  const user = req.body;

  user.password = passwordManager.encrypt(user.password)

  UserModel.create(user, (err) => {
    if (err) console.log(err);
    else res.redirect('/login');
  });
};

module.exports = (app) => { app.use('/login', router); };

router.get('/', loginGet)
  .post('/', loginPost)
  .get('/logout', loginLogoutGet)
  .get('/register', loginRegisterGet)
  .post('/register', loginRegisterPost);
