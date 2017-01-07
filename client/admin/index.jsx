import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import GeneratorApp from './generator/containers/GeneratorApp';
import ColoursApp from './colours/containers/ColoursApp';
import rootReducer from './reducer';
import SideMenu from './SideMenu';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

class App extends React.Component {
  render() {
    return (
      <div className="admin-content">
        <SideMenu />
        <div className="admin-content__application">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const applicationNode = document.querySelector('.js-admin');

if (applicationNode) {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/admin" component={App}>
          <IndexRoute component={ColoursApp} />
          <Route path="/admin/colours" component={ColoursApp} />
          <Route path="/admin/generator" component={GeneratorApp} />
        </Route>
      </Router>
    </Provider>,
    applicationNode
  );
}

