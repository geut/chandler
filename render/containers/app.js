
import React from 'react';
import { connect } from 'react-redux';

import Main from './main';
import Dashboard from '../components/dashboard'; 

const App = ({ loaded }) => (
  loaded ? <Main />  : <Dashboard />
);

const mapStateToProps = ({ project }) => ({ loaded: project.loaded });

export default connect(mapStateToProps)(App);