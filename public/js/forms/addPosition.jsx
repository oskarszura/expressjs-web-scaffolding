const React = require('react')
  , TextInput = require('../components/textInput.jsx')
  , FileDropper = require('../components/fileDropper.jsx')
  , Rx = require('rxjs');

class addPositionForm extends React.Component {
  componentDidMount () {
    const submitElement = this.refs.submitElement
      , nameElement = this.refs.nameElement
      , descriptionElement = this.refs.descriptionElement
      , nameStream = Rx.Observable.fromEvent(nameElement, 'keyup')
      , descriptionStream = Rx.Observable.fromEvent(descriptionElement, 'keyup')
      , submitStream = Rx.Observable.fromEvent(submitElement, 'click');

    Rx.Observable.merge(nameStream, descriptionStream, submitStream)
      .subscribe(value => {

        /*const files = e.nativeEvent.dataTransfer.files
          , onLoad = file => e => {
          $.ajax({
            url: '/api/image'
            , dataType: 'json'
            , method: "POST"
            , cache: false
            , context: this
            , data: {
              name: file.fileName
              , content: e.target.result
            }
            , success: data => { console.log('fetch complete', data); }
          });
        };

        let file = files[0]
          , fileReader = new FileReader();

        fileReader.onload = onLoad(file);
        fileReader.readAsDataURL(file);*/
      });
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <TextInput label="Name"
                     name="name"
                     ref="nameElement" />
        </div>
        <div className="form-group">
          <TextInput label="Description"
                     name="description"
                     ref="descriptionElement"/>
        </div>
        <div className="form-group">
          <FileDropper />
        </div>
        <button className="btn btn-default btn-block"
                ref="submitElement">Submit</button>
      </div>
    );
  }
}

module.exports = addPositionForm;