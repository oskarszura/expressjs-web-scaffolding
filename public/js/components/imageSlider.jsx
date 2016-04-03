const React = require('react')
  , Rx = require('rxjs')
  , $ = require('jquery');

class ImageSlider extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.source = $.get(this.props.source, function(result) {
      this.setState({
        items: result
      });

      this.forceUpdate();
    }.bind(this));
  }

  render () {
    return (
      <div className="component-image-slider">
        <img class="component-image-slider__item"
             src=""/>
      </div>
    );
  }
}

module.exports = ImageSlider;