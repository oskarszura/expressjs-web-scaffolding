const express = require('express')
  , router = express.Router()
  , glob = require('glob')
  , slug = require('slug')
  , scraper = require('../services/scraper');

module.exports = (app, config) => {
    const documentFiles = glob.sync(config.root + '/app/models/*.js')
      , models = {};

    documentFiles.forEach(documentFile => {
        const model = require(documentFile);
        models[slug(model.modelName)] = model;
    });

    app.use('/api', router);

    router.get('/scrape', (req, res) => {
      const uriToScrap = req.params.uri

        scraper(uriToScrap)
        .then(html => {
          res.json({
            html: html
          });
        })
        .catch(err => {
          res.json({
            err: err
          });
        })
    })

    router.get('/:collection?/:document?', (req, res, next) => {
        const responseModel = models[req.params.collection]
          , onFind = (err, models) => {
              const outputData = models;
              res.json(outputData);

            }
        if ( !responseModel ) { res.json({ status: 404 }); }
        else { responseModel.find().exec(onFind); }
    });

    router.post('/:collection?', (req, res, next) => {
      const responseModel = models[req.params.collection](req.body)
        , onSave = (err, model) => {
            const outputData = {
              status: 200
            , model: model
            };

            res.json(outputData);
          }
      responseModel.save(onSave)
    });
};