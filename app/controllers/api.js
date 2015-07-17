var express = require('express');
var router = express.Router();
var glob = require('glob');
var slug = require('slug');

module.exports = function (app, config) {
    var documentFiles = glob.sync(config.root + '/app/models/*.js');
    var models = {};

    documentFiles.forEach(function (documentFile) {
        var model = require(documentFile)
        models[slug(model.modelName)] = model;
    });

    app.use('/api', router);

    router.get('/:collection?/:document?', function (req, res, next) {
        var responseModel = models[req.params.collection];

        if (!responseModel) {
            res.json({
                status: 404
            });
        } else {
            responseModel.find()
                .exec(function (err, models) {
                    var outputData = models;
                    res.json(outputData);
                });
        }
    });

};