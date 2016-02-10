const React = require('react')
  , $ = require('jquery');

class ListItem extends React.Component {
  render() {
    return (
      <li data-key={this.props.key}>
        {this.props.text}
      </li>);
  }
}

class List extends React.Component {
  render() {
    const items = this.props.items;

    return (
      <ul className="component-list">
        { items.map(item => <ListItem key={item.key} text={item.text} /> )}
      </ul>
    );
  }
}

module.exports = List;