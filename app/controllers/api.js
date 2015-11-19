var express = require('express')
  , router = express.Router()
  , glob = require('glob')
  , slug = require('slug');

module.exports = function (app, config) {

    var documentFiles = glob.sync(config.root + '/app/models/*.js')
      , models = {};

    documentFiles.forEach(function (documentFile) {

        var model = require(documentFile);
        models[slug(model.modelName)] = model;

    });

    app.use('/api', router);

    router.get('/:collection?/:document?', function (req, res, next) {

        var responseModel = models[req.params.collection]
          , onFind = function (err, models) {

              var outputData = models;
              res.json(outputData);

            }

        if ( !responseModel ) { res.json({ status: 404 }); }
        else { responseModel.find().exec(onFind); }

    });

    router.post('/:collection?', function(req, res, next) {

      var responseModel = models[req.params.collection](req.body)
        , onSave = function (err, model) {

            var outputData = {
              status: 200
            , model: model
            };

            res.json(outputData);

          }

      responseModel.save(onSave)


    });

};