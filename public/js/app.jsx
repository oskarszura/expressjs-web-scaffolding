const React = require('react')
    ,ReactDom = require('react-dom');

React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

ReactDOM.render(
    <Hello name="World" />,
    document.body
);
