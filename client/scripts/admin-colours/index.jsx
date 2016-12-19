import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import ColoursApp from './components/App';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <ColoursApp />
  </Provider>,
  document.querySelector('.js-admin-colours')
);
