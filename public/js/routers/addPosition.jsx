const React = require('react')
  , templateAddPosition = require('../templates/addPosition.jsx')
  , templateNotFound = require('../templates/notFound.jsx');

class Router extends React.Component {
  render() {
    switch (this.props.location[0])  {
      case '':
        return templateAddPosition.call(this);
        break;

      default:
        return templateNotFound.call(this);
    }
  }
}

module.exports = Router;