
import project from '../api/project';
import * as types from '../constants/actions';


export const loadProject = (path) => dispatch => {
console.log('action loadProject')  
  project.getProject(path, (project) => dispatch({type: types.LOAD_PROJECT, project}))
}
