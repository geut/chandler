
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ipcRenderer } from 'electron';


import { loadProject } from '../actions';
import Main from '../components/main';

class App extends Component {

  componentWillMount() {
    const { loadProject, current } = this.props;
    if (current) {
      loadProject(current);
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
  }

  render() {
    const { project } = this.props;
    let component;

    if (Object.keys(project).length) { // #asquito
      component = <Main project={project} />;
    } else {
      component = <h1>Open a Project!</h1>
    }

    return component;
  }
}



const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, { loadProject })(App);
