const React = require('react')
    ,reactDom = require('react-dom')
    ,FileDropper = require('./components/fileDropper.jsx');

reactDom.render(
    <FileDropper />,
    document.querySelector('.js-file-dropper')
);