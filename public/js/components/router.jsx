const React = require('react')
  , $ = require('jquery')
  , reactDom = require('react-dom')
  , templateFrontPage = require('../templates/frontPage.jsx')
  , templateImageDropper = require('../templates/imageDropper.jsx')
  , templateNotFound = require('../templates/notFound.jsx')

  , Router = React.createClass({

    render: function () {

      switch (this.props.location[0])  {
        case '':

          return templateFrontPage.call(this);

          break;

        case 'image-dropper':

          return templateImageDropper.call(this);

          break;

        default:

          return templateNotFound.call(this);
      }

    }

  });

module.exports = Router;