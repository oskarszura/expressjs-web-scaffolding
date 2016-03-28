const React = require('react')
  , templateFrontPage = require('../templates/frontPage.jsx')
  , templateNotFound = require('../templates/notFound.jsx');

class Router extends React.Component {
  render() {
    switch (this.props.location[0]) {
      case '':
        return templateFrontPage.call(this);
        break;

      default:
        return templateNotFound.call(this);
    }
  }
}

module.exports = Router;