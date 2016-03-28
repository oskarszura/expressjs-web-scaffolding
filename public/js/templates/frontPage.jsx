const React = require('react')
    , List = require('../components/list.jsx')
    , utils = require('../services/utils')

module.exports = function () {
  const queryObject = {
      search: utils.getParameterByName('search')
    }
    , resource = `api/article?${utils.serializeObject(queryObject)}`

  return (
    <List source={resource}
          blockClass="brick-list"
          itemClass="brick-list__cell"
          imageClass="brick-list__image"
          titleClass="brick-list__title"
          descriptionClass="brick-list__description">
    </List>
  );
}