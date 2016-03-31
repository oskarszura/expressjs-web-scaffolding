const React = require('react')
  , $ = require('jquery')
  , Rx = require('rxjs');

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  componentDidMount () {
    const inputElement = this.refs.inputElement
      , inputStream = Rx.Observable.fromEvent(inputElement, 'keyup');

    inputStream.subscribe(function(keyboardEvent) {
      this.setState({
        text: inputElement.value
      })
    }.bind(this));
  }

  render() {
    return (
      <div className="component-text-area">
        <label className="component-text-area__label">
          {this.props.label}
        </label>
        <textarea type="text"
                  rows="3"
                  name={this.props.name}
                  ref="inputElement"
                  className="component-text-area__input"
                  text={this.state.text} >
        </textarea>
      </div>
    );
  }
}

module.exports = TextInput;