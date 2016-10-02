
import { ipcMain } from  'electron';

import  { loadProject } from './project'; 
import  { loadChangelog } from './changelog'; 

const listeners = {
  'project:load': loadProject,
  'changelog:load': loadChangelog
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