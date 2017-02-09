
import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import Changelog from '../components/changelog';
import { closeProject } from '../actions';


const Main = ({ project, changelog, closeProject }) => (
  <div>
    <Header project={project} onCloseProject={closeProject} />
    { changelog && 
    <Changelog changelog={changelog} />
    }
  </div>
);

const mapStateToProps = ({ project }) => ({ project });

export default connect(mapStateToProps, { closeProject })(Main);