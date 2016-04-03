const React = require('react')
    , reactDom = require('react-dom')
    , ListRouter = require('./routers/list.jsx')
    , AddPositionRouter = require('./routers/addPosition.jsx')
    , Search = require('./components/search.jsx')
    , ImageSlider = require('./components/imageSlider.jsx')

function handleNewHash () {
  const location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/')
      , listApp = <ListRouter location={location} />
      , listAppContainer = document.getElementById('js-app-list')
      , addPositionApp = <AddPositionRouter location={location} />
      , addPositionAppContainer = document.getElementById('js-app-add-position')
      , searchApp = <Search redirectTo="/" />
      , searchAppContainer = document.getElementById('js-app-search')
      , imageSliderAppContainer = document.getElementById('js-app-image-slider')

  if(searchAppContainer)
    reactDom.render(searchApp, searchAppContainer);
  if(listAppContainer)
    reactDom.render(listApp, listAppContainer);
  if(addPositionAppContainer)
    reactDom.render(addPositionApp, addPositionAppContainer);
  if(imageSliderAppContainer) {
    const articleId = imageSliderAppContainer.dataset.id

    reactDom.render(
      <ImageSlider source={`/api/article/${articleId}`} />
      , imageSliderAppContainer);
  }
}

handleNewHash()
window.onhashchange = handleNewHash