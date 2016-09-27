
import { combineReducers } from 'redux';

import project from './project';
import changelog from './changelog';

export default combineReducers({
  project,
  changelog
});
