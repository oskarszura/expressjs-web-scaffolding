const scraper = require('../../../services/scraper')

module.exports = (req, res) => {
  const uriToScrap = req.params.uri
    , onSuccess = html => { res.json({ html: html }); }
    , onError = err => { res.json({ err: err }); }

  scraper(uriToScrap)
    .then(onSuccess)
    .catch(onError)
}