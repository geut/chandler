
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/app';
import store from './stores';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
