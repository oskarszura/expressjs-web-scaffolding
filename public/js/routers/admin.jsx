const React = require('react')
  , templateList = require('../templates/admin/list.jsx')
  , templateAddPosition = require('../templates/admin/addPosition.jsx')
  , templateNotFound = require('../templates/notFound.jsx');

class Router extends React.Component {
  render() {
    switch (this.props.location[0])  {
      case '':
        return templateList.call(this);
        break;

      case 'add':
        return templateAddPosition.call(this);
        break;

      case 'edit':
        return templateAddPosition.call(this, this.props.location[1]);
        break;

      default:
        return templateNotFound.call(this);
    }
  }
}

module.exports = Router;