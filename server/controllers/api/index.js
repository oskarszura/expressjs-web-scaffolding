const express = require('express');
const documentGet = require('./document/get');
const documentPost = require('./document/post');
const documentDelete = require('./document/delete');

const router = express.Router();

const apiGet = (req, res) => {
  res.json({ message: 'api v1' });
};

module.exports = (app) => { app.use('/api', router); };

router.get('/', apiGet)
  .get('/:collection?/:document?', documentGet)
  .post('/:collection?/:document?', documentPost)
  .delete('/:collection?/:document?', documentDelete);
