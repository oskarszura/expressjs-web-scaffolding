const React = require('react')
  , templateListArticle = require('../templates/admin/listArticle.jsx')
  , templateManageArticle = require('../templates/admin/manageArticle.jsx')
  , templateNotFound = require('../templates/notFound.jsx');

class Router extends React.Component {
  render() {
    const view = this.props.location[0];

    switch (view)  {
      case '':
        return templateListArticle.call(this);
        break;

      case 'add':
        return templateManageArticle.call(this, 'add');
        break;

      case 'edit':
        const id = this.props.location[1]
        return templateManageArticle.call(this, 'edit', id);
        break;

      default:
        return templateNotFound.call(this);
    }
  }
}

module.exports = Router;