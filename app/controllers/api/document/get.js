const models = require('../../../models');

module.exports = (req, res) => {
  const collectionName = req.params.collection
    , documentName = req.params.document
    , responseModel = models[collectionName]

    , onFind = (err, models) => {
        const outputData = models;
        res.json(outputData);
      }

  let searchObject

  if (!responseModel) {
    res.json({
      message: 'Document doesn\'t exist'
    , status: 404
    });
  }

  if(collectionName === 'article' && req.query.search) {
    searchObject = {
        $or:[{
          description: new RegExp(req.query.search, 'i')
        }, {
          title: new RegExp(req.query.search, 'i')
        }]
      }
  } else if(collectionName === 'article' && req.query.userId) {
    searchObject = { userId: req.query.userId };
  } else {
    searchObject = documentName ? { _id : documentName } : {};
  }

  responseModel.find(searchObject).exec(onFind);
}