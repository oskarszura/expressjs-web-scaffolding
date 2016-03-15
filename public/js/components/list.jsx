const React = require('react')
    , $ = require('jquery')
    , R = require('ramda');

class ListItem extends React.Component {
  render() {
    return (
      <li data-key={this.props.key}>
        <div>
          {this.props.text}
        </div>
        <div>
          <img src="{this.props.imageURL}"/>
        </div>
      </li>);
  }
}

class List extends React.Component {
  componentWillMount() {
    this.source = $.get(this.props.source, function(result) {
      this.setState({
        items: result
      });

      this.forceUpdate();
    }.bind(this));
  }

  render() {
    if(!this.state) {
      return (
        <div>List not loaded - no data yet...</div>
      )
    }

    return (
      <ul className="component-list">
        { this.state.items.map(item => <ListItem key={item._id}
                                                 title={item.title}
                                                 image={item.content} /> )}
      </ul>
    );
  }
}

module.exports = List;