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
    <div class="row">
      <div class="col-sm-12">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h2>
                Image Dropper
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <FileDropper />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <List items={[{ text: 'Apple', key: 'apple' }
                          , { text: 'Banana', key: 'banana' }
                          , { text: 'Cranberry', key: 'cranberrt' }
              ]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}