
import { readFile } from 'fs';
import { resolve, normalize } from 'path';
import chan, { parser as chanParser } from '@geut/chan';

const { init, change, CHANGE_TYPE } = chan;


export const loadChangelog = (event, dirname) => {
  const parser = chanParser(dirname);

  if (parser.exists()) {
    event.sender.send('changelog:loaded', parser.stringify());
  } else {
      event.sender.send('changelog:not_found');
  }
}

export const retrieveChangelog = (event, dirname) => {
  const p = parser(dirname);

}

export const initChangelog = (event, dirname) => {
  init({cwd: dirname})
    .then(() => loadChangelog(event, dirname));
};
