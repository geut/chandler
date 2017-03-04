
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createIpc from 'redux-electron-ipc';

import reducer from '../reducers';
import { loadState, saveState } from '../utils/localStorage';
import {
  loadProject,
  closeProject,
  loadChangelog,
  changelogNotFound,
  errorOcurred
} from '../actions';


const ipc = createIpc({
  'project:beforeload': closeProject,
  'project:loaded': loadProject,
  'project:error': errorOcurred,
  'changelog:loaded': loadChangelog,
  'changelog:not_found': changelogNotFound
});

const persisted = loadState();

const store = createStore(
  reducer,
  persisted,
  applyMiddleware(thunk, ipc)
);

store.subscribe(() => {
  const { recent } = store.getState();
  saveState({ recent })
});

export default store;
