const React = require('react')
  , $ = require('jquery')

class FileDropper extends React.Component {
  allowDrop (e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  handleOnDrop (e) {
    e.stopPropagation();
    e.preventDefault();

    const files = e.nativeEvent.dataTransfer.files
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
    fileReader.readAsDataURL(file);
  }

  render() {
    return (
      <div className="component-file-dropper"
           onDrop={this.handleOnDrop}
           onDragOver={this.allowDrop}>
        Drop files here...
      </div>
    );
  }
}

module.exports = FileDropper;