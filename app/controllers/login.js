var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    UserModel = require('../models/user');

module.exports = function (app) {
    app.use('/login', router);
};

router.get('/', function (req, res, next) {
    res.render('login', {
        title: 'Generator-Express MVC',
        error: false
    });
});

router.get('/logout', function (req, res, next) {
    req.logout();
    res.redirect('/');
});

router.post('/', function (req, res, next) {

    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }

        if (!user) {
            res.render('login', {
                title: 'Generator-Express MVC',
                error: true
            });
            return next();
        }

        req.logIn(user, function (err) {
            if (err) {
                req.session.messages = "Error";
                return next(err);
            }

            req.session.messages = "Login successfully";
            return res.redirect('/');
        });

    })(req, res, next);
});

router.get('/register', function (req, res, nest) {
    res.render('register', {
        title: 'Generator-Express MVC'
    });
});

router.post('/register', function (req, res, nest) {

    UserModel.create(req.body, function (err, newUser) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/login');
        }
    })
});
