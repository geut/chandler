
import { ipcRenderer } from 'electron';


export const getProject = (path) => {
  // ipcRenderer.once('project:loaded', (event, project) => {cb(project)});

  return ipcRenderer.sendSync('project:load', path);
}
