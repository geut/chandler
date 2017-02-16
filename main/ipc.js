
import { ipcMain } from  'electron';

import  { loadProject, openProject } from './api/project';
import  { loadChangelog, initChangelog, addChange } from './api/changelog';

const listeners = {
  'project:open': openProject,
  // 'project:load': loadProject,
  'changelog:load': loadChangelog,
  'changelog:init': initChangelog,
  'changelog:change': addChange
}

const all = Object.keys(listeners);

export default {

  listen() {
    all.map((listener) => ipcMain.on(listener, listeners[listener]));
  },

  shutdown() {
    all.map((listener) => ipcMain.removeListener(listener, listeners[listener]));
  }
}
