import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import GeneratorApp from './containers/GeneratorApp';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const applicationNode = document.querySelector('.js-admin-generator');

if (applicationNode) {
  render(
    <Provider store={store}>
      <GeneratorApp />
    </Provider>,
    applicationNode
  );
}
