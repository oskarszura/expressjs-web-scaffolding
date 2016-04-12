const React = require('react')
  , AddPositionForm = require('../../forms/admin/addPosition.jsx')

module.exports = function (id) {
  return (
    <div className="row">
      <div className="col-sm-12">
        <AddPositionForm id={id} />
      </div>
    </div>
  );
}