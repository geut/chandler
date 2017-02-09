
import { CHANGELOG_LOAD } from '../constants/actions';

const changelog = (state = {}, action) => {
  switch (action.type) {
    case CHANGELOG_LOAD:
console.log(action)    
      const { changelog:source } = action; 
      return {
        source
      };
    default:
      return state
  }
};

export default changelog;