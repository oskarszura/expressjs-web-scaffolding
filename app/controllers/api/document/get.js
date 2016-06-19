const models = require('../../../models');

module.exports = (req, res) => {
  const collectionName = req.params.collection
    , documentName = req.params.document
    , responseModel = models[collectionName]

    , onFind = (err, models) => {
      const outputData = models;
      res.json(outputData);
    }

  if (!responseModel) {
    res.json({ status: 404 });
  } else if(collectionName === 'article' && req.query.search) {
    const searchWord = req.query.search;

    responseModel.find({
        $or:[{
          description: new RegExp(searchWord, 'i')
        }, {
          title: new RegExp(searchWord, 'i')
        }]})
      .exec(onFind);

  } else if(collectionName === 'article' && req.query.userId) {
    const userId = req.query.userId;
    responseModel.find({ userId: userId }).exec(onFind);
  } else {
    let search = documentName ? { _id : documentName } : {};
    responseModel.find(search).exec(onFind);
  }
}