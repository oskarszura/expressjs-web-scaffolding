const express = require('express');
const renderer = require('../services/renderer');

const router = express.Router();

const adminGet = clientAppClass => (req, res) => {
  renderer(req, res, 'admin', {
    title: 'Admin',
    clientAppClass,
  });
};

module.exports = app => { app.use('/admin', router); };

router.get('/', adminGet(''));
router.get('/colours', adminGet('js-admin-colours'));
