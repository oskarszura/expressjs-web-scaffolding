const express = require('express');
const router = express.Router();
const renderer = require('../services/renderer');

const homeGet = (req, res) => {
  renderer(req, res, 'index', {
    title: 'Home page',
  });
};

module.exports = (app) => { app.use('/', router); };

router.get('/', homeGet);
