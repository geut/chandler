
import { getProject } from '../api/project';
import * as types from '../constants/actions';

const create = (type, state) => ({
  type, ...state
});

export const loadProject = (event, project) => dispatch => {
  const { LOAD_PROJECT } = types;
  
  dispatch( create(LOAD_PROJECT, { project }) );
};

export const openPath = (event, path) => getProject(path);

