const React = require('react')
    , List = require('../components/list.jsx')

module.exports = function () {
  return (
    <List source="/api/article"
          blockClass="brick-list"
          itemClass="brick-list__cell"
          imageClass="brick-list__image"
          titleClass="brick-list__title"
          descriptionClass="brick-list__description">
    </List>
  );
}