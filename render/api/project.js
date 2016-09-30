
import { ipcRenderer } from 'electron';


export const getProject = (path) => {
  ipcRenderer.send('project:load', path);
}
