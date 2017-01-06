const express = require('express');
const session = require('express-session');
const glob = require('glob');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const passport = require('passport');
const mongoose = require('mongoose');
const connectMongo = require('connect-mongo');
const error404 = require('./middlewares/404');
const acl = require('./middlewares/acl');
const passportConfig = require('./config/passport');

const MongoStore = connectMongo(session)
const mongoURI = 'mongodb://localhost/sample_db'

const onDbConnect = (err) => {
  console.log(err);
};
const db = mongoose.connect(process.env.MONGOLAB_URI || mongoURI, onDbConnect);

module.exports = (app, config) => {
  const controllers = glob.sync(`${config.root}/controllers/*(*.js|api|admin)`);

  app.set('views', `${config.root}/views`);
  app.set('view engine', 'ejs');

  // app.use(favicon(config.root + '/public/img/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
  app.use(cookieParser());
  app.use(compress());
  app.use(express.static(`${config.root}/../public`));
  app.use(methodOverride());
  app.use(session({
    store: new MongoStore({ mongooseConnection: db.connection }),
    secret: 'keyboard cat',
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(acl);

  controllers.forEach((controller) => {
    require(controller)(app, config);
  });

  app.use(error404);

  passport.serializeUser(passportConfig.serializeUser);
  passport.deserializeUser(passportConfig.deserializeUser);
  passport.use(passportConfig.strategy());

  return app;
};
