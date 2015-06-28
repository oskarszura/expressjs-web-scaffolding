var express = require('express'),
    router = express.Router();

module.exports = function (app) {
    app.use('/api', router);
};

router.get('/', function (req, res, next) {
    var outputData = {
        a : 1,
        b : [
            'aaa',
            'bbb',
            'ccc'
        ]
    }

    res.json(outputData);
});
