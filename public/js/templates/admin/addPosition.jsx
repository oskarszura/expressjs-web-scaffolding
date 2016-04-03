const React = require('react')
  , AddPositionForm = require('../../forms/admin/addPosition.jsx')

module.exports = function () {
  return (
    <div className="row">
      <div className="col-sm-12">
        <AddPositionForm />
      </div>
    </div>
  );
}