const router = require('express').Router;
const renderer = require('../services/renderer');

const homeRouter = router();

const homeGet = (req, res) => {
  renderer(req, res, 'index', {
    title: 'Home page',
  });
};

module.exports = (app) => { app.use('/', homeRouter); };

homeRouter.get('/', homeGet);
