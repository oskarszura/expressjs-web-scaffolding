const React = require('react')
  , FileDropper = require('../components/fileDropper.jsx')
  , TextInput = require('../components/textInput.jsx');

module.exports = function () {
  return (
    <div className="row">
      <div className="col-sm-12">
        <form>
          <div className="form-group">
            <TextInput />
          </div>
          <div className="form-group">
            <TextInput />
          </div>
          <div className="form-group">
            <FileDropper />
          </div>
          <button className="btn btn-default btn-block"
                  type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}