
import { readFile } from 'fs';
import { resolve } from 'path';


export const loadChangelog = (event, dirname) => {
  readFile(resolve(dirname, 'changelog.md'), 'utf8', (err, data) => {
    event.sender.send('changelog:loaded', data);  
  });
}
