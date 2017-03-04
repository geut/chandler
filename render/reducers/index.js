
import { combineReducers } from 'redux';

import project from './project';
import changelog from './changelog';
import error from './error';
import recent from './recent';

import { PROJECT_CLOSE } from '../constants/actions';

export default (state, action) => {
  if (action.type === PROJECT_CLOSE) {
    state = reset(state);
  }

  return appReducer(state, action);
}

const reset = (state) => ({ recent: state.recent });

const appReducer = combineReducers({
  project,
  changelog,
  error,
  recent
});
