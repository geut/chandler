
import path from 'path';

import { app, BrowserWindow, Menu } from 'electron';

import api from './api';
import menu from './menu';

const index = path.resolve(__dirname, '..', 'index.html');
let mainWindow = null;

app.on('window-all-closed', () => {
  // if (process.platform != 'darwin') {
    app.quit();
  // }
  api.shutdown();
});

app.on('ready', () => {
  api.listen();

  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL(`file://${index}`);

  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

});
