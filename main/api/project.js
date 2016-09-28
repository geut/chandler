
import path from 'path';
import fs from 'fs';


export const loadProject = (event, dirname) => {

  fs.readFile(path.resolve(dirname, 'package.json'), 'utf8', (err, data) => {
    if (err) return; // #todo

    const pkg = JSON.parse(data);
    // event.sender.send('project:loaded', pkg)
    event.returnValue = pkg;
  });

}; 