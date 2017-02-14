
import { CHANGELOG_LOAD, CHANGELOG_NOT_FOUND } from '../constants/actions';

const changelog = (state = { loaded: false }, action) => {
  switch (action.type) {
    case CHANGELOG_LOAD:
      const { mdast } = action;
      return {
        ...state,
        mdast,
        loaded: true
      };
    case CHANGELOG_NOT_FOUND:
      return {
        ...state,
        loaded: false
      };
    default:
      return state
  }
};

export default changelog;