const models = require('../../../models');

module.exports = (req, res) => {
  const collectionName = req.params.collection
    , documentName = req.params.document
    , responseModel = models[collectionName]

    , isSearchable = model => model.description && model.title

    , isBelongable = model => model.userId

    , onFind = (err, models) => {
        const outputData = models;
        res.json(outputData);
      }

  let searchObject = {}

  if (!responseModel) {
    res.json({
      message: 'Document doesn\'t exist'
    , status: 404
    });
  }

  if(req.query.search && isSearchable(responseModel)) {
    searchObject = {
        $or:[{
          description: new RegExp(req.query.search, 'i')
        }, {
          title: new RegExp(req.query.search, 'i')
        }]
      }
  } else if(req.query.userId && isBelongable(responseModel)) {
    searchObject = { userId: req.query.userId };
  } else {
    searchObject = documentName ? { _id : documentName } : {};
  }

  responseModel.find(searchObject).exec(onFind);
}