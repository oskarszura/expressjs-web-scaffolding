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
        images: result[0].images
      });

      this.forceUpdate();
    }.bind(this));
  }

  render () {
    if(!this.state) {
      return (
        <div>List not loaded - no data yet...</div>
      )
    }

    return (
      <div className="component-image-slider">
        { this.state
          .images
          .map(function(image) {
            return <img class="component-image-slider__item"
                        src={image} />
          }.bind(this))}
      </div>
    );
  }
}

module.exports = ImageSlider;