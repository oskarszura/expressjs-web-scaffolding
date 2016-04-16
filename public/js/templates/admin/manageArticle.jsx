const React = require('react')
  , ManageArticleForm = require('./forms/manageArticle.jsx')

module.exports = function (key, id) {
  return (
    <div key={key}
         className="row">
      <div className="col-sm-12">
        <ManageArticleForm id={id} />
      </div>
    </div>
  );
}