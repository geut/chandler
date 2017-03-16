
import React from 'react';
import { connect } from 'react-redux';

import Main from './main';
import Welcome from './welcome';
import Message from '../components/message';

const App = ({ loaded, error }) => (
  <div>
    <Message message={error} type="error"/>
    <Main />
    <Welcome />
  </div>
);

const mapStateToProps = ({ error }) => (
  {

    error
  }
);

export default connect(mapStateToProps)(App);
