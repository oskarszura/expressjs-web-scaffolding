const React = require('react')
  , ManageArticleForm = require('./forms/manageArticle.jsx')

module.exports = function (id) {
  return (
    <div className="row">
      <div className="col-sm-12">
        <ManageArticleForm id={id} />
      </div>
    </div>
  );
}