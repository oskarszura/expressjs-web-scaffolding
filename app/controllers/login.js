var express = require('express'),
    router = express.Router(),
    passport = require('passport');

module.exports = function (app) {
    app.use('/login', router);
};

router.get('/', function (req, res, next) {

    res.render('login', {
        title: 'Generator-Express MVC'
    });
});

router.post('/', function(req, res, next) {

    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }

        if (!user) {
            req.session.messages = info.message;
            return res.redirect('/login');
        }

        req.logIn(user, function(err) {
            if (err) {
                req.session.messages = "Error";
                return next(err);
            }

            req.session.messages = "Login successfully";
            return res.redirect('/');
        });

    })(req, res, next);
});
