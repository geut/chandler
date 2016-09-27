
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadProject } from '../actions';
import Main from '../components/main';

// const App = ({ path, loadProject }) => (<Main path={path} />);

const loadData = ({loadProject}) => {
    loadProject();
}

class App extends Component {
  componentWillMount() {
    loadData(this.props);
  }

  render() {
    const {project} = this.props;
    return <Main project={project} />;
  }
}



const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, { loadProject })(App);
