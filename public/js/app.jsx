const React = require('react')
    , reactDom = require('react-dom')
    , ListRouter = require('./routers/list.jsx')
    , AddPositionRouter = require('./routers/addPosition.jsx');

function handleNewHash () {
  const location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/')
      , listApp = <ListRouter location={location} />
      , listAppContainer = document.getElementById('js-app-list')
      , addPositionApp = <AddPositionRouter location={location} />
      , addPositionAppContainer = document.getElementById('js-app-add-position')

  if(listAppContainer)
    reactDom.render(listApp, listAppContainer);
  if(addPositionAppContainer)
    reactDom.render(addPositionApp, addPositionAppContainer);
}

handleNewHash()
window.onhashchange = handleNewHash