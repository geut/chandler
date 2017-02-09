
import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import Changelog from './changelog';
import { closeProject } from '../actions';


const Main = ({ project, closeProject }) => (
  <div>
    <Header project={project} onCloseProject={closeProject} />
    <Changelog />
  </div>
);

const mapStateToProps = ({ project }) => ({ project });

export default connect(mapStateToProps, { closeProject })(Main);