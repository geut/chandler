
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createIpc from 'redux-electron-ipc';

import reducer from '../reducers';
import { loadProject, loadChangelog, changelogNotFound } from '../actions'

const ipc = createIpc({
  'project:loaded': loadProject,
  'changelog:loaded': loadChangelog,
  'changelog:not_found': changelogNotFound
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, ipc)
);

export default store;
