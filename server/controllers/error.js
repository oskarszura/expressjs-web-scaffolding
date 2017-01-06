const router = require('express').Router;
const renderer = require('../services/renderer');

const errorRouter = router();

const errorGet = (req, res) => {
  renderer(req, res, '404', {
    title: 'Error 404',
  });
};

module.exports = (app) => { app.use('/error', errorRouter); };

errorRouter.get('/404', errorGet);
