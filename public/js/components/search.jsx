const React = require('react')
  , Rx = require('rxjs')
  , $ = require('jquery');

class Search extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const textfieldElement = this.refs.textfieldElement
      , submitElement = this.refs.submitElement
      , inputStream = Rx.Observable.fromEvent(textfieldElement, 'keyup')
      , submitStream = Rx.Observable.fromEvent(submitElement, 'click');

    inputStream.subscribe(function(keyboardEvent) {
      this.setState({
        searchText: textfieldElement.value
      })
    }.bind(this));


    submitStream.subscribe(function(value) {
      window.location = `${this.props.redirectTo}?search=${this.state.searchText}`;
    }.bind(this));
  }

  render () {
    return (
      <div className="component-search">
        <input className="component-search__textfield"
               placeholder="Search"
               type="text"
               ref="textfieldElement" />
        <div className="component-search__buttons">
          <button className="component-search__submit-button"
                  type="submit"
                  ref="submitElement">
            Go
          </button>
        </div>
      </div>
    );
  }
}

module.exports = Search;