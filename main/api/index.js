
import { ipcMain } from  'electron';

import  { loadProject } from './project'; 

const listeners = {
  'project:load': loadProject
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