
import { PROJECT_LOAD, PROJECT_CLOSE } from '../constants/actions';

const project = (state = { loaded: false }, { type, project }) => {

  switch (type) {
    case PROJECT_LOAD:
      return {
        ...state,
        ...project,
        loaded: true        
      }
    case PROJECT_CLOSE: 
      return {
        loaded: false
      }
    default:
      return state
  }
};

export default project;