var express = require('express');
var session = require('express-session');
var glob = require('glob');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compress = require('compression');
var methodOverride = require('method-override');
var passport = require('passport');
var LocalStrategy = require('passport-local');

module.exports = function (app, config) {
    app.set('views', config.root + '/app/views');
    app.set('view engine', 'ejs');

    // app.use(favicon(config.root + '/public/img/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(compress());
    app.use(express.static(config.root + '/public'));
    app.use(methodOverride());

    app.use(session({
        secret: 'keyboard cat'
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        user.id = 0;
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        done(null, {
            username: 'oskar.szura@gmail.com',
            password: 'admin',
            id: 0
        });
    });

    app.use(function (req, res, next) {
        if (req.path == '/login' || req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/login');
        }
    });

    var controllers = glob.sync(config.root + '/app/controllers/*.js');
    controllers.forEach(function (controller) {
        require(controller)(app);
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
            usernameField: 'username',
            passwordField: 'password'
        },
        function (username, password, done) {

            if (username === 'oskar.szura@gmail.com') {
                return done(null, {
                    username: 'oskar.szura@gmail.com',
                    password: 'admin'
                });
            } else {
                return done(null, false, {message: "Wrong password"});
            }

        }
    ));

};
