
import React from 'react';
import { connect } from 'react-redux';

import Main from './main';
import Welcome from './welcome'; 

const App = ({ loaded }) => (
  loaded ? <Main />  : <Welcome />
);

const mapStateToProps = ({ project }) => ({ loaded: project.loaded });

export default connect(mapStateToProps)(App);