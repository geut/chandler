import { EDITOR_EDITING, EDITOR_DONE_EDITING } from '../constants/actions';

const editor = (state = { editing: null }, action) => {
  switch (action.type) {
    case EDITOR_EDITING:
      const { kind } = action;
      return {
        ...state,
        editing: kind
      };
    case EDITOR_DONE_EDITING:
      return {
        editing: null
      };
    default:
      return state
  }
};

export default editor;
