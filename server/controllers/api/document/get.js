const models = require('../../../models');

module.exports = (req, res) => {
  const collectionName = req.params.collection;
  const documentName = req.params.document;
  const responseModel = models[collectionName];

  const isSearchable = model => model.description && model.title
  const isBelongable = model => model.userId
  const onFind = (err, foundModels) => { res.json(foundModels); };

  let searchObject = {}

  if (!responseModel) {
    res.json({
      message: 'Document doesn\'t exist',
      status: 404,
    });
  }

  if (req.query.search && isSearchable(responseModel)) {
    searchObject = {
      $or: [{
        description: new RegExp(req.query.search, 'i'),
      }, {
        title: new RegExp(req.query.search, 'i'),
      }],
    };
  } else if (req.query.userId && isBelongable(responseModel)) {
    searchObject = { userId: req.query.userId };
  } else {
    searchObject = documentName ? { _id : documentName } : {};
  }

  responseModel.find(searchObject).exec(onFind);
}
