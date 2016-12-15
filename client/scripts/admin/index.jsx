import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import adminReducer from './reducers';
import AdminApp from './components/App';

const store = createStore(adminReducer)

render(
  <Provider store={store}>
    <AdminApp />
  </Provider>,
  document.querySelector('.js-admin')
)
