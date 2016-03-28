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
      <div>
        <label>{this.props.label}</label>
        <input type="text"
               name={this.props.name}
               ref="inputElement"
               className="form-control"
               text={this.state.text} />
      </div>
    );
  }
}

module.exports = TextInput;