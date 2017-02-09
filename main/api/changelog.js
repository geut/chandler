
import { readFile } from 'fs';
import { resolve, normalize } from 'path';
import glob from 'glob';


export const resolveChangelog = (dirname) => {
  const res = glob.sync('changelog.md', {cwd: dirname, nocase: true});

  if (!res.length) {
    return false;
  }

  return resolve(dirname, res[0]);
}


export const loadChangelog = (event, dirname) => {
  readFile(resolveChangelog(dirname), 'utf8', (err, data) => {
    event.sender.send('changelog:loaded', data);
  });
}
