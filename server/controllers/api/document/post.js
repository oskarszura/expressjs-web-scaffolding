const models = require('../../../models');

module.exports = (req, res) => {
  const responseModel = models[req.params.collection];
  const objectData = req.body;
  const documentId = req.params.document;

  const onSave = (err, model) => {
    const outputData = {
      status: 200,
      model,
    };

    res.json(outputData);
  };

  const onUpdate = (err, model) => {
    const outputData = {
      status: 200,
      model,
    };

    res.json(outputData);
  };

  if (documentId) {
    responseModel.findByIdAndUpdate({ _id : documentId }, objectData, onUpdate);
  } else {
    responseModel.create(objectData, onSave);
  }
}
