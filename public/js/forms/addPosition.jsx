const React = require('react')
  , $ = require('jquery')
  , TextInput = require('../components/textInput.jsx')
  , FileDropper = require('../components/fileDropper.jsx')
  , Rx = require('rxjs');

class addPositionForm extends React.Component {
  componentDidMount () {
    const submitElement = this.refs.submitElement
      , nameElement = this.refs.nameElement
      , descriptionElement = this.refs.descriptionElement
      , imageElement = this.refs.imageElement
      , submitStream = Rx.Observable.fromEvent(submitElement, 'click');

    submitStream.subscribe(function(value) {

      $.post('/api/article', {
        title: nameElement.state.text
      , description: descriptionElement.state.text
      , image: imageElement.state.image
      , imageName: imageElement.state.imageName
      }, data => {
        console.log('fetch complete', data);
      });

    }.bind(this));
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <TextInput label="Name"
                     name="name"
                     ref="nameElement"
                     />
        </div>
        <div className="form-group">
          <TextInput label="Description"
                     name="description"
                     ref="descriptionElement"
                     />
        </div>
        <div className="form-group">
          <FileDropper ref="imageElement"/>
        </div>
        <button className="btn btn-default btn-block"
                ref="submitElement">Submit</button>
      </div>
    );
  }
}

module.exports = addPositionForm;