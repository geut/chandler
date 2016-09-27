
const project = (state = { name: 'test', enabled: false }, action) => {
  switch (action.type) {
    case 'ENABLE':
      return {
        ...state,
        enabled: true
      }
    default:
      return state
  }
};

export default project;