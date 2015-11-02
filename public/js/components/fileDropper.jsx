const React = require('react');

var FileDropper = React.createClass({
    allowDrop: function (e) {
        e.preventDefault();
    },

    handleOnDrop: function(e) {
        e.preventDefault();
        console.log(e)
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