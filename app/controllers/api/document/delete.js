const models = require('../../../models');

module.exports = (req, res) => {
  const responseModel = models[req.params.collection]
    , documentId = req.params.document

    , onDelete = (err, model) => {
        const outputData = {
          status: 200
          , model: model
        };
        res.json(outputData);
      };

  responseModel.where({_id: documentId}).findOneAndRemove(onDelete)
}