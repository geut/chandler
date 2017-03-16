
import React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../components/dashboard';
import { openProject, openProjectByPath } from '../actions';


const Welcome = ({ openProject, openProjectByPath, recent, project }) => (
  !project.loaded &&
  <Dashboard onOpenProject={openProject} onOpenRecent={openProjectByPath} recent={recent}/>
);

const mapStateToProps = ({ recent, project }) => ({ recent, project })

export default connect(mapStateToProps, { openProject, openProjectByPath })(Welcome);
