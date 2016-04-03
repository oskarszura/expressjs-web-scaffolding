const React = require('react')
    , reactDom = require('react-dom')
    , ListRouter = require('./routers/list.jsx')
    , AdminRouter = require('./routers/admin.jsx')
    , Search = require('./components/search.jsx')
    , ImageSlider = require('./components/imageSlider.jsx')

function handleNewHash () {
  const location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/')
      , listApp = <ListRouter location={location} />
      , listAppContainer = document.getElementById('js-app-list')
      , adminApp = <AdminRouter location={location} />
      , adminAppContainer = document.getElementById('js-app-admin')
      , searchApp = <Search redirectTo="/" />
      , searchAppContainer = document.getElementById('js-app-search')
      , imageSliderAppContainer = document.getElementById('js-app-image-slider')

  if(searchAppContainer)
    reactDom.render(searchApp, searchAppContainer);
  if(listAppContainer)
    reactDom.render(listApp, listAppContainer);
  if(adminAppContainer)
    reactDom.render(adminApp, adminAppContainer);
  if(imageSliderAppContainer) {
    const articleId = imageSliderAppContainer.dataset.id

    reactDom.render(
      <ImageSlider source={`/api/article/${articleId}`} />
      , imageSliderAppContainer);
  }
}

handleNewHash()
window.onhashchange = handleNewHash