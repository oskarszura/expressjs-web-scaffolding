const fs = require('fs');
const { waterfall } = require('async');
const request = require('request');

module.exports = (req, res) => {
  const getColoursFromApi = (callback) => {
    const jar = request.jar();
    const cookie = request.cookie(`connect.sid=${req.cookies['connect.sid']}`);
    const url = `${req.protocol}://${req.headers.host}/api/colour`;

    jar.setCookie(cookie, url);

    request({ url, jar }, (err, colours) => {
      const mappedColours = JSON.parse(colours.body).map((colour) => {
        return `$colour-${colour.variableName}: ${colour.code};`;
      }).join('\n');
      callback(null, mappedColours);
    });
  };
  const saveColoursToFile = (coloursSnapshot, callback) => {
    const path = process.cwd();
    fs.writeFile(`${path}/tmp/colours.scss`, coloursSnapshot, (err) => {
      callback(null);
    });
  };

  waterfall([getColoursFromApi, saveColoursToFile], () => {});

  res.end(JSON.stringify({ status: 200 }));
};
