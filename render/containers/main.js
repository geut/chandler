
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import Header from '../components/header';
import Changelog from './changelog';
import { closeProject } from '../actions';


const Main = ({ project, closeProject }) => (
  <div className={css(main)}>
    <Header project={project} onCloseProject={closeProject} />
    <Changelog />
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