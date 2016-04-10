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
      , currentImage: 0
      });

      this.forceUpdate();
    }.bind(this));
  }

  showNext () {
    if(this.state.currentImage + 1 < this.state.images.length)
      this.setState({ currentImage: this.state.currentImage + 1 })
  }

  showPrevious () {
    if(this.state.currentImage - 1 >= 0)
      this.setState({ currentImage: this.state.currentImage - 1 })
  }

  render () {
    if(!this.state) {
      return (
        <div>List not loaded - no data yet...</div>
      )
    }

    return (
      <div className="component-image-slider">
        <div className="component-image-slider__next"
             onClick={this.showNext.bind(this)}>
          <div className="glyphicon glyphicon-circle-arrow-up"></div>
        </div>
          <div className="component-image-slider__container">
            <img className="component-image-slider__item"
                 src={this.state.images[this.state.currentImage]} />
          </div>
        <div className="component-image-slider__previous"
             onClick={this.showPrevious.bind(this)}>
          <div className="glyphicon glyphicon-circle-arrow-down"></div>
        </div>
      </div>
    );
  }
}

module.exports = ImageSlider;