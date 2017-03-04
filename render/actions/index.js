
import { send } from 'redux-electron-ipc';

import {
  PROJECT_LOAD,
  PROJECT_CLOSE,
  CHANGELOG_LOAD,
  CHANGELOG_NOT_FOUND,
  ERROR
} from '../constants/actions';

export const closeProject = (event) => (dispatch) => dispatch({type: PROJECT_CLOSE});

export const openProject = (event) => (dispatch) => dispatch(send('project:open'));

export const openProjectByPath = (path) => (dispatch) => dispatch(send('project:openByPath', path));

export const getChangelog = (path) => (dispatch) => dispatch(send('changelog:load', path));

export const initChangelog = (path) => (dispatch) => dispatch(send('changelog:init', path));

export const addChange = (kind, text, dirname) => (dispatch) => dispatch(send('changelog:change', dirname, kind, text));


// IPC ----

export const loadProject = (event, project) => (dispatch) => dispatch({type: PROJECT_LOAD, project});

export const loadChangelog = (event, mdast) => dispatch => dispatch({type: CHANGELOG_LOAD, mdast});

export const changelogNotFound = (event, changelog) => dispatch => dispatch({type: CHANGELOG_NOT_FOUND});

export const errorOcurred = (event, message) => (dispatch) => dispatch({type: ERROR, message});
