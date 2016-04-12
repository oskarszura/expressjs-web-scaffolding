const React = require('react')
  , List = require('../../components/list.jsx')
  , utils = require('../../services/utils')
  , user = require('../../services/user');

module.exports = function () {
  const queryObject = {
    userId: user.getUserId()
  }
  , resource = `/api/article?${utils.serializeObject(queryObject)}`


  return (
    <div className="row">
      <div className="col-sm-12">
        <List source={resource}
              view="/admin#edit/:id"
              blockClass="brick-list"
              itemClass="brick-list__cell"
              imageClass="brick-list__image"
              titleClass="brick-list__title"
              descriptionClass="brick-list__description" />
      </div>
    </div>
  );
}
