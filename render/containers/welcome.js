
import React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../components/dashboard';
import { openProject } from '../actions';


const Welcome = ({ openProject }) => (
  <Dashboard onOpenProject={openProject}/>
)


export default connect(null, { openProject })(Welcome);