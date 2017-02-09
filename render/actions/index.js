
import { send } from 'redux-electron-ipc';

import { PROJECT_LOAD, PROJECT_CLOSE, CHANGELOG_LOAD } from '../constants/actions';

export const closeProject = (event) => (dispatch) => {
  return dispatch({
    type: PROJECT_CLOSE
  });
};

export const openProject = (event) => (dispatch) => dispatch(send('project:open'));


// IPC ----
// export const openPath = (event, path) => send('project:load', path);

export const loadProject = (event, project) => (dispatch) => {
  return dispatch({
    type: PROJECT_LOAD,
    project
  });
};

export const loadChangelog = (event, changelog) => dispatch => {
  return dispatch({
    type: CHANGELOG_LOAD, 
    changelog 
  });
};
