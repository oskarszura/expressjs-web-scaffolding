const React = require('react')
  , FileDropper = require('../components/fileDropper.jsx')
  , List = require('../components/list.jsx')
  , Store = require('../components/store.js')
  , store = new Store([{ text: 'Apple', key: 'apple' }
    , { text: 'Banana', key: 'banana' }
    , { text: 'Cranberry', key: 'cranberrt' }
  ])

module.exports = function () {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>
                Image Dropper
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <FileDropper />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <List items={ store.allItems } />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}