
import path from 'path';

import { app, BrowserWindow } from 'electron';

const index = path.resolve(__dirname, '..', 'index.html');
let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL(`file://${index}`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});