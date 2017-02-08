
import { getProject, selectProject } from '../api/project';
import { getChangelog } from '../api/changelog';
import * as types from '../constants/actions';

const create = (type, state) => ({
  type, ...state
});

export const loadProject = (event, project) => (dispatch, getState) => {
  const { PROJECT_LOAD } = types;
  return dispatch( create(PROJECT_LOAD, { project }) );
};

export const closeProject = (event) => (dispatch) => {
  const { PROJECT_CLOSE } = types;
  return dispatch( create(PROJECT_CLOSE) );
}

export const openProject = (event) => (dispatch) => dispatch(selectProject());

// IPC
export const openPath = (event, path) => getProject(path); 
// IPC
export const loadChangelog = (event, changelog) => dispatch => {
  const { CHANGELOG_LOAD } = types;
  return dispatch( create(CHANGELOG_LOAD, { changelog }) );
}
