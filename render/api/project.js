
import { ipcRenderer } from 'electron';


export default {
  getProject(path, cb) {
    ipcRenderer.once('project:loaded', (event, project) => {cb(project)});
    ipcRenderer.send('project:load', path);
  }
}