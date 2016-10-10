
import React, { Component } from 'react';

import Header from './header';
import Changelog from './changelog';

export default class Main extends Component {
  
  render() {
    const { project, changelog } = this.props;

    return (
      <div>
        <Header project={project} />
        <Changelog changelog={changelog} />
      </div>
    );
  }
}

