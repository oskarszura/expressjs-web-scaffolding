const React = require('react')
  , templateListArticle = require('../templates/frontPage/listArticle.jsx')
  , templateNotFound = require('../templates/notFound.jsx');

class Router extends React.Component {
  render() {
    switch (this.props.location[0]) {
      case '':
        return templateListArticle.call(this);
        break;

      default:
        return templateNotFound.call(this);
    }
  }
}

module.exports = Router;