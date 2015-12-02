const React = require('react')
  , $ = require('jquery')

  , Router = React.createClass({

    render: function() {

      switch (this.props.location[0])  {
        case '':
          return <div><h1>Index Page</h1></div>;

        default:
          return <div><h1>Not Found</h1></div>;
      }

    }

  });

module.exports = Router;