
import project from '../api/project';
import * as types from '../constants/actions';

const create = (type, state) => ({
  type, ...state
});

export const loadProject = (path) => dispatch => {
  const { LOAD_PROJECT } = types;
  project.getProject(path, (project) => dispatch( create(LOAD_PROJECT, {project}) ) )
};

export const openPath = (event, path) => loadProject(path);

