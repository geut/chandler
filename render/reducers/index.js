
import { combineReducers } from 'redux';

import project from './project';
import changelog from './changelog';
import editor from './editor';

import { PROJECT_CLOSE } from '../constants/actions';

export default (state, action) => {
  if (action.type === PROJECT_CLOSE) {
    state = undefined;
  }

  return appReducer(state, action);
}

const appReducer = combineReducers({
  project,
  changelog,
  editor
});
