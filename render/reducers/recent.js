

import { PROJECT_LOAD } from '../constants/actions';

const recent = (state = [], { type, project }) => {

  switch (type) {
    case PROJECT_LOAD:
      const { path, name } = project;
      return  stackFor(3, state, { path, name });
    default:
      return state
  }
};

const stackFor = (size, array, element) => {
  const filtered = array.filter((e) => { return e.path !== element.path });
  return [element].concat(filtered).slice(0, size);
}

export default recent;
