const express = require('express')
  , session = require('express-session')
  , glob = require('glob')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , compress = require('compression')
  , methodOverride = require('method-override')
  , passport = require('passport')
  , mongoose = require('mongoose')
  , connectMongo = require('connect-mongo')

  , error404 = require('../app/middlewares/404')
  , acl = require('../app/middlewares/acl')
  , passportConfig = require('./passport')

  , MongoStore = connectMongo(session)
  , mongoURI = 'mongodb://localhost/sample_db'

  , onDbConnect = err => {
      console.log(err);
    }

  , db = mongoose.connect(process.env.MONGOLAB_URI || mongoURI, onDbConnect)

module.exports = (app, config) => {
  const controllers = glob.sync(config.root + '/app/controllers/*(*.js|api|admin)')

  app.set('views', config.root + '/app/views');
  app.set('view engine', 'ejs');

  // app.use(favicon(config.root + '/public/img/favicon.ico'));
  app.use((req, res, next) => {
    process.send('new request');
    next()
  })
  app.use(logger('dev'));
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
  app.use(cookieParser());
  app.use(compress());
  app.use(express.static(config.root + '/public'));
  app.use(methodOverride());
  app.use(session({
    store: new MongoStore({ mongooseConnection: db.connection })
  , secret: 'keyboard cat'
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(acl);

  controllers.forEach(controller => {
    require(controller)(app, config);
  });

  app.use(error404);

  passport.serializeUser(passportConfig.serializeUser);
  passport.deserializeUser(passportConfig.deserializeUser);
  passport.use(passportConfig.strategy());

  return app;
};
