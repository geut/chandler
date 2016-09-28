
import * as types from '../constants/actions';

const project = (state = {}, action) => {
  
  switch (action.type) {
    case types.LOAD_PROJECT:
      return {
        ...action.project
      }
    default:
      return state
  }
};

export default project;