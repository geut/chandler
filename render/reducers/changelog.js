
import { CHANGELOG_LOAD } from '../constants/actions';

const changelog = (state = '', action) => {
  switch (action.type) {
    case CHANGELOG_LOAD:
      const { changelog } = action; 
      return changelog;
    default:
      return state
  }
};

export default changelog;