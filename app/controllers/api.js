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
        const collectionName = req.params.collection
          , documentName = req.params.document
          , responseModel = models[collectionName]
          , onFind = (err, models) => {
              const outputData = models;
              res.json(outputData);

            }

        if ( !responseModel ) {
          res.json({ status: 404 });
        } else if(
          collectionName === 'article'
          && req.query.search
        ) {
          const searchWord = req.query.search;

          responseModel.find({
            $or:[{
              description: new RegExp(searchWord, 'i')
            }, {
              title: new RegExp(searchWord, 'i')
            }]})
          .exec(onFind);

        } else if(
          collectionName === 'article'
          && req.query.userId
        ) {
          const userId = req.query.userId;

          responseModel.find({
                userId: userId
              })
            .exec(onFind);
          
        } else {
          let search = documentName ? { _id : documentName } : {};

          responseModel.find(search).exec(onFind);
        }
    });

    router.post('/:collection?/:document?', (req, res, next) => {
      const responseModel = models[req.params.collection]
        , objectData = req.body
        , documentId = req.params.document

        , onSave = (err, model) => {
            const outputData = {
              status: 200
            , model: model
            };

            res.json(outputData);
        }

        , onUpdate = (err, model) => {
          const outputData = {
            status: 200
            , model: model
          };

          res.json(outputData);
        }

      if(documentId) {
        responseModel.findByIdAndUpdate({_id : documentId}, objectData,onUpdate)
      } else{
        responseModel.create(objectData, onSave)
      }
    });

    router.delete('/:collection?/:document?', (req, res, next) => {
      const responseModel = models[req.params.collection]
        , documentId = req.params.document

        , onDelete = (err, model) => {
          const outputData = {
            status: 200
            , model: model
          };

          res.json(outputData);
        }

        responseModel.where({_id: documentId})
          .findOneAndRemove(onDelete)
    });
};