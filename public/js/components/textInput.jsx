const React = require('react')
  , $ = require('jquery')
  , Rx = require('rxjs');

class TextInput extends React.Component {
  componentDidMount () {
    const inputElement = this.refs.inputElement
    , inputStream = Rx.Observable.fromEvent(inputElement, 'keyup');

    inputStream.subscribe(keyboardEvent => {
                 //console.log(String.fromCharCode(keyboardEvent.keyCode))
               });
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type="text"
               name={this.props.name}
               ref="inputElement"
               className="form-control" />
      </div>
    );
  }
}

module.exports = TextInput;