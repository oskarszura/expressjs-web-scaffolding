const React = require('react')
    ,reactDom = require('react-dom')
    ,fileDropper = require('./components/fileDropper.jsx');

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});

var FileDropper = React.createClass({
    render: function() {
        return (
            <div className="component-file-dropper">
                Drop files here...
            </div>
        );
    }
});


reactDom.render(
    <FileDropper />,
    document.querySelector('.js-file-dropper')
);