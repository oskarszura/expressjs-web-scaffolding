import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import ColoursApp from './containers/ColoursApp';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const applicationNode = document.querySelector('.js-admin-colours');

if (applicationNode) {
  render(
    <Provider store={store}>
      <ColoursApp />
    </Provider>,
    applicationNode
  );
}
