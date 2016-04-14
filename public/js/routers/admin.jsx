const React = require('react')
  , templateListArticle = require('../templates/admin/listArticle.jsx')
  , templateManageArticle = require('../templates/admin/manageArticle.jsx')
  , templateNotFound = require('../templates/notFound.jsx');

class Router extends React.Component {
  render() {
    switch (this.props.location[0])  {
      case '':
        return templateListArticle.call(this);
        break;

      case 'add':
        return templateManageArticle.call(this);
        break;

      case 'edit':
        return templateManageArticle.call(this, this.props.location[1]);
        break;

      default:
        return templateNotFound.call(this);
    }
  }
}

module.exports = Router;