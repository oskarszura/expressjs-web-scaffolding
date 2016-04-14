const React = require('react')
    , reactDom = require('react-dom')
    , FrontPageRouter = require('./routers/frontPage.jsx')
    , AdminRouter = require('./routers/admin.jsx')
    , Search = require('./components/search.jsx')
    , ImageSlider = require('./components/imageSlider.jsx')

function handleNewHash () {
  const location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/')
      , frontPageApp = <FrontPageRouter location={location} />
      , frontPageAppContainer = document.getElementById('js-app-list')
      , adminApp = <AdminRouter location={location} />
      , adminAppContainer = document.getElementById('js-app-admin')
      , searchApp = <Search redirectTo="/" />
      , searchAppContainer = document.getElementById('js-app-search')
      , imageSliderAppContainer = document.getElementById('js-app-image-slider')

  if(searchAppContainer)
    reactDom.render(searchApp, searchAppContainer);
  if(frontPageAppContainer)
    reactDom.render(frontPageApp, frontPageAppContainer);
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