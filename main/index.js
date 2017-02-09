
import { resolve } from 'path';

import { app, BrowserWindow, Menu } from 'electron';

import ipc from './ipc';
import menu from './menu';

const index = resolve(__dirname, '..', 'index.html');
let mainWindow = null;

app.on('window-all-closed', () => {
  // if (process.platform != 'darwin') {
    app.quit();
  // }
  ipc.shutdown();
});

app.on('ready', () => {
  ipc.listen();

  mainWindow = new BrowserWindow({width: 800, height: 600}); //titleBarStyle: 'hidden-inset'

  mainWindow.loadURL(`file://${index}`);

  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

});
