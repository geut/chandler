
import { ipcMain } from  'electron';

const listeners = {
  'project:load': (event, path) =>  event.sender.send('project:loaded', {name: 'helloFromElectron'})
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