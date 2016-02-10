const React = require('react')
  , AddPositionForm = require('../forms/addPosition.jsx')

module.exports = function () {
  return (
    <div className="row">
      <div className="col-sm-12">
        <AddPositionForm />
      </div>
    </div>
  );
}