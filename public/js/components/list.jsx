const React = require('react')
    , $ = require('jquery')
    , R = require('ramda');

class ListItem extends React.Component {
  render() {
    return (
      <li className={this.props.itemClass}
          data-key={this.props.key}>
        <div className={this.props.titleClass}>
          {this.props.title}
        </div>
        <img className={this.props.imageClass}
             src={this.props.image}/>
        <p className={this.props.descriptionClass}>
          {this.props.description}
        </p>
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
      <ul className={this.props.blockClass}>
        { this.state
              .items
              .map(function(item) {
                return <ListItem key={item._id}
                                 title={item.title}
                                 image={item.image}
                                 description={item.description}
                                 itemClass={this.props.itemClass}
                                 imageClass={this.props.imageClass}
                                 titleClass={this.props.titleClass}
                                 descriptionClass={this.props.descriptionClass}
                /> }.bind(this))}
      </ul>
    );
  }
}

module.exports = List;