const glob = require('glob')
  , slug = require('slug')
  , config = require('../../config/config')

  , documentFiles = glob.sync(config.root + '/app/models/!(index).js')
  , models = {};

documentFiles.forEach(documentFile => {
  const model = require(documentFile);
  models[slug(model.modelName)] = model;
});

module.exports = models;