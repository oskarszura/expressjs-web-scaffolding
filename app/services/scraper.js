const cheerio = require('cheerio')
  , request = require('request');

module.exports = url => new Promise((resolve, reject) => {
  request(url, (err, res, body) => {
    if(err) reject(err)
    resolve(body)
  })
})