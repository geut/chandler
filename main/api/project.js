
import { resolve } from 'path';
import { readFile, stat } from 'fs';
import { dialog } from 'electron';

const showOpenDialog =  (cb) => {
    dialog.showOpenDialog(
    { properties: ['openDirectory'] },
    (dir) => {  
      if (dir && dir.length) {
       cb(dir[0]);
      }
    }
  );
}

const readPackageJson = (sender, dirname) => {

  readFile(resolve(dirname, 'package.json'), 'utf8', (err, data) => {
    if (err) return; // #todo

    const pkg = JSON.parse(data);
    
    pkg.path = dirname;
    
    stat(resolve(dirname, 'changelog.md'), (err, stats) => {

      pkg.hasChangelog = !err;

      sender.send('project:loaded', pkg);

    });
  });
};

export const openProject = (eventOrFocusedWindow) => {
  const { sender, webContents } = eventOrFocusedWindow;
  showOpenDialog((path) => readPackageJson(sender || webContents, path));
}

