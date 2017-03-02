
import {
  PROJECT_LOAD,
  ERROR
} from '../constants/actions';

const error = (state = null, { type, message }) => {
    switch (type) {
      case ERROR:
        return  message
      case PROJECT_LOAD:
        return null;
      default:
        return state;
    }
}

export default error;
