import React from 'react';
import { connect } from 'react-redux';

import Main from '../components/main';

const App = ({ project }) => (<Main project={project} />);

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(App);