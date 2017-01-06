const express = require('express');
const router = express.Router();
const renderer = require('../services/renderer');

const errorGet = (req, res) => {
  renderer(req, res, '404', {
    title: 'Error 404',
  });
};

module.exports = (app) => { app.use('/error', router); };

router.get('/404', errorGet);
