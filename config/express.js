var express = require('express')
  , session = require('express-session')
  , glob = require('glob')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , compress = require('compression')
  , methodOverride = require('method-override')
  , passport = require('passport')
  , LocalStrategy = require('passport-local');

var mongoose = require('mongoose'),
  db = mongoose.connect('mongodb://localhost/sample_db', function (err) {

    console.log(err);

  });

var UserModel = require('../app/models/user');

module.exports = function (app, config) {

  app.set('views', config.root + '/app/views');
  app.set('view engine', 'ejs');

  // app.use(favicon(config.root + '/public/img/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(compress());
  app.use(express.static(config.root + '/public'));
  app.use(methodOverride());
  app.use(session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function (user, done) { done(null, user.id); });
  passport.deserializeUser(function (id, done) {

    UserModel.findOne(id, function (err, loggedUser) {

      if (err) {
        done(new Error('User ' + id + ' does not exist'));
      } else {
        return done(null, loggedUser);
      }

    });

  });

  app.use(function (req, res, next) {

      if (req.path == '/login'
          || req.path == '/login/register'
          || req.isAuthenticated()) {
          //|| true) { // @TODO - remove
          next();
      } else {
          res.redirect('/login');
      }

  });

  var controllers = glob.sync(config.root + '/app/controllers/*.js');

  controllers.forEach(function (controller) {

    require(controller)(app, config);

  });

  app.use(function (req, res, next) {

    var err = new Error('Not Found');
    err.status = 404;
    next(err);

  });

  if (app.get('env') === 'development') {
    app.use(function (err, req, res) {

      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: err,
          title: 'error'
      });

    });
  }

  app.use(function (err, req, res) {

    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });

  });

  passport.use(new LocalStrategy({
      usernameField: 'username'
    , passwordField: 'password'
    }
  , function (username, password, done) {

    UserModel.findOne({
      username: username
    , password: password
    }
    , function (err, loggedUser) {

      if (err) {
        console.log(err);
      } else {
        //return done(null, false, {message: "Wrong password"});
        return done(null, loggedUser);
      }

    });

    }

  ));

};
