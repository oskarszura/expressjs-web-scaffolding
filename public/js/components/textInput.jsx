const React = require('react')
  , $ = require('jquery')
  , Rx = require('rxjs');

class TextInput extends React.Component {
  componentDidMount () {
    const inputElement = this.refs.inputElement
    , inputStream = Rx.Observable.fromEvent(inputElement, 'keyup');

    inputStream.subscribe(keyboardEvent => {
                 console.log(String.fromCharCode(keyboardEvent.keyCode))
               });
  }

  render() {
    return (
      <div>
        <label>Name</label>
        <input type="text"
               ref="inputElement"
               className="form-control" />
      </div>
    );
  }
}

module.exports = TextInput;