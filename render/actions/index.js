
import { getProject } from '../api/project';
import { getChangelog } from '../api/changelog';
import * as types from '../constants/actions';

const create = (type, state) => ({
  type, ...state
});

export const loadProject = (event, project) => (dispatch, getState) => {
  const { LOAD_PROJECT } = types;  
  return dispatch( create(LOAD_PROJECT, { project }) );    
};

export const openPath = (event, path) => getProject(path);

export const loadChangelog = (event, changelog) => dispatch => {
  const { LOAD_CHANGELOG } = types;
  return dispatch( create(LOAD_CHANGELOG, { changelog }) );
}
