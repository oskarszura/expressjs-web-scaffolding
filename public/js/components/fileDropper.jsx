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
      , onLoad = function(file) {
          return function(e)  {
            this.setState({
              imageName: file.fileName
              , image: e.target.result
            });

            this.forceUpdate();
        }.bind(this);
      }.bind(this);

    let file = files[0]
      , fileReader = new FileReader();

    fileReader.onload = onLoad(file);
    fileReader.readAsDataURL(file);
  }

  render() {
    if(!this.state) {
      return (
        <div className="component-file-dropper">
          <div className="component-file-dropper__dropzone"
               onDrop={this.handleOnDrop.bind(this)}
               onDragOver={this.allowDrop.bind(this)}>
            Drop files here...
          </div>
        </div>
      );
    }

    return (
      <div className="component-file-dropper">
        <div className="component-file-dropper__dropzone"
          onDrop={this.handleOnDrop.bind(this)}
          onDragOver={this.allowDrop.bind(this)}>
          Drop files here...
        </div>
        <input type="hidden" defaultValue={this.state.image} />
        <img className="component-file-dropper__preview"
             src={this.state.image} />
      </div>
    );
  }
}

module.exports = FileDropper;