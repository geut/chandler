
import { send } from 'redux-electron-ipc';

export const getProject = (path) => send('project:load', path);
