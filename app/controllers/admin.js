const express = require('express');
const renderer = require('../services/renderer');

const router = express.Router;

const adminGet = (req, res) => {
  renderer(req, res, 'admin', {
    title: 'Admin',
  });
};

module.exports = app => { app.use('/admin', router()); };

router.get('/', adminGet);
