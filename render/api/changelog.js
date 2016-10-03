
import { send } from 'redux-electron-ipc';

export const getChangelog = (path) => send('changelog:load', path);
