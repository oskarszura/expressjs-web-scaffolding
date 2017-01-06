const renderer = require('../../services/renderer');

module.exports = clientAppClass => (req, res) => {
  renderer(req, res, 'admin', {
    title: 'Admin',
    clientAppClass,
  });
};
