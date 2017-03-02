
import React from 'react';
import { connect } from 'react-redux';

import Main from './main';
import Welcome from './welcome';
import Message from '../components/message';

const App = ({ loaded, error }) => (
  <div>
    {
      error &&
      <Message message={error} type="error"/>
    }
    {
      loaded ? <Main />  : <Welcome />
    }
  </div>
);

const mapStateToProps = ({ project, error }) => (
  {
    loaded: project.loaded,
    error
  }
);

export default connect(mapStateToProps)(App);
