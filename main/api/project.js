
import { resolve } from 'path';
import { readFile, stat } from 'fs';
import { dialog } from 'electron';

export const openProject = (event) => {
  dialog.showOpenDialog(
    { properties: ['openDirectory'] },
    (dir) => {  
      if (dir && dir.length) {
        loadProject(event, dir[0]);  
      }
    }
  );
}

export const loadProject = (event, dirname) => {

  readFile(resolve(dirname, 'package.json'), 'utf8', (err, data) => {
    if (err) return; // #todo

    const pkg = JSON.parse(data);
    
    pkg.path = dirname;
    
    stat(resolve(dirname, 'changelog.md'), (err, stats) => {

      pkg.hasChangelog = !err;

      event.sender.send('project:loaded', pkg);

    });
    
    
  });

};
