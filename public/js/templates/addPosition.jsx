const React = require('react')
  , FileDropper = require('../components/fileDropper.jsx')

module.exports = function () {
  return (
    <div className="row">
      <div className="col-sm-12">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control"
                   ref="formName"
                   type="text" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control"
                      ref="formDescription"
                      rows="3">
            </textarea>
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