const express = require('express')
  , router = express.Router()

  , scraperGet = require('./scraper/get')

  , documentGet = require('./document/get')
  , documentPost = require('./document/post')
  , documentDelete = require('./document/delete')

  , apiGet = (req, res) => {
    res.json({ message: 'api v1' });
    }

module.exports = app => { app.use('/api', router); };

router.get('/', apiGet)
  .get('/scrape', scraperGet)
  .get('/:collection?/:document?', documentGet)
  .post('/:collection?/:document?', documentPost)
  .delete('/:collection?/:document?', documentDelete);