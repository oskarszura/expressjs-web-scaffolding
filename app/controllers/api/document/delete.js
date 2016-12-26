const models = require('../../../models');

module.exports = (req, res) => {
  const responseModel = models[req.params.collection];
  const documentId = req.params.document;

  const onDelete = (err, model) => {
    const outputData = {
      status: 200,
      model,
    };
    res.json(outputData);
  };

  responseModel.where({ _id: documentId }).findOneAndRemove(onDelete);
}
