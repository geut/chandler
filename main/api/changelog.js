
import { readFile } from 'fs';
import { resolve, normalize } from 'path';
import glob from 'glob';
import chan from '@geut/chan';

const { init, change, CHANGE_TYPE } = chan;

export const resolveChangelog = (dirname) => {
  const res = glob.sync('changelog.md', {cwd: dirname, nocase: true});

  if (!res.length) {
    return null;
  }

  return resolve(dirname, res[0]);
}


export const loadChangelog = (event, dirname) => {
  const path = resolveChangelog(dirname);

  if (path) {
    readFile(path, 'utf8', (err, data) => {
      event.sender.send('changelog:loaded', data);
    });
  } else {
      event.sender.send('changelog:not_found');
  }
}

export const initChangelog = (event, dirname) => {
  init({cwd: dirname})
    .then(() => loadChangelog(event, dirname));
};
