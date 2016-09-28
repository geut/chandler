
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createIpc from 'redux-electron-ipc';

import reducer from './reducers';
import App from './containers/app';
import { openPath } from './actions'

const ipc = createIpc({
  'project:open': openPath
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, ipc)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
