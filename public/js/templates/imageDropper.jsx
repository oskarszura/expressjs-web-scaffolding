const React = require('react')
  , FileDropper = require('../components/fileDropper.jsx')

module.exports = function () {
  return (
    <div class="row">
      <div class="col-sm-12">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <FileDropper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}