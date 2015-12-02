const React = require('react')
    , reactDom = require('react-dom')
    , FileDropper = require('./components/fileDropper.jsx')
    , Router = require('./components/router.jsx');

reactDom.render(
    <FileDropper />,
    document.querySelector('.js-file-dropper')
);


function handleNewHash() {
  var location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');
  var application = <Router location={location} />;
  reactDom.render(application, document.getElementsByTagName('body')[0]);
}

handleNewHash()
window.onhashchange = handleNewHash