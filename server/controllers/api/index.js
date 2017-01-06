const router = require('express').Router;
const documentGet = require('./document/get');
const documentPost = require('./document/post');
const documentDelete = require('./document/delete');

const apiRouter = router();

const apiGet = (req, res) => {
  res.json({ message: 'api v1' });
};

module.exports = (app) => { app.use('/api', apiRouter); };

apiRouter.get('/', apiGet)
  .get('/:collection?/:document?', documentGet)
  .post('/:collection?/:document?', documentPost)
  .delete('/:collection?/:document?', documentDelete);
