
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createIpc from 'redux-electron-ipc';

import reducer from '../reducers';
import { openPath, loadProject } from '../actions'

const ipc = createIpc({
  'project:open': openPath,
  'project:loaded': loadProject
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, ipc)
);

export default store;
