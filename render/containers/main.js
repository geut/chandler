
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import Header from '../components/header';
import Dragbar from '../components/dragbar';
import Editor from './editor';
import { closeProject } from '../actions';


const Main = ({ project, closeProject }) => (
  project.loaded &&
  <div className={css(main)}>
    <Dragbar title={project.name}/>
    <Header project={project} onCloseProject={closeProject} />
    <Editor path={project.path}/>
  </div>
);

const { main } = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  }
})

const mapStateToProps = ({ project }) => ({ project });

export default connect(mapStateToProps, { closeProject })(Main);
