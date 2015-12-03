const React = require('react')
    , reactDom = require('react-dom')
    , Router = require('./components/router.jsx');

function handleNewHash () {

  var location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/')
    , application = <Router location={location} />;

  reactDom.render(application, document.getElementById('app'));

}

handleNewHash()
window.onhashchange = handleNewHash