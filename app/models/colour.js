const mongoose = require('mongoose');

const ColourSchema = new mongoose.Schema({
  name: 'string',
  code: 'string',
});

const Colour = mongoose.model('colour', ColourSchema);

module.exports = Colour;
