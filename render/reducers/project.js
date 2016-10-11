
import * as types from '../constants/actions';

const project = (state = {loaded: false}, action) => {
  
  switch (action.type) {
    case types.LOAD_PROJECT:
      return {
        ...state,
        loaded: true,
        ...action.project
      }
    default:
      return state
  }
};

export default project;