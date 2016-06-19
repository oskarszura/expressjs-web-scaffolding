const models = require('../../../models');

module.exports = (req, res) => {
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
}