
import { getProject } from '../api/project';
import * as types from '../constants/actions';

const create = (type, state) => ({
  type, ...state
});

export const loadProject = (path) => dispatch => {
  const { LOAD_PROJECT } = types;
  
  dispatch( create(LOAD_PROJECT, {project: getProject(path)}) );
};

export const openPath = (event, path) => loadProject(path);

