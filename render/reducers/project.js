
import * as types from '../constants/actions';

const project = (state = {loaded: false}, {type, project}) => {

  switch (type) {
    case types.PROJECT_LOAD:
      return {
        ...state,
        ...project,
        loaded: true        
      }
    case types.PROJECT_CLOSE: 
      return {
        loaded: false
      }
    default:
      return state
  }
};

export default project;