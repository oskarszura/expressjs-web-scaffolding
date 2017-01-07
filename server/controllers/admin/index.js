const express = require('express');
const adminGet = require('./get');
const adminGenerate = require('./generate');

const router = express.Router();

module.exports = (app) => { app.use('/admin', router); };

router.get('/', adminGet(''));
router.get('/colours', adminGet('js-admin'));
router.get('/generator', adminGet('js-admin'));
router.get('/generate', adminGenerate);
