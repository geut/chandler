

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../components/main';
import Welcome from '../components/welcome';
import { getChangelog } from '../api/changelog'

class Project extends Component {

  componentWillReceiveProps({ project }) {
    const { project:currProject, getChangelog } = this.props;

    if ( project !== currProject ) {
      getChangelog(project.path);
    }
  }

  render() {
    const { project, changelog } = this.props;
    const { loaded } = project;
    
    return ( 
      loaded ? 
      <Main project={project} changelog={changelog}/> :
      <Welcome/>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project,
  changelog: state.changelog
});

export default connect(mapStateToProps, { getChangelog })(Project);