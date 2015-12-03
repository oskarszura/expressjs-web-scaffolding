const React = require('react')
  , $ = require('jquery')
  , reactDom = require('react-dom')
  , FileDropper = require('./fileDropper.jsx')

  , Router = React.createClass({

    render: function () {

      switch (this.props.location[0])  {
        case '':

          return <div class="row">
                  <div class="col-sm-12">
                    <div class="container">
                      <div class="row">
                        <div class="col-sm-12">
                          <h1>Title</h1>
                          <p>Welcome...</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">

                          You are logged in - congrats !!!

                          <FileDropper />
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>;

        default:

          return <div><h1>Not Found</h1></div>;
      }

    }

  });

module.exports = Router;