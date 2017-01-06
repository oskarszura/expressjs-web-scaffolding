const glob = require('glob');
const slug = require('slug');
const config = require('../config/config');

const documentFiles = glob.sync(`${config.root}/models/!(index).js`)
const models = {};

documentFiles.forEach((documentFile) => {
  const model = require(documentFile);
  models[slug(model.modelName)] = model;
});

module.exports = models;
