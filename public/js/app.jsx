const React = require('react')
    ,reactDom = require('react-dom');

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});

/*reactDom.render(
    <CommentBox />,
    document.querySelector('.container')
);*/