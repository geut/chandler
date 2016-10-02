
import { LOAD_CHANGELOG } from '../constants/actions';

const changelog = (state = '', action) => {
  switch (action.type) {
    case LOAD_CHANGELOG:
      const { changelog } = action; 
      return changelog;
    default:
      return state
  }
};

export default changelog;