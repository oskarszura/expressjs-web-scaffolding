const React = require('react')
  , $ = require('jquery')
  , Rx = require('rxjs');

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
    this.source = new Rx.Subject()
  }

  componentDidMount () {
    this.source.subscribe(function(newValue) {
      this.setState({
        text: newValue
      })
    }.bind(this))
  }

  _onChangeHandler(e) {
    this.source.next(e.target.value)
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
                  onChange={this._onChangeHandler.bind(this)}
                  value={this.state.text} >
        </textarea>
      </div>
    );
  }
}

module.exports = TextInput;