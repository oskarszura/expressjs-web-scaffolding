const React = require('react');

var FileDropper = React.createClass({
    allowDrop: function (e) {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    },

    handleOnDrop: function(e) {
        e.stopPropagation();
        e.preventDefault();

        var files = e.nativeEvent.dataTransfer.files

        for(var key in files) {

            var file = files[key]
            , fileReader = new FileReader();

            fileReader.onload = (function(file) {
                return function(e) {
                    console.log(file.fileName, e.target.result)
                };
            })(file);

            fileReader.readAsDataURL(file);

        }

    },

    render: function() {
        return (
            <div className="component-file-dropper" onDrop={this.handleOnDrop} onDragOver={this.allowDrop}>
                Drop files here...
            </div>
        );
    }
});

module.exports = FileDropper