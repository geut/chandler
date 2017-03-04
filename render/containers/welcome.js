
import React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../components/dashboard';
import { openProject, openProjectByPath } from '../actions';


const Welcome = ({ openProject, openProjectByPath, recent }) => (
  <Dashboard onOpenProject={openProject} onOpenRecent={openProjectByPath} recent={recent}/>
);

const mapStateToProps = ({ recent }) => ({ recent })

export default connect(mapStateToProps, { openProject, openProjectByPath })(Welcome);
