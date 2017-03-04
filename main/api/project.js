
import { resolve } from 'path';
import { readFile, existsSync } from 'fs';
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

  sender.send('project:beforeload');

  if (!existsSync(resolve(dirname))) {
    sender.send('project:error', `${dirname} does not exists.`);
    return;
  }

  readFile(resolve(dirname, 'package.json'), 'utf8', (err, data) => {
    if (err) {
        sender.send('project:error', `No package.json found in ${dirname}`);
        return;
    }

    const pkg = JSON.parse(data);

    pkg.path = dirname;

    sender.send('project:loaded', pkg);

  });
};

export const openProject = (eventOrFocusedWindow) => {
  const { sender, webContents } = eventOrFocusedWindow;
  showOpenDialog((path) => readPackageJson(sender || webContents, path));
}

export const openProjectByPath = (event, path) => {
  readPackageJson(event.sender, path);
}
