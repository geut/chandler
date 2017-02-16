
import { send } from 'redux-electron-ipc';

import {
  PROJECT_LOAD,
  PROJECT_CLOSE,
  CHANGELOG_LOAD,
  CHANGELOG_NOT_FOUND,
  EDITOR_EDITING,
  EDITOR_DONE_EDITING
} from '../constants/actions';

export const closeProject = (event) => (dispatch) => {
  return dispatch({
    type: PROJECT_CLOSE
  });
};

export const openProject = (event) => (dispatch) => dispatch(send('project:open'));

export const getChangelog = (path) => (dispatch) => dispatch(send('changelog:load', path));

export const initChangelog = (path) => (dispatch) => dispatch(send('changelog:init', path));

export const markEditing = (event, kind) => (dispatch) => dispatch({type: EDITOR_EDITING, kind});

// IPC ----

export const loadProject = (event, project) => (dispatch) => {
  return dispatch({
    type: PROJECT_LOAD,
    project
  });
};

export const loadChangelog = (event, mdast) => dispatch => {
  return dispatch({
    type: CHANGELOG_LOAD,
    mdast
  });
};

export const changelogNotFound = (event, changelog) => dispatch => {
  return dispatch({
    type: CHANGELOG_NOT_FOUND
  });
};
