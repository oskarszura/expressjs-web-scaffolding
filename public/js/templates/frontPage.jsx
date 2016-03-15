const React = require('react')
    , List = require('../components/list.jsx')

module.exports = function () {
  return (
    <List source="/api/article"></List>
    /*<div className="brick-list">
      <div className="brick-list__cell">
        Brick 1
      </div>
      <div className="brick-list__cell">
        Brick 2
      </div>
      <div className="brick-list__cell">
        Brick 3
      </div>
      <div className="brick-list__cell">
        Brick 4
      </div>
    </div>*/
  );
}