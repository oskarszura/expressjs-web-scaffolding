const React = require('react')
  , $ = require('jquery')

  , ListItem = React.createClass({

    render: function () {

      return (
        <li data-key={this.props.key}>
          {this.props.text}
        </li>);

    }

  })

  , List = React.createClass({

    render: function () {

      const items = this.props.items;

      return (
        <ul className="component-list">
          { items.map(item => <ListItem key={item.key} text={item.text} /> )}
        </ul>
      );

    }
    
  });


module.exports = List;