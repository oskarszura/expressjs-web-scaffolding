const React = require('react')
    , $ = require('jquery')
    , R = require('ramda');

class ListItem extends React.Component {
  render() {
    return (
      <li className={this.props.itemClass}
          data-key={this.props.key}>
        <a href={"/article/" + this.props._id}>
          <div className={this.props.titleClass}>
            {this.props.title}
          </div>
          <img className={this.props.imageClass}
               src={this.props.image}/>
          <div className={this.props.descriptionClass}>
            <p>
              {this.props.country} {this.props.province} {this.props.city}
            </p>
            <p>
              {this.props.area} m<sup>2</sup>
            </p>
          </div>
        </a>
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
                                 image={item.images[0]}
                                 _id={item._id}
                                 area={item.area}
                                 country={item.country}
                                 province={item.province}
                                 city={item.city}
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